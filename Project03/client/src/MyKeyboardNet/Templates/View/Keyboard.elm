module MyKeyboardNet.View.Keyboard exposing(..)
import MyKeyboardNet.Static.Types.Keyboard exposing(Msg(..))
import MyKeyboardNet.Static.Types exposing(Keyboard(..))
import MyKeyboardNet.Static.Helpers.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)

import Html exposing(Html)
import Debug exposing(todo)

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.none

view : Keyboard -> Html Msg
view keyboard =
    todo "Please fill out the view function for the MyKeyboardNet net for the Keyboard place."

title : Keyboard -> String
title keyboard =
    todo "Please fill out the title function for the MyKeyboardNet net for the Keyboard place."
