module Static.Init exposing (..)
import Static.Types exposing(..)
import MyKeyboardNet.Static.Init

init : (NetModel, Cmd NetTransition)
init = (MyKeyboardNet MyKeyboardNet.Static.Init.init, Cmd.none)
