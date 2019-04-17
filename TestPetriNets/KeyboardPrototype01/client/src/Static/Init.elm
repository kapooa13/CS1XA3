module Static.Init exposing (..)
import Static.Types exposing(..)
import KeyboardPrototypeNet.Static.Init

init : (NetModel, Cmd NetTransition)
init = (KeyboardPrototypeNet KeyboardPrototypeNet.Static.Init.init, Cmd.none)
