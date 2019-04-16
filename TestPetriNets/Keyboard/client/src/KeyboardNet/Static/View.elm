module KeyboardNet.Static.View exposing(..)
import Html exposing(Html)
import Static.Types exposing (NetModel)
import KeyboardNet.Static.Types exposing(..)
import KeyboardNet.View.Keyboard

import KeyboardNet.Static.Wrappers.Keyboard


view : NetState -> Html Transition
view ns =
    case ns of
        SKeyboard m -> Html.map KeyboardNet.Static.Wrappers.Keyboard.unwrap <| KeyboardNet.View.Keyboard.view m

title : NetState -> String
title ns =
    case ns of
        SKeyboard m -> KeyboardNet.View.Keyboard.title m

