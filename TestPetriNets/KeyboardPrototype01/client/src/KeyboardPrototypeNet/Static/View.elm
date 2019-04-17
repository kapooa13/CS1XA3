module KeyboardPrototypeNet.Static.View exposing(..)
import Html exposing(Html)
import Static.Types exposing (NetModel)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.View.Keyboard

import KeyboardPrototypeNet.Static.Wrappers.Keyboard


view : NetState -> Html Transition
view ns =
    case ns of
        SKeyboard m -> Html.map KeyboardPrototypeNet.Static.Wrappers.Keyboard.unwrap <| KeyboardPrototypeNet.View.Keyboard.view m

title : NetState -> String
title ns =
    case ns of
        SKeyboard m -> KeyboardPrototypeNet.View.Keyboard.title m

