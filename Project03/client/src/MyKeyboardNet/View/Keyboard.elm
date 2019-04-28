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
            Time.every 50 (always <| InfoUpdating clientKeyColorDict pC)
           ,Events.onKeyDown (Decode.map (BoardKeyPressed clientKeyColorDict myColor) keyDecoder)

           ,Events.onKeyDown <| (Decode.map MakeDark keyDecoder)
           ,Events.onKeyUp   <| (Decode.map MakeLight keyDecoder)
                ]

myColList = [blue, brown, charcoal, darkBlue, darkBrown, darkCharcoal
            ,darkGray, darkGreen, darkGrey, darkOrange, darkPurple, darkRed
            ,darkYellow, gray, green, grey, hotPink, lightBlue, lightBrown
            ,lightCharcoal, lightGray, lightGreen, lightGrey, lightOrange, lightPurple
            ,lightRed, lightYellow, orange, pink, purple, red, yellow]


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
                        1          -> group [ roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 5 + 70*(quotient-7)),10)
                                             ,text (fromInt idx)
                                                     |> size 4
                                                     |> filled (rgb 255 255 255)
                                                     |> move (toFloat(-171 + 5 + 70*(quotient-7)),-5) ]

                        2          -> group [ roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 15 + 70*(quotient-7)),10)
                                             ,text (fromInt idx)
                                                     |> size 4
                                                     |> filled (rgb 255 255 255)
                                                     |> move (toFloat(-171 + 15 + 70*(quotient-7)),-5) ]

                        3          -> group [ roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 35 + 70*(quotient-7)),10)
                                             ,text (fromInt idx)
                                                     |> size 4
                                                     |> filled (rgb 255 255 255)
                                                     |> move (toFloat(-171 + 35 + 70*(quotient-7)),-5) ]

                        4          -> group [ roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 45 + 70*(quotient-7)),10)
                                             ,text (fromInt idx)
                                                     |> size 4
                                                     |> filled (rgb 255 255 255)
                                                     |> move (toFloat(-171 + 45 + 70*(quotient-7)),-5) ]

                        0          -> group [ roundedRect 5 40 0.3 |> filled (if state == True then (myCol idx) else (black))
                                                     |> move (toFloat(-170 + 55 + 70*(quotient-7)),10)
                                             ,text (fromInt idx)
                                                     |> size 4
                                                     |> filled (rgb 255 255 255)
                                                     |> move (toFloat(-171 + 55 + 70*(quotient-7)),-5) ]

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

                    otherwise -> group [ roundedRect 10 60 0.7 |> filled (if state == True then (myCol idx) else (rgb 237 237 237))
                                                               |> move (toFloat(-170 + 10*idx),0.0)
                                                               |> addOutline (solid 0.42) black
                                       , text (fromInt idx)
                                              |> size 4
                                              |> filled black
                                              |> move (-171 + 9.99*(toFloat idx),-25)
                                        ]

        myColTupList = List.indexedMap Tuple.pair myColList

        colorPicker (idx, col) = square 8 |> filled col
                                          |> move (8*(toFloat idx), 0)

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
                               |> move(-65, 30)
                         , myList 
                               |> move(-5, -25)
                         , text ("Player Counter: " ++ Debug.toString pC)
                               |> size 8
                               |> filled black
                               |> move(90, 15)
                         ]
            in
                div [style "margin-left" "auto", style "margin-right" "auto",style "background-color" someCol] [

                     Widget.icon "myKeyboard" 400 140 myView

                    ,div [style "width" "8%", style "margin-left" "auto", style "margin-right" "auto", style "background-color" someCol] [

                          Button.button [ Button.dark, Button.attrs [onClick (RollRandomNum)] ] [ myHtmlMsg ]
                     ]
                    ,div [style "height" "18%",style "background-color" someCol] []

                ]
    in
        myViewFn


title : Keyboard -> String
title keyboard = "Piano RT"

keyDecoder : Decode.Decoder Int
keyDecoder = Decode.map fromCode (Decode.field "key" Decode.string)

