module FrontEndNet.Static.Helpers.Keyboard exposing (..)
import Dict exposing (Dict)

import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.Types


getClientKeyStateList : Keyboard -> (List Int)
getClientKeyStateList (Keyboard clientKeyStateList)  = clientKeyStateList



updateClientKeyStateList : (List Int) -> Keyboard -> Keyboard
updateClientKeyStateList newclientKeyStateList (Keyboard clientKeyStateList)  = (Keyboard newclientKeyStateList) 


alterClientKeyStateList : ((List Int) -> (List Int)) -> Keyboard -> Keyboard
alterClientKeyStateList f (Keyboard clientKeyStateList)  = 
    let
        newclientKeyStateList = f clientKeyStateList
    in
        (Keyboard newclientKeyStateList) 



