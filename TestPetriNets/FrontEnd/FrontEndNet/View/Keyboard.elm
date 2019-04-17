module FrontEndNet.View.Keyboard exposing(..)
import FrontEndNet.Static.Types.Keyboard exposing(Msg(..))
import FrontEndNet.Static.Types exposing(Keyboard(..))
import FrontEndNet.Static.Helpers.Keyboard exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)

import FrontEndNet.Keys exposing(..)
import FrontEndNet.Update exposing(..)

-- need to import Json.Decode for keys
import Json.Decode as Decode

-- need to import Browser.Events for getting keys from subscriptions
import Browser.Events as Events

import Html exposing(..)
import Html.Events exposing (..)
import Html.Attributes exposing (style)

import Debug exposing(todo)

subs : Keyboard -> Sub Msg
subs keyboard = 
    let
        myList = getClientKeyStateList keyboard
    in
        Sub.batch [
         Events.onKeyDown (Decode.map BoardKeyPressed keyDecoder)
        ,Events.onKeyDown <| (Decode.map (MakeDark myList) keyDecoder)
        ,Events.onKeyUp   <| (Decode.map (MakeLight myList) keyDecoder)
            ]

view : Keyboard -> Html Msg
view keyboard = div [] []

title : Keyboard -> String
title keyboard = "im not sure what im doing at this point"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)
