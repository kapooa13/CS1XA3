module MyKeyboardNet.Static.Helpers.Keyboard exposing (..)
import Dict exposing (Dict)

import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.Types
import Dict exposing (Dict)


getClientKeyStateDict : Keyboard -> (Dict Int Bool)
getClientKeyStateDict (Keyboard clientKeyStateDict _ _ _)  = clientKeyStateDict

getMyColor : Keyboard -> Int
getMyColor (Keyboard _ myColor _ _)  = myColor

getClientKeyColorDict : Keyboard -> (Dict Int Int)
getClientKeyColorDict (Keyboard _ _ clientKeyColorDict _)  = clientKeyColorDict

getMyKeyInt : Keyboard -> Int
getMyKeyInt (Keyboard _ _ _ myKeyInt)  = myKeyInt



updateClientKeyStateDict : (Dict Int Bool) -> Keyboard -> Keyboard
updateClientKeyStateDict newclientKeyStateDict (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = (Keyboard newclientKeyStateDict myColor clientKeyColorDict myKeyInt) 

updateMyColor : Int -> Keyboard -> Keyboard
updateMyColor newmyColor (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = (Keyboard clientKeyStateDict newmyColor clientKeyColorDict myKeyInt) 

updateClientKeyColorDict : (Dict Int Int) -> Keyboard -> Keyboard
updateClientKeyColorDict newclientKeyColorDict (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = (Keyboard clientKeyStateDict myColor newclientKeyColorDict myKeyInt) 

updateMyKeyInt : Int -> Keyboard -> Keyboard
updateMyKeyInt newmyKeyInt (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = (Keyboard clientKeyStateDict myColor clientKeyColorDict newmyKeyInt) 


alterClientKeyStateDict : ((Dict Int Bool) -> (Dict Int Bool)) -> Keyboard -> Keyboard
alterClientKeyStateDict f (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = 
    let
        newclientKeyStateDict = f clientKeyStateDict
    in
        (Keyboard newclientKeyStateDict myColor clientKeyColorDict myKeyInt) 

alterMyColor : (Int -> Int) -> Keyboard -> Keyboard
alterMyColor f (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = 
    let
        newmyColor = f myColor
    in
        (Keyboard clientKeyStateDict newmyColor clientKeyColorDict myKeyInt) 

alterClientKeyColorDict : ((Dict Int Int) -> (Dict Int Int)) -> Keyboard -> Keyboard
alterClientKeyColorDict f (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = 
    let
        newclientKeyColorDict = f clientKeyColorDict
    in
        (Keyboard clientKeyStateDict myColor newclientKeyColorDict myKeyInt) 

alterMyKeyInt : (Int -> Int) -> Keyboard -> Keyboard
alterMyKeyInt f (Keyboard clientKeyStateDict myColor clientKeyColorDict myKeyInt)  = 
    let
        newmyKeyInt = f myKeyInt
    in
        (Keyboard clientKeyStateDict myColor clientKeyColorDict newmyKeyInt) 



