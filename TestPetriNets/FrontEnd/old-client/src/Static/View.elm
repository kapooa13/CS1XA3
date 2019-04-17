module Static.View exposing(..)
import FrontEndNet.Static.View as FrontEndNet

import Static.Types exposing(..)
import Html exposing(Html)
view : NetModel -> Html NetTransition
view model =
    case model of
        FrontEndNet m -> Html.map FrontEndNetTrans <| FrontEndNet.view m

title : NetModel -> String
title model =
    case model of
        FrontEndNet m -> FrontEndNet.title m

