module MyKeyboardNet.Static.View exposing(..)
import Html exposing(Html)
import Static.Types exposing (NetModel)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.View.Keyboard

import MyKeyboardNet.Static.Wrappers.Keyboard


view : NetState -> Html Transition
view ns =
    case ns of
        SKeyboard m -> Html.map MyKeyboardNet.Static.Wrappers.Keyboard.unwrap <| MyKeyboardNet.View.Keyboard.view m

title : NetState -> String
title ns =
    case ns of
        SKeyboard m -> MyKeyboardNet.View.Keyboard.title m

