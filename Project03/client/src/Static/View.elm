module Static.View exposing(..)
import MyKeyboardNet.Static.View as MyKeyboardNet

import Static.Types exposing(..)
import Html exposing(Html)
view : NetModel -> Html NetTransition
view model =
    case model of
        MyKeyboardNet m -> Html.map MyKeyboardNetTrans <| MyKeyboardNet.view m

title : NetModel -> String
title model =
    case model of
        MyKeyboardNet m -> MyKeyboardNet.title m

