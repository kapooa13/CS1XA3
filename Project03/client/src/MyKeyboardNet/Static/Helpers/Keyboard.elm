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

getPlayerCounter : Keyboard -> Int
getPlayerCounter (Keyboard _ _ _ playerCounter)  = playerCounter



updateClientKeyStateDict : (Dict Int Bool) -> Keyboard -> Keyboard
updateClientKeyStateDict newclientKeyStateDict (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = (Keyboard newclientKeyStateDict myColor clientKeyColorDict playerCounter) 

updateMyColor : Int -> Keyboard -> Keyboard
updateMyColor newmyColor (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = (Keyboard clientKeyStateDict newmyColor clientKeyColorDict playerCounter) 

updateClientKeyColorDict : (Dict Int Int) -> Keyboard -> Keyboard
updateClientKeyColorDict newclientKeyColorDict (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = (Keyboard clientKeyStateDict myColor newclientKeyColorDict playerCounter) 

updatePlayerCounter : Int -> Keyboard -> Keyboard
updatePlayerCounter newplayerCounter (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = (Keyboard clientKeyStateDict myColor clientKeyColorDict newplayerCounter) 


alterClientKeyStateDict : ((Dict Int Bool) -> (Dict Int Bool)) -> Keyboard -> Keyboard
alterClientKeyStateDict f (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = 
    let
        newclientKeyStateDict = f clientKeyStateDict
    in
        (Keyboard newclientKeyStateDict myColor clientKeyColorDict playerCounter) 

alterMyColor : (Int -> Int) -> Keyboard -> Keyboard
alterMyColor f (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = 
    let
        newmyColor = f myColor
    in
        (Keyboard clientKeyStateDict newmyColor clientKeyColorDict playerCounter) 

alterClientKeyColorDict : ((Dict Int Int) -> (Dict Int Int)) -> Keyboard -> Keyboard
alterClientKeyColorDict f (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = 
    let
        newclientKeyColorDict = f clientKeyColorDict
    in
        (Keyboard clientKeyStateDict myColor newclientKeyColorDict playerCounter) 

alterPlayerCounter : (Int -> Int) -> Keyboard -> Keyboard
alterPlayerCounter f (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter)  = 
    let
        newplayerCounter = f playerCounter
    in
        (Keyboard clientKeyStateDict myColor clientKeyColorDict newplayerCounter) 



