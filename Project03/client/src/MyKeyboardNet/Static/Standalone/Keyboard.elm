module MyKeyboardNet.Static.Standalone.Keyboard exposing(..)
import Html exposing(..)
import Browser exposing(..)
import MyKeyboardNet.View.Keyboard as View
import MyKeyboardNet.Static.Types exposing (..)
import MyKeyboardNet.Static.ExtraTypes exposing (..)
import MyKeyboardNet.Static.Types.Keyboard exposing (Msg)
import Dict exposing (Dict)
import Json.Decode as D

main : Program () Keyboard Msg
main = Browser.document { init = \_ -> (model, Cmd.none), view = \m -> { body = [View.view m], title = View.title m }, update = \_ m -> (m,Cmd.none), subscriptions = \_ -> Sub.none }

--Change the model here to preview your state
model : Keyboard
model = Keyboard Dict.empty 0 Dict.empty 0
