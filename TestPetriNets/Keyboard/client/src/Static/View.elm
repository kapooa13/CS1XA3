module Static.View exposing(..)
import KeyboardNet.Static.View as KeyboardNet

import Static.Types exposing(..)
import Html exposing(Html)
view : NetModel -> Html NetTransition
view model =
    case model of
        KeyboardNet m -> Html.map KeyboardNetTrans <| KeyboardNet.view m

title : NetModel -> String
title model =
    case model of
        KeyboardNet m -> KeyboardNet.title m

