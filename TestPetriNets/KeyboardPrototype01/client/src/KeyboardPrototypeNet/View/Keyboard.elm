module KeyboardPrototypeNet.View.Keyboard exposing(..)
import KeyboardPrototypeNet.Static.Types.Keyboard exposing(Msg(..))
import KeyboardPrototypeNet.Static.Types exposing(Keyboard(..))
import KeyboardPrototypeNet.Static.Helpers.Keyboard exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)

import KeyboardPrototypeNet.Keys exposing(..)

-- need to import Json.Decode for keys
import Json.Decode as Decode

-- need to import Browser.Events for getting keys from subscriptions
import Browser.Events as Events

import Html exposing(..)
import Html.Events exposing (..)
import Html.Attributes exposing (style)

subs : Keyboard -> Sub Msg
subs keyboard =
    Events.onKeyDown (Decode.map BoardKeyPressed keyDecoder)

view : Keyboard -> Html Msg
view keyboard = div [] []

title : Keyboard -> String
title keyboard = "myKeyboardPrototype01"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)
