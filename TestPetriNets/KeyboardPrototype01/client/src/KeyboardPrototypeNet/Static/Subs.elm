module KeyboardPrototypeNet.Static.Subs exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.View.Keyboard as Keyboard

import KeyboardPrototypeNet.Static.Wrappers.Keyboard


subs : NetState -> Sub Transition
subs model =
    case model of
        SKeyboard m -> Sub.map KeyboardPrototypeNet.Static.Wrappers.Keyboard.unwrap <| Keyboard.subs m

