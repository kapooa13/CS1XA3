{-# LANGUAGE OverloadedStrings #-} -- allows us to use T.Text directly

module ClientServerSpec where

import Types
import TypeHelpers

--directory to output the generated files
outputDirectory = "."
--where the generator is
generatorRoot = "../../petri-app-land/"
--              "~/petri-app-land"

keyboardNet :: Net
keyboardNet =
    let
        mainMenu =
            Place "MainMenu" 
                    [] --server state (persistent for this place)
                    [] --player state (client state stored on server)
                    [] --client state (state stored on client)
                    Nothing

        keyboardRoom =
            Place "KeyboardRoom"
                    []
                    []
                    []
                    Nothing

        goToTwo =                 
            Transition
                OriginClientOnly
                (constructor "GoToTwo" [])
                [("FirstPlace", Just ("SecondPlace", constructor "WentToSecondPlace" [], Nothing))
                ,("SecondPlace", Nothing) --some people will stay
                ]
                Nothing

        goToOne =                 
            Transition
                OriginClientOnly
                (constructor "GoToOne" [])
                [("SecondPlace", Just ("FirstPlace", constructor "WentToFirstPlace" [], Nothing))
                ,("SecondPlace", Nothing)
                ]
                Nothing
    in
        Net
            "MyExampleNet"  -- name of the petri net (by convention, suffixed by "Net")
            "FirstPlace"      -- starting place when a user logs in
            [placeOne
            ,placeTwo
            ]  -- list of all defined places
            [goToTwo
            ,goToOne
            ]   -- list of all defined transitions
            []  -- list of installed plugins

-- the entire client-server app
clientServerApp :: ClientServerApp
clientServerApp =
    ( "MyExampleNet"            --starting net for a client
    , [exampleNet]              --all the nets in this client/server app (current only one is supported at a time)
    , []       --extra client types used in states or messages
    )
