module FrontEndNet.View.Keyboard exposing(..)
import FrontEndNet.Static.Types.Keyboard exposing(Msg(..))
import FrontEndNet.Static.Types exposing(Keyboard(..))
import FrontEndNet.Static.Helpers.Keyboard exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)

-- dis new

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

import GraphicSVG exposing(Shape, roundedRect, rgb, white, darkPurple, move, filled)
import GraphicSVG.Widget as Widget

subs : Keyboard -> Sub Msg
subs (Keyboard myList) =
        Sub.batch [
         Events.onKeyDown (Decode.map BoardKeyPressed keyDecoder)
        ,Events.onKeyDown <| (Decode.map (MakeDark myList) keyDecoder)
        ,Events.onKeyUp   <| (Decode.map (MakeLight myList) keyDecoder)
            ]

view : Keyboard -> Html Msg
view keyboard =
    let
        myList = getClientKeyStateList keyboard
{-
 one key would be a 
     rounded rectangle 20 50 3 |> filled (if myint == 1 then (rgb 120 120 120) else if myint == 0 then white else darkPurple)
                               |> move (20*myInt,0)
 
-}

        drawFunc : Int -> Int -> (Shape msg)
        drawFunc idx myint = roundedRect 20 50 3 |> filled (if myint == 1 then (rgb 120 120 120) else if myint == 0 then white else darkPurple)
                                                 |> move (toFloat(20*idx),0.0)

    in
        div [style "background-color" "blue"] [Widget.icon "myKeyboard" 400 200 
        (List.indexedMap drawFunc myList)
        ]
        


title : Keyboard -> String
title keyboard = "im not sure what im doing at this point"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)

