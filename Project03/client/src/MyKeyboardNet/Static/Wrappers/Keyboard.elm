module MyKeyboardNet.Static.Wrappers.Keyboard exposing(..)
import MyKeyboardNet.Static.Types.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)

import Dict exposing (Dict)

unwrap : Msg -> Transition
unwrap msg =
    case msg of
        (MyKeyboardNet.Static.Types.Keyboard.BoardKeyPressed myKeyInt)  -> External (TBoardKeyPressed myKeyInt) 
        MyKeyboardNet.Static.Types.Keyboard.NoOp  -> Internal TNoOp 
        (MyKeyboardNet.Static.Types.Keyboard.MakeDark otherColor myKeyInt)  -> External (TMakeDark otherColor myKeyInt) 
        (MyKeyboardNet.Static.Types.Keyboard.MakeLight otherColor myKeyInt)  -> External (TMakeLight otherColor myKeyInt) 
        (MyKeyboardNet.Static.Types.Keyboard.RandomColorNumber myColor)  -> Internal (TRandomColorNumber myColor) 
        MyKeyboardNet.Static.Types.Keyboard.RollRandomNum  -> External TRollRandomNum 

