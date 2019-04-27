module MyKeyboardNet.View.Keyboard exposing(..)
import MyKeyboardNet.Static.Types.Keyboard exposing(Msg(..))
import MyKeyboardNet.Static.Types exposing(Keyboard(..))
import MyKeyboardNet.Static.Helpers.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)

-- import MyKeyboardNet.View.Widget exposing(..)

import MyKeyboardNet.Keys exposing(..)

-- need to import Json.Decode for keys
import Json.Decode as Decode

-- need to import Browser.Events for getting keys from subscriptions
import Browser.Events as Events

import Html exposing (Html,text, div)
import Html.Events exposing (..)
import Html.Attributes exposing (style, class)

import Debug exposing(toString)
import Array
import Dict

import Bootstrap.Button as Button exposing(button,dark,attrs)
import Bootstrap.CDN as CDN
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Row as Row
import Bootstrap.Grid.Col as Col

import GraphicSVG exposing(Shape, roundedRect, rgb, move, filled, group, text, notifyTap
            ,blue, brown, charcoal, darkBlue, darkBrown, darkCharcoal, bold, html, square
            ,darkGray, darkGreen, darkGrey, darkOrange, darkPurple, darkRed, customFont
            ,darkYellow, gray, green, grey, hotPink, lightBlue, lightBrown, size, outlined
            ,lightCharcoal, lightGray, lightGreen, lightGrey, lightOrange, lightPurple
            ,lightRed, lightYellow, orange, pink, purple, red, yellow, black, addOutline, solid)

import GraphicSVG.Widget as Widget

import Dict
import Time exposing(every)

subs : Keyboard -> Sub Msg
subs (Keyboard clientKeyStateDict myColor clientKeyColorDict pC) =
        Sub.batch [
            -- Time.every (200) (always <| (BoardKeyPressed clientKeyColorDict myColor 61))
            Time.every 100 (always <| InfoUpdating clientKeyColorDict pC)
           ,Events.onKeyDown (Decode.map (BoardKeyPressed clientKeyColorDict myColor) keyDecoder)

           ,Events.onKeyDown <| (Decode.map MakeDark keyDecoder)
           ,Events.onKeyUp   <| (Decode.map MakeLight keyDecoder)
                ]

myColList = [blue, brown, charcoal, darkBlue, darkBrown, darkCharcoal
            ,darkGray, darkGreen, darkGrey, darkOrange, darkPurple, darkRed
            ,darkYellow, gray, green, grey, hotPink, lightBlue, lightBrown
            ,lightCharcoal, lightGray, lightGreen, lightGrey, lightOrange, lightPurple
            ,lightRed, lightYellow, orange, pink, purple, red, yellow]
{-
myColFunc : GraphicSVG.Color -> String
myColFunc col = case col of
                    blue, 
                    brown,
                    charcoal, 
                    darkBlue, 
                    darkBrown, 
                    darkCharcoal
                    darkGray, 
                    darkGreen, 
                    darkGrey, 
                    darkOrange, 
                    darkPurple, 
                    darkRed
                    darkYellow,
                    gray, 
                    green, 
                    grey, 
                    hotPink, 
                    lightBlue, 
                    lightBrown
                    lightCharcoal, 
                    lightGray, 
                    lightGreen, 
                    lightGrey, 
                    lightOrange, 
                    lightPurple
                    lightRed, 
                    lightYellow, 
                    orange, 
                    pink, 
                    purple, 
                    red, 
                    yellow
-}


