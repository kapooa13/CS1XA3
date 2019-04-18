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

getOtherColor : Keyboard -> Int
getOtherColor (Keyboard _ _ otherColor)  = otherColor



updateClientKeyStateDict : (Dict Int Bool) -> Keyboard -> Keyboard
updateClientKeyStateDict newclientKeyStateDict (Keyboard clientKeyStateDict myColor otherColor)  = (Keyboard newclientKeyStateDict myColor otherColor) 

updateMyColor : Int -> Keyboard -> Keyboard
updateMyColor newmyColor (Keyboard clientKeyStateDict myColor otherColor)  = (Keyboard clientKeyStateDict newmyColor otherColor) 

updateOtherColor : Int -> Keyboard -> Keyboard
updateOtherColor newotherColor (Keyboard clientKeyStateDict myColor otherColor)  = (Keyboard clientKeyStateDict myColor newotherColor) 


alterClientKeyStateDict : ((Dict Int Bool) -> (Dict Int Bool)) -> Keyboard -> Keyboard
alterClientKeyStateDict f (Keyboard clientKeyStateDict myColor otherColor)  = 
    let
        newclientKeyStateDict = f clientKeyStateDict
    in
        (Keyboard newclientKeyStateDict myColor otherColor) 

alterMyColor : (Int -> Int) -> Keyboard -> Keyboard
alterMyColor f (Keyboard clientKeyStateDict myColor otherColor)  = 
    let
        newmyColor = f myColor
    in
        (Keyboard clientKeyStateDict newmyColor otherColor) 

alterOtherColor : (Int -> Int) -> Keyboard -> Keyboard
alterOtherColor f (Keyboard clientKeyStateDict myColor otherColor)  = 
    let
        newotherColor = f otherColor
    in
        (Keyboard clientKeyStateDict myColor newotherColor) 



