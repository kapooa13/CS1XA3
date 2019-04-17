module FrontEndNet.Static.Subs exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.View.Keyboard as Keyboard

import FrontEndNet.Static.Wrappers.Keyboard


subs : NetState -> Sub Transition
subs model =
    case model of
        SKeyboard m -> Sub.map FrontEndNet.Static.Wrappers.Keyboard.unwrap <| Keyboard.subs m

