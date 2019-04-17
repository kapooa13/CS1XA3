module FrontEndNet.Static.View exposing(..)
import Html exposing(Html)
import Static.Types exposing (NetModel)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.View.Keyboard

import FrontEndNet.Static.Wrappers.Keyboard


view : NetState -> Html Transition
view ns =
    case ns of
        SKeyboard m -> Html.map FrontEndNet.Static.Wrappers.Keyboard.unwrap <| FrontEndNet.View.Keyboard.view m

title : NetState -> String
title ns =
    case ns of
        SKeyboard m -> FrontEndNet.View.Keyboard.title m

