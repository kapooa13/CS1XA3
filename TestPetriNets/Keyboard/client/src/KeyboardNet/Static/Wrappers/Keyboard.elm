module KeyboardNet.Static.Wrappers.Keyboard exposing(..)
import KeyboardNet.Static.Types.Keyboard exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)
import KeyboardNet.Static.Types exposing(..)

import Dict exposing (Dict)

unwrap : Msg -> Transition
unwrap msg =
    case msg of
        (KeyboardNet.Static.Types.Keyboard.SomeKeyPressed myKeyInteger)  -> External (TSomeKeyPressed myKeyInteger) 
        KeyboardNet.Static.Types.Keyboard.NoOp  -> Internal TNoOp 

