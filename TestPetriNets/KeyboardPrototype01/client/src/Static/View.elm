module Static.View exposing(..)
import KeyboardPrototypeNet.Static.View as KeyboardPrototypeNet

import Static.Types exposing(..)
import Html exposing(Html)
view : NetModel -> Html NetTransition
view model =
    case model of
        KeyboardPrototypeNet m -> Html.map KeyboardPrototypeNetTrans <| KeyboardPrototypeNet.view m

title : NetModel -> String
title model =
    case model of
        KeyboardPrototypeNet m -> KeyboardPrototypeNet.title m

