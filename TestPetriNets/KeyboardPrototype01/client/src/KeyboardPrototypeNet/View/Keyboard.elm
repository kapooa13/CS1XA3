module KeyboardPrototypeNet.View.Keyboard exposing(..)
import KeyboardPrototypeNet.Static.Types.Keyboard exposing(Msg(..))
import KeyboardPrototypeNet.Static.Types exposing(Keyboard(..))
import KeyboardPrototypeNet.Static.Helpers.Keyboard exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)

import Html exposing(Html)
import Debug exposing(todo)

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.none

view : Keyboard -> Html Msg
view keyboard =
    todo "Please fill out the view function for the KeyboardPrototypeNet net for the Keyboard place."

title : Keyboard -> String
title keyboard =
    todo "Please fill out the title function for the KeyboardPrototypeNet net for the Keyboard place."
