module MyKeyboardNet.Static.Helpers.Keyboard exposing (..)
import Dict exposing (Dict)

import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.Types
import Dict exposing (Dict)


getClientKeyStateDict : Keyboard -> (Dict Int Bool)
getClientKeyStateDict (Keyboard clientKeyStateDict _ _)  = clientKeyStateDict

getMyColor : Keyboard -> Int
getMyColor (Keyboard _ myColor _)  = myColor

getClientKeyColorDict : Keyboard -> (Dict Int Int)
getClientKeyColorDict (Keyboard _ _ clientKeyColorDict)  = clientKeyColorDict



updateClientKeyStateDict : (Dict Int Bool) -> Keyboard -> Keyboard
updateClientKeyStateDict newclientKeyStateDict (Keyboard clientKeyStateDict myColor clientKeyColorDict)  = (Keyboard newclientKeyStateDict myColor clientKeyColorDict) 

updateMyColor : Int -> Keyboard -> Keyboard
updateMyColor newmyColor (Keyboard clientKeyStateDict myColor clientKeyColorDict)  = (Keyboard clientKeyStateDict newmyColor clientKeyColorDict) 

updateClientKeyColorDict : (Dict Int Int) -> Keyboard -> Keyboard
updateClientKeyColorDict newclientKeyColorDict (Keyboard clientKeyStateDict myColor clientKeyColorDict)  = (Keyboard clientKeyStateDict myColor newclientKeyColorDict) 


alterClientKeyStateDict : ((Dict Int Bool) -> (Dict Int Bool)) -> Keyboard -> Keyboard
alterClientKeyStateDict f (Keyboard clientKeyStateDict myColor clientKeyColorDict)  = 
    let
        newclientKeyStateDict = f clientKeyStateDict
    in
        (Keyboard newclientKeyStateDict myColor clientKeyColorDict) 

alterMyColor : (Int -> Int) -> Keyboard -> Keyboard
alterMyColor f (Keyboard clientKeyStateDict myColor clientKeyColorDict)  = 
    let
        newmyColor = f myColor
    in
        (Keyboard clientKeyStateDict newmyColor clientKeyColorDict) 

alterClientKeyColorDict : ((Dict Int Int) -> (Dict Int Int)) -> Keyboard -> Keyboard
alterClientKeyColorDict f (Keyboard clientKeyStateDict myColor clientKeyColorDict)  = 
    let
        newclientKeyColorDict = f clientKeyColorDict
    in
        (Keyboard clientKeyStateDict myColor newclientKeyColorDict) 



