{-# LANGUAGE OverloadedStrings #-} -- allows us to use T.Text directly

module ClientServerSpec where

import Types
import TypeHelpers

--directory to output the generated files
outputDirectory = "."
--where the generator is
generatorRoot = "../../../petri-app-land"

{-
- Layout for Keyboard prototype
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

myKeyInt = dt (IntRangeT 0 20) "myKeyInteger" "representative of key"

keyPrototypeNet :: Net
keyPrototypeNet =
    let
        keyboardPlace =
            Place "Keyboard" 
                    [] --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [] --client state (state stored on client)
                    Nothing

        boardKeyPressed =                 
            Transition
                OriginClientOnly
                (constructor "BoardKeyPressed" [myKeyInt])
                [("Keyboard", Just ("Keyboard", constructor "DeflatedBoardKey" [myKeyInt], Just "NoOp"))
                ]
                Nothing

        noOp =
            ClientTransition        -- Note that this is a client transition only
                (msg "NoOp" [])
                "Keyboard"          -- only from and to Keyboard
                Nothing

    in
        Net
            "KeyboardPrototypeNet"  -- name of the petri net (by convention, suffixed by "Net")
            "Keyboard"      -- starting place when a user logs in
            [keyboardPlace
            ]  -- list of all defined places
            [noOp
            ,boardKeyPressed
            ]   -- list of all defined transitions
            []  -- list of installed plugins

-- the entire client-server app
clientServerApp :: ClientServerApp
clientServerApp =
    ( "KeyboardPrototypeNet"            --starting net for a client
    , [keyPrototypeNet]              --all the nets in this client/server app (current only one is supported at a time)
    , []       --extra client types used in states or messages
    )
