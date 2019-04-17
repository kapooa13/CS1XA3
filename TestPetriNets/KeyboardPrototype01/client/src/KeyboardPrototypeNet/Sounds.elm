port module KeyboardPrototypeNet.Sounds exposing (..)

import Json.Encode exposing (Value, string)

port play : Value -> Cmd msg

playSound : String -> Cmd msg
playSound url = play (string url)