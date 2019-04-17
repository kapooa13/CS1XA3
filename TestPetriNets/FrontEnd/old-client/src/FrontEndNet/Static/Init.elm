module FrontEndNet.Static.Init exposing(..)
import FrontEndNet.Init as Init
import FrontEndNet.Static.Types exposing (NetState(..))
import FrontEndNet.Update as Update
import FrontEndNet.Static.Wrappers
import FrontEndNet.Static.ExtraTypes exposing(..)

init : NetState
init = SKeyboard Init.init
