{-# LANGUAGE OverloadedStrings #-} -- allows us to use T.Text directly

module ClientServerSpec where

import Types
import TypeHelpers

--directory to output the generated files
outputDirectory = "."
--where the generator is
generatorRoot = "../../petri-app-land"


-- DoctypeT variables

myKeyInt = dt (IntRangeT 0 20) "myKeyInt" "representative of Key"

myColor = dt (IntRangeT 0 24) "myColor" "represents index of colour to be used by client"

myKeyStateBool = dt BoolT "keyStateBool" "represents state of Key" -- note: True == key being pressed

myDict = DictT myKeyInt myKeyStateBool

clientKeyStateDict = dt myDict "clientKeyStateDict" "dictionary representing state of keys"


myKeyColor = dt (IntRangeT 0 24) "myKeyColor" "represents color of keys"

myserverKeyColor = dt (IntRangeT 0 24) "myserverKeyColor" "represents color of keys on server"

clientKeyColorDict = dt (DictT myKeyInt myKeyColor) "clientKeyColorDict" "dictionary for representing color of keys" 

serverKeyColorDict = dt (DictT myKeyInt myKeyColor) "serverKeyColorDict" "dictionary for representing color of keys on server" 

{-
- Layout for Keyboard keys
-
   Key    CorrespondingInt

-- white keys
    q           0
    w           1
    e           2
    r           3
    t           4
    y           5
    u           6
    i           7
    o           8
    p           9
    [           10
    ]           11

-- black keys
    2           12
    3           13
    4           14
    6           15
    7           16
    9           17
    0           18
    -           19
-}

keyboardNet :: Net
keyboardNet =
    let
        keyboardPlace =
            Place "Keyboard" 
                    [serverKeyColorDict] --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [clientKeyStateDict, myColor, clientKeyColorDict] --client state (state stored on client)
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
            ]                   -- list of all defined transitions
            []                  -- list of installed plugins

-- the entire client-server app
clientServerApp :: ClientServerApp
clientServerApp =
    ( "MyKeyboardNet"              --starting net for a client
    , [keyboardNet]              --all the nets in this client/server app (current only one is supported at a time)
    , []                         --extra client types used in states or messages
    )
