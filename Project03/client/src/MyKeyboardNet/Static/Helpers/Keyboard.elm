module MyKeyboardNet.Static.Helpers.Keyboard exposing (..)
import Dict exposing (Dict)

import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.Types
import Dict exposing (Dict)


getClientKeyStateDict : Keyboard -> (Dict Int Bool)
getClientKeyStateDict (Keyboard clientKeyStateDict _)  = clientKeyStateDict

getMyColor : Keyboard -> Int
getMyColor (Keyboard _ myColor)  = myColor



updateClientKeyStateDict : (Dict Int Bool) -> Keyboard -> Keyboard
updateClientKeyStateDict newclientKeyStateDict (Keyboard clientKeyStateDict myColor)  = (Keyboard newclientKeyStateDict myColor) 

updateMyColor : Int -> Keyboard -> Keyboard
updateMyColor newmyColor (Keyboard clientKeyStateDict myColor)  = (Keyboard clientKeyStateDict newmyColor) 


alterClientKeyStateDict : ((Dict Int Bool) -> (Dict Int Bool)) -> Keyboard -> Keyboard
alterClientKeyStateDict f (Keyboard clientKeyStateDict myColor)  = 
    let
        newclientKeyStateDict = f clientKeyStateDict
    in
        (Keyboard newclientKeyStateDict myColor) 

alterMyColor : (Int -> Int) -> Keyboard -> Keyboard
alterMyColor f (Keyboard clientKeyStateDict myColor)  = 
    let
        newmyColor = f myColor
    in
        (Keyboard clientKeyStateDict newmyColor) 



