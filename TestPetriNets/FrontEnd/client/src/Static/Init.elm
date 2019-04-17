module Static.Init exposing (..)
import Static.Types exposing(..)
import FrontEndNet.Static.Init

init : (NetModel, Cmd NetTransition)
init = (FrontEndNet FrontEndNet.Static.Init.init, Cmd.none)
