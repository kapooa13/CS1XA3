module MyKeyboardNet.Static.Helpers.Keyboard where


import MyKeyboardNet.Static.Types
import MyKeyboardNet.Static.Types
import Static.Dict (Dict)

import Static.List
getServerKeyColorDict :: Keyboard -> (Dict Int Int)
getServerKeyColorDict (Keyboard serverKeyColorDict _)  = serverKeyColorDict

getPlayerCounter :: Keyboard -> Int
getPlayerCounter (Keyboard _ playerCounter)  = playerCounter



updateServerKeyColorDict :: (Dict Int Int) -> Keyboard -> Keyboard
updateServerKeyColorDict newserverKeyColorDict (Keyboard serverKeyColorDict playerCounter)  = (Keyboard newserverKeyColorDict playerCounter) 

updatePlayerCounter :: Int -> Keyboard -> Keyboard
updatePlayerCounter newplayerCounter (Keyboard serverKeyColorDict playerCounter)  = (Keyboard serverKeyColorDict newplayerCounter) 


alterServerKeyColorDict :: ((Dict Int Int) -> (Dict Int Int)) -> Keyboard -> Keyboard
alterServerKeyColorDict f (Keyboard serverKeyColorDict playerCounter)  = 
    let
        newserverKeyColorDict = f serverKeyColorDict
    in
        (Keyboard newserverKeyColorDict playerCounter) 

alterPlayerCounter :: (Int -> Int) -> Keyboard -> Keyboard
alterPlayerCounter f (Keyboard serverKeyColorDict playerCounter)  = 
    let
        newplayerCounter = f playerCounter
    in
        (Keyboard serverKeyColorDict newplayerCounter) 



