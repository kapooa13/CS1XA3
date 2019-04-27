{-# LANGUAGE OverloadedStrings #-} -- allows us to use T.Text directly

module ClientServerSpec where

import Types
import TypeHelpers

--directory to output the generated files
outputDirectory = "."
--where the generator is
generatorRoot = "../../petri-app-land"


-- DoctypeT variables

myKeyInt = dt (IntRangeT 0 62) "myKeyInt" "representative of Key"

myColor = dt (IntRangeT 0 24) "myColor" "represents index of colour to be used by client"

myKeyStateBool = dt BoolT "keyStateBool" "represents state of Key" -- note: True == key being pressed

myDict = DictT myKeyInt myKeyStateBool

clientKeyStateDict = dt myDict "clientKeyStateDict" "dictionary representing state of keys"


myKeyColor = dt (IntRangeT 0 24) "myKeyColor" "represents color of keys"

myserverKeyColor = dt (IntRangeT 0 24) "myserverKeyColor" "represents color of keys on server"

clientKeyColorDict = dt (DictT myKeyInt myKeyColor) "clientKeyColorDict" "dictionary for representing color of keys" 

serverKeyColorDict = dt (DictT myKeyInt myKeyColor) "serverKeyColorDict" "dictionary for representing color of keys on server"


roomNum = dt (IntRangeT 0 1000) "roomNum" "represents room number/index where player is"

playerCounter = dt (IntRangeT 0 100) "playerCounter" "represents number of players in room"


keyboardNet :: Net
keyboardNet =
    let
{-
        menuPlace =
            Place "MainMenu"
                    [] --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [] --client state (state stored on client)
                    Nothing
-}            

        keyboardPlace =
            Place "Keyboard" 
                    [serverKeyColorDict, playerCounter] --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [clientKeyStateDict, myColor, clientKeyColorDict, playerCounter] --client state (state stored on client)
                    Nothing

        boardKeyPressed =                 
            Transition
                OriginClientOnly
                (constructor "BoardKeyPressed" [clientKeyColorDict, myColor, myKeyInt])
                [("Keyboard", Just ("Keyboard", constructor "BoardKeyUnpressed" [clientKeyColorDict, myColor, myKeyInt], Just "NoOp"))
                ]
                Nothing

        noOp =
            ClientTransition        -- Note that this is a client transition only
                (msg "NoOp" [])
                "Keyboard"          -- from and to Keyboard
                Nothing

        makeDark =
            Transition
                OriginClientOnly
                (constructor "MakeDark" [myKeyInt])
                [("Keyboard", Just ("Keyboard", constructor "MadeKeyDark" [myKeyInt], Nothing))
                ]
                Nothing

        makeLight =
            Transition
                OriginClientOnly
                (constructor "MakeLight" [myKeyInt])
                [("Keyboard", Just ("Keyboard", constructor "MadeKeyLight" [myKeyInt], Nothing))
                ]
                Nothing

        infoUpdater =
            Transition
                OriginClientOnly
                (constructor "InfoUpdating" [clientKeyColorDict, playerCounter])
                [("Keyboard", Just ("Keyboard", constructor "InfoUpdated" [clientKeyColorDict, playerCounter], Nothing))
                ]
                Nothing

{-
        randomColor =    -- reassigns my color val
            Transition
                OriginClientOnly
                (constructor "RandomColorNumber" [myColor])
                [("Keyboard", Just ("Keyboard", constructor "ChangedColorNumber" [myColor], Just "BoardKeyPressed"))
                ]
                Nothing
-}

        randomColor =
            ClientTransition        -- Note that this is a client transition only
                (msg "RandomColorNumber" [myColor])
                "Keyboard"          -- from and to Keyboard
                Nothing


        roll =           -- calls randomColor random val
            Transition
                OriginClientOnly
                (constructor "RollRandomNum" [])
                [("Keyboard", Just ("Keyboard", constructor "RandomNumRolled" [], Just "RandomColorNumber"))
                ]
                Nothing


    in
        Net
            "MyKeyboardNet"     -- name of the petri net (by convention, suffixed by "Net")
            "Keyboard"          -- starting place when a user logs in
            [keyboardPlace
            ]                   -- list of all defined places
            [boardKeyPressed
            ,noOp
            ,makeDark
            ,makeLight
            ,randomColor
            ,roll
            ,infoUpdater
            ]                   -- list of all defined transitions
            []                  -- list of installed plugins

-- the entire client-server app
clientServerApp :: ClientServerApp
clientServerApp =
    ( "MyKeyboardNet"              --starting net for a client
    , [keyboardNet]              --all the nets in this client/server app (current only one is supported at a time)
    , []                         --extra client types used in states or messages
    )
