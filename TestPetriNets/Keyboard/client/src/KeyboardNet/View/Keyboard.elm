module KeyboardNet.View.Keyboard exposing(..)
import KeyboardNet.Static.Types.Keyboard exposing(Msg(..))
import KeyboardNet.Static.Types exposing(Keyboard(..))
import KeyboardNet.Static.Helpers.Keyboard exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)

-- import Html exposing(Html)
import Debug exposing(todo)

import Html exposing(..)
import Html.Events exposing (..)
import Html.Attributes exposing (style)

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.none

view : Keyboard -> Html Msg
view keyboard =
    div [] [
        div [] [button [onClick <| SomeKeyPressed 0 ] [text "Sound 0"] ] -- SomeKeyPressed might need a list of int
      , div [] [button [onClick <| SomeKeyPressed 1 ] [text "Sound 1"] ]
    ]

title : Keyboard -> String
title keyboard = "oh God please let this work"
