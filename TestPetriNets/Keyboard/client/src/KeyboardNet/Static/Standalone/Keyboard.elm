module KeyboardNet.Static.Standalone.Keyboard exposing(..)
import Html exposing(..)
import Browser exposing(..)
import KeyboardNet.View.Keyboard as View
import KeyboardNet.Static.Types exposing (..)
import KeyboardNet.Static.ExtraTypes exposing (..)
import KeyboardNet.Static.Types.Keyboard exposing (Msg)
import Dict exposing (Dict)
import Json.Decode as D

main : Program () Keyboard Msg
main = Browser.document { init = \_ -> (model, Cmd.none), view = \m -> { body = [View.view m], title = View.title m }, update = \_ m -> (m,Cmd.none), subscriptions = \_ -> Sub.none }

--Change the model here to preview your state
model : Keyboard
model = Keyboard 
