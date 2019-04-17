module FrontEndNet.Static.Wrappers.Keyboard exposing(..)
import FrontEndNet.Static.Types.Keyboard exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Types exposing(..)

import Dict exposing (Dict)

unwrap : Msg -> Transition
unwrap msg =
    case msg of
        (FrontEndNet.Static.Types.Keyboard.BoardKeyPressed myKeyInt)  -> External (TBoardKeyPressed myKeyInt) 
        FrontEndNet.Static.Types.Keyboard.NoOp  -> Internal TNoOp 
        (FrontEndNet.Static.Types.Keyboard.MakeDark clientKeyStateList myKeyInt)  -> External (TMakeDark clientKeyStateList myKeyInt) 
        (FrontEndNet.Static.Types.Keyboard.MakeLight clientKeyStateList myKeyInt)  -> External (TMakeLight clientKeyStateList myKeyInt) 

