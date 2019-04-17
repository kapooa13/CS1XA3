module FrontEndNet.Static.Helpers.Keyboard exposing (..)
import Dict exposing (Dict)

import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.Types
import Dict exposing (Dict)


getClientKeyStateDict : Keyboard -> (Dict Int Bool)
getClientKeyStateDict (Keyboard clientKeyStateDict)  = clientKeyStateDict



updateClientKeyStateDict : (Dict Int Bool) -> Keyboard -> Keyboard
updateClientKeyStateDict newclientKeyStateDict (Keyboard clientKeyStateDict)  = (Keyboard newclientKeyStateDict) 


alterClientKeyStateDict : ((Dict Int Bool) -> (Dict Int Bool)) -> Keyboard -> Keyboard
alterClientKeyStateDict f (Keyboard clientKeyStateDict)  = 
    let
        newclientKeyStateDict = f clientKeyStateDict
    in
        (Keyboard newclientKeyStateDict) 



