module MyKeyboardNet.Static.Init exposing(..)
import MyKeyboardNet.Init as Init
import MyKeyboardNet.Static.Types exposing (NetState(..))
import MyKeyboardNet.Update as Update
import MyKeyboardNet.Static.Wrappers
import MyKeyboardNet.Static.ExtraTypes exposing(..)

init : NetState
init = SKeyboard Init.init
