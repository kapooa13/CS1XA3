module FrontEndNet.View.Keyboard exposing(..)
import FrontEndNet.Static.Types.Keyboard exposing(Msg(..))
import FrontEndNet.Static.Types exposing(Keyboard(..))
import FrontEndNet.Static.Helpers.Keyboard exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)

import Html exposing(Html)
import Debug exposing(todo)

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.none

view : Keyboard -> Html Msg
view keyboard =
    todo "Please fill out the view function for the FrontEndNet net for the Keyboard place."

title : Keyboard -> String
title keyboard =
    todo "Please fill out the title function for the FrontEndNet net for the Keyboard place."
