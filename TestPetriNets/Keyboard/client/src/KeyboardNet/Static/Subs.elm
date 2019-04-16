module KeyboardNet.Static.Subs exposing(..)
import KeyboardNet.Static.Types exposing(..)
import KeyboardNet.View.Keyboard as Keyboard

import KeyboardNet.Static.Wrappers.Keyboard


subs : NetState -> Sub Transition
subs model =
    case model of
        SKeyboard m -> Sub.map KeyboardNet.Static.Wrappers.Keyboard.unwrap <| Keyboard.subs m

