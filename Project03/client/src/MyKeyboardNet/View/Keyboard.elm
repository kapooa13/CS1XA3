module MyKeyboardNet.View.Keyboard exposing(..)
import MyKeyboardNet.Static.Types.Keyboard exposing(Msg(..))
import MyKeyboardNet.Static.Types exposing(Keyboard(..))
import MyKeyboardNet.Static.Helpers.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)

import MyKeyboardNet.Keys exposing(..)

-- need to import Json.Decode for keys
import Json.Decode as Decode

-- need to import Browser.Events for getting keys from subscriptions
import Browser.Events as Events

import Html exposing(..)
import Html.Events exposing (..)
import Html.Attributes exposing (style)

import Debug exposing(todo)
import Array

import GraphicSVG exposing(Shape, roundedRect, rgb, move, filled
            ,blue, brown, charcoal, darkBlue, darkBrown, darkCharcoal
            ,darkGray, darkGreen, darkGrey, darkOrange, darkPurple, darkRed
            ,darkYellow, gray, green, grey, hotPink, lightBlue, lightBrown
            ,lightCharcoal, lightGray, lightGreen, lightGrey, lightOrange, lightPurple
            ,lightRed, lightYellow, orange, pink, purple, red, yellow, black)

import GraphicSVG.Widget as Widget

import Dict

subs : Keyboard -> Sub Msg
subs keyboard =
    Sub.batch [
        Events.onKeyDown (Decode.map BoardKeyPressed keyDecoder)
       ,Events.onKeyDown <| (Decode.map MakeDark keyDecoder)
       ,Events.onKeyUp   <| (Decode.map MakeLight keyDecoder)
            ]

myColList = [blue, brown, charcoal, darkBlue, darkBrown, darkCharcoal
            ,darkGray, darkGreen, darkGrey, darkOrange, darkPurple, darkRed
            ,darkYellow, gray, green, grey, hotPink, lightBlue, lightBrown
            ,lightCharcoal, lightGray, lightGreen, lightGrey, lightOrange, lightPurple
            ,lightRed, lightYellow, orange, pink, purple, red, yellow]

{- For reference:

- Layout for Keyboard prototype
-
   Key    CorrespondingInt

-- white keys
    q           0
    w           1
    e           2
    r           3
    t           4
    y           5
    u           6
    i           7
    o           8
    p           9
    [           10
    ]           11

-- black keys
    2           12
    3           13
    4           14
    6           15
    7           16
    9           17
    0           18
    -           19
-}

view : Keyboard -> Html Msg
view (Keyboard myDict myColor) =
    let
        myCol = case (Array.get myColor (Array.fromList myColList)) of
                    Just a   -> a
                    otherwise -> black
        drawFunc : Int -> Bool -> Shape msg
        drawFunc idx state =
                case idx of
                    12        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 10),12.5)

                    13        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 30),12.5)

                    14        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 50),12.5)

                    15        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 90),12.5)

                    16        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 110),12.5)

                    17        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 150),12.5)

                    18        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 170),12.5)

                    19        -> roundedRect 10 45 1 |> filled (if state == True then (myCol) else (black))
                                                     |> move (toFloat(-120 + 190),12.5)

                    otherwise -> roundedRect 20 70 3 |> filled (if state == True then (myCol) else (rgb 227 227 227))
                                                     |> move (toFloat(-120 + 20*idx),0.0)
    in
        div [style "background-color" "deepskyblue"] [Widget.icon "myKeyboard" 400 100
        (Dict.values (Dict.map drawFunc myDict))
       ,button [onClick RollRandomNum] [text "roll"]
        ]

title : Keyboard -> String
title keyboard = "Realtime Keyboard"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)

