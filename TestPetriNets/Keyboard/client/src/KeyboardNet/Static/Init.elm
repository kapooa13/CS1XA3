module KeyboardNet.Static.Init exposing(..)
import KeyboardNet.Init as Init
import KeyboardNet.Static.Types exposing (NetState(..))
import KeyboardNet.Update as Update
import KeyboardNet.Static.Wrappers
import KeyboardNet.Static.ExtraTypes exposing(..)

init : NetState
init = SKeyboard Init.init
