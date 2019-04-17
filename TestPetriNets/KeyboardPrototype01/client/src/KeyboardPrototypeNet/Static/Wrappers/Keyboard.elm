module KeyboardPrototypeNet.Static.Wrappers.Keyboard exposing(..)
import KeyboardPrototypeNet.Static.Types.Keyboard exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)

import Dict exposing (Dict)

unwrap : Msg -> Transition
unwrap msg =
    case msg of
        KeyboardPrototypeNet.Static.Types.Keyboard.NoOp  -> Internal TNoOp 
        (KeyboardPrototypeNet.Static.Types.Keyboard.BoardKeyPressed myKeyInteger)  -> External (TBoardKeyPressed myKeyInteger) 

