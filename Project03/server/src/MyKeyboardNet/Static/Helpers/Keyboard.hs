module MyKeyboardNet.Static.Helpers.Keyboard where


import MyKeyboardNet.Static.Types
import MyKeyboardNet.Static.Types
import Static.Dict (Dict)

import Static.List
getServerKeyColorDict :: Keyboard -> (Dict Int Int)
getServerKeyColorDict (Keyboard serverKeyColorDict)  = serverKeyColorDict



updateServerKeyColorDict :: (Dict Int Int) -> Keyboard -> Keyboard
updateServerKeyColorDict newserverKeyColorDict (Keyboard serverKeyColorDict)  = (Keyboard newserverKeyColorDict) 


alterServerKeyColorDict :: ((Dict Int Int) -> (Dict Int Int)) -> Keyboard -> Keyboard
alterServerKeyColorDict f (Keyboard serverKeyColorDict)  = 
    let
        newserverKeyColorDict = f serverKeyColorDict
    in
        (Keyboard newserverKeyColorDict) 



