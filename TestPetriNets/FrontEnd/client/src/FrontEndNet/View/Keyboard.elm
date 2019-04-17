module FrontEndNet.View.Keyboard exposing(..)
import FrontEndNet.Static.Types.Keyboard exposing(Msg(..))
import FrontEndNet.Static.Types exposing(Keyboard(..))
import FrontEndNet.Static.Helpers.Keyboard exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)

import FrontEndNet.Keys exposing(..)

-- need to import Json.Decode for keys
import Json.Decode as Decode

-- need to import Browser.Events for getting keys from subscriptions
import Browser.Events as Events

import Html exposing(..)
import Html.Events exposing (..)
import Html.Attributes exposing (style)

import Debug exposing(todo)

import GraphicSVG exposing(Shape, roundedRect, rgb, move, filled)
import GraphicSVG.Widget as Widget

import Dict

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.batch [
        Events.onKeyDown (Decode.map BoardKeyPressed keyDecoder)
       ,Events.onKeyDown <| (Decode.map MakeDark keyDecoder)
       ,Events.onKeyUp   <| (Decode.map MakeLight keyDecoder)
            ]

view : Keyboard -> Html Msg
view (Keyboard myDict) =
    let
        drawFunc : Int -> Bool -> Shape msg
        drawFunc idx state = roundedRect 20 70 3 |> filled (if state == True then (rgb 120 120 120) else (rgb 237 237 237))
                                                 |> move (toFloat(20*idx),0.0)
    in
        div [style "background-color" "deepskyblue"] [Widget.icon "myKeyboard" 400 200 
        (Dict.values (Dict.map drawFunc myDict))
        ]
        
title : Keyboard -> String
title keyboard = "this one should be good"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)