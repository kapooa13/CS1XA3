module KeyboardNet.View.Keyboard exposing(..)
import KeyboardNet.Static.Types.Keyboard exposing(Msg(..))
import KeyboardNet.Static.Types exposing(Keyboard(..))
import KeyboardNet.Static.Helpers.Keyboard exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)

import Html exposing(Html)
import Debug exposing(todo)

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.none

view : Keyboard -> Html Msg
view keyboard =
    todo "Please fill out the view function for the KeyboardNet net for the Keyboard place."

title : Keyboard -> String
title keyboard =
    todo "Please fill out the title function for the KeyboardNet net for the Keyboard place."