view : Keyboard -> Html Msg
view (Keyboard myDict myColor clientKeyColorDict pC) =
    let
        myColPicker : Int -> Int
        -- takes index of key and returns the corresponding color int
        myColPicker idx = case (Dict.get idx clientKeyColorDict) of
                                Just a    -> a
                                otherwise -> 0

        myCol idx = case (Array.get (myColPicker idx) (Array.fromList myColList)) of
                                Just a     -> a
                                otherwise  -> black

        divModFive intNum = (intNum//5, intNum - 5*(intNum//5))
                         -- ( quotient, remainder             )

        drawBlackKeys idx state = 
            let
                (quotient, remainder) = divModFive idx
                
            in
                case remainder of
                        1          -> roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 5 + 70*(quotient-7)),10)

                        2          -> roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 15 + 70*(quotient-7)),10)

                        3          -> roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 35 + 70*(quotient-7)),10)

                        4          -> roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 45 + 70*(quotient-7)),10)

                        0          -> roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 55 + 70*(quotient-7)),10)

                        otherwise  -> roundedRect 25 25 0.3 |> filled (if state == True then (hotPink) else (hotPink))
                                                     |> move (0,0)

        drawFunc : Int -> Bool -> Shape msg
        drawFunc idx state =
                case idx of
                    36        -> drawBlackKeys idx state
                    37        -> drawBlackKeys idx state
                    38        -> drawBlackKeys idx state
                    39        -> drawBlackKeys idx state
                    40        -> drawBlackKeys idx state
                    41        -> drawBlackKeys idx state
                    42        -> drawBlackKeys idx state
                    43        -> drawBlackKeys idx state
                    44        -> drawBlackKeys idx state
                    45        -> drawBlackKeys idx state
                    46        -> drawBlackKeys idx state
                    47        -> drawBlackKeys idx state
                    48        -> drawBlackKeys idx state
                    49        -> drawBlackKeys idx state
                    50        -> drawBlackKeys idx state
                    51        -> drawBlackKeys idx state
                    52        -> drawBlackKeys idx state
                    53        -> drawBlackKeys idx state
                    54        -> drawBlackKeys idx state
                    55        -> drawBlackKeys idx state
                    56        -> drawBlackKeys idx state
                    57        -> drawBlackKeys idx state
                    58        -> drawBlackKeys idx state
                    59        -> drawBlackKeys idx state
                    60        -> drawBlackKeys idx state

                    otherwise -> roundedRect 10 60 0.7 |> filled (if state == True then (myCol idx) else (rgb 237 237 237))
                                                       |> move (toFloat(-170 + 10*idx),0.0)
                                                       |> addOutline (solid 0.42) black

        myColTupList = List.indexedMap Tuple.pair myColList

        colorPicker (idx, col) = square 8 |> filled col
                                          |> move (8*(toFloat idx), 0)
                                        --  |> notifyTap (BoardKeyPressed clientKeyColorDict myColor 20)

        someCol = "moccasin"

        personalCol idx = case (Array.get (idx) (Array.fromList myColList)) of
                                Just a     -> a
                                otherwise  -> black

        myViewFn =
            let
                myHtmlMsg : Html Msg
                myHtmlMsg = Html.text "Randomise Color!!"

                myList = group <| (Dict.values (Dict.map drawFunc myDict))

                myButton = group [ text "Randomise Colors!!"
                                       |> size 4
                                       |> customFont "Arial"
                                       |> filled (lightGreen)
                                       |> move (-15,0)

                                 , roundedRect 42 8 1
                                       |> outlined (solid 0.5) lightGreen
                                       |> move (1.42,1)
                                 ]

                myView = [ text "Piano RT"
                               |> size 36
                            --   |> bold
                               |> customFont "Arial"
                               |> filled (personalCol myColor)
                               |> addOutline (solid 0.5) black
                               |> move(-65, 35)
                         , myList 
                               |> move(-5, -15)
                         , group (List.map colorPicker myColTupList)
                               |> move(-110, -65)
                         , text ("Player Counter: " ++ Debug.toString pC)
                               |> size 18
                               |> filled black
                               |> move(20, 40)
{-
                         , myButton
                               |> move(-5, -60)
                               |> notifyTap (RollRandomNum)
-}
                         ]
            in
                div [style "margin-left" "auto", style "margin-right" "auto",style "background-color" someCol] [

                     Widget.icon "myKeyboard" 400 172 myView

                    ,div [style "width" "8%", style "margin-left" "auto", style "margin-right" "auto", style "background-color" someCol] [

                          Button.button [ Button.dark, Button.attrs [onClick (RollRandomNum)] ] [ myHtmlMsg ]
                     ]

                ]
    in
        myViewFn

{-
        div [style "background-color" "deepskyblue"] [
        div [style "margin-left" "auto", style "margin-right" "auto",style "background-color" "deepskyblue"] 
        [
             div [style "background-color" "deepskyblue",style "margin-left" "auto", style "margin-right" "auto"] [Widget.icon "myKeyboard" 400 100
                (Dict.values (Dict.map drawFunc myDict))]
        ]
       ,div [style "margin-left" "auto", style "margin-right" "auto",style "background-color" "deepskyblue"] [Button.button [ Button.dark, Button.attrs [onClick (RollRandomNum)] ] [ text "Change Colors" ]]
        ]
-}

{-
        myViewFn =
            div [style "background-color" someCol] [

                div [style "margin-left" "auto", style "margin-right" "auto",style "background-color" someCol] [
                         Widget.icon "myKeyboard" 400 172
                        (Dict.values (Dict.map drawFunc myDict))
                    ]
{-
               ,div [style "margin-left" "auto", style "margin-right" "auto",style "background-color" someCol] [

                    Button.button [ Button.dark, Button.attrs [onClick (RollRandomNum)] ] [ Html.text "Randomise Color!!" ]
                ]-}
            ]
-}

title : Keyboard -> String
title keyboard = "Piano RT"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)

