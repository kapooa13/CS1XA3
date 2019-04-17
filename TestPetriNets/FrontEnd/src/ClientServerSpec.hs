{-# LANGUAGE OverloadedStrings #-} -- allows us to use T.Text directly

module ClientServerSpec where

import Types
import TypeHelpers

--directory to output the generated files
outputDirectory = "."
--where the generator is
generatorRoot = "../../../petri-app-land"



myKeyInt = dt (IntRangeT 0 3) "myKeyInt" "representative of key"

clientKeyStateList = dt (ListT ((IntRangeT 0 1),"clientKeyStateInt","represents state of a key")) "clientKeyStateList" "represents state of all eys"
-- note: 1 represents pressed, 0 means not pressed



{-
- Layout for Keyboard prototype
-
   Key    CorrespondingInt (translates to index in clientKeyState)

-- white keys
    q           0
    w           1

-}


frontEndNet :: Net
frontEndNet =
    let
        keyboardPlace =
            Place "Keyboard" 
                    [] --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [clientKeyStateList] --client state (state stored on client)
                    Nothing

        boardKeyPressed =                 
            Transition
                OriginClientOnly
                (constructor "BoardKeyPressed" [myKeyInt])
                [("Keyboard", Just ("Keyboard", constructor "BoardKeyUnpressed" [myKeyInt], Just "NoOp"))
                ]
                Nothing

        noOp =
            ClientTransition        -- Note that this is a client transition only
                (msg "NoOp" [])
                "Keyboard"          -- only from and to Keyboard
                Nothing

        makeDark =                  -- would make specific key dark
            ClientTransition
                (msg "MakeDark" [myKeyInt])
                "Keyboard"
                Nothing

        makeLight =                  -- would make specific key light
            ClientTransition
                (msg "MakeLight" [myKeyInt])
                "Keyboard"
                Nothing


    in
        Net
            "FrontEndNet"  -- name of the petri net (by convention, suffixed by "Net")
            "Keyboard"      -- starting place when a user logs in
            [keyboardPlace
            ]  -- list of all defined places
            [boardKeyPressed
            ,noOp
            ,makeDark
            ,makeLight
            ]   -- list of all defined transitions
            []  -- list of installed plugins

-- the entire client-server app
clientServerApp :: ClientServerApp
clientServerApp =
    ( "FrontEndNet"            --starting net for a client
    , [frontEndNet]              --all the nets in this client/server app (current only one is supported at a time)
    , []       --extra client types used in states or messages
    )
