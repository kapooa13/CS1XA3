module MyKeyboardNet.Static.Wrappers.Keyboard exposing(..)
import MyKeyboardNet.Static.Types.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import Dict exposing (Dict)
import Dict exposing (Dict)

import Dict exposing (Dict)

unwrap : Msg -> Transition
unwrap msg =
    case msg of
        (MyKeyboardNet.Static.Types.Keyboard.BoardKeyPressed clientKeyColorDict myColor myKeyInt)  -> External (TBoardKeyPressed clientKeyColorDict myColor myKeyInt) 
        MyKeyboardNet.Static.Types.Keyboard.NoOp  -> Internal TNoOp 
        (MyKeyboardNet.Static.Types.Keyboard.MakeDark myKeyInt)  -> External (TMakeDark myKeyInt) 
        (MyKeyboardNet.Static.Types.Keyboard.MakeLight myKeyInt)  -> External (TMakeLight myKeyInt) 
        (MyKeyboardNet.Static.Types.Keyboard.RandomColorNumber myColor)  -> Internal (TRandomColorNumber myColor) 
        MyKeyboardNet.Static.Types.Keyboard.RollRandomNum  -> External TRollRandomNum 
        (MyKeyboardNet.Static.Types.Keyboard.InfoUpdating clientKeyColorDict playerCounter)  -> External (TInfoUpdating clientKeyColorDict playerCounter) 

