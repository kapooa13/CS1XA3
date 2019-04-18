module MyKeyboardNet.Static.Subs exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.View.Keyboard as Keyboard

import MyKeyboardNet.Static.Wrappers.Keyboard


subs : NetState -> Sub Transition
subs model =
    case model of
        SKeyboard m -> Sub.map MyKeyboardNet.Static.Wrappers.Keyboard.unwrap <| Keyboard.subs m

