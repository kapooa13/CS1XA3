module Static.Init exposing (..)
import Static.Types exposing(..)
import KeyboardNet.Static.Init

init : (NetModel, Cmd NetTransition)
init = (KeyboardNet KeyboardNet.Static.Init.init, Cmd.none)
