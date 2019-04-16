{-# LANGUAGE OverloadedStrings #-} -- allows us to use T.Text directly

module ClientServerSpec where

import Types
import TypeHelpers

--directory to output the generated files
outputDirectory = "."
--where the generator is
generatorRoot = "../petri-app-land/"

-- clientKey = dt StringT "clientKeyPressed" "key pressed by a client"

myKeyInt = dt (IntRangeT 0 10) "myKeyInteger" "representative of key"

keyboardNet :: Net
keyboardNet =
    let
        keyboardPlace =
            Place "Keyboard" 
                    [] 
                              --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [] --client state (state stored on client)
                    Nothing
        {-
        placeTwo =
            Place "SecondPlace"
                    []
                    []
                    []
                    Nothing
        

        goToTwo =                 
            Transition
                OriginClientOnly
                (constructor "GoToTwo" [])
                [("Keyboard", Just ("SecondPlace", constructor "WentToSecondPlace" [], Nothing))
                ,("SecondPlace", Nothing) --some people will stay
                ]
                -- above is a list of connections

type Connection = (T.Text                  --from place
                      ,Maybe (T.Text       --to place
                      ,Constructor         --"response" message
                      ,Maybe ClientCmd))   -- client command                

                Nothing

        -}

        someKeyPressed =                 
            Transition
                OriginClientOnly
                (constructor "SomeKeyPressed" [myKeyInt]) -- message that initiates the transition
                [("Keyboard", Just ("Keyboard", constructor "KeyUnpressed" [myKeyInt], Just "NoOp"))
                                                                             --Just msg
                ]
                Nothing

        noOp =
            ClientTransition    -- Note that this is a client only transition
                (msg "NoOp" [])
                "Keyboard"      -- Client Place (no from and to)
                Nothing

    in
        Net
            "KeyboardNet"    -- name of the petri net (by convention, suffixed by "Net")
            "Keyboard"      -- starting place when a user logs in
            [keyboardPlace
            ]  -- list of all defined places
            [someKeyPressed, noOp
            ]   -- list of all defined transitions
            []  -- list of installed plugins

-- the entire client-server app
clientServerApp :: ClientServerApp
clientServerApp =
    ( "KeyboardNet"            --starting net for a client
    , [keyboardNet]              --all the nets in this client/server app (current only one is supported at a time)
    , []       --extra client types used in states or messages
    )
