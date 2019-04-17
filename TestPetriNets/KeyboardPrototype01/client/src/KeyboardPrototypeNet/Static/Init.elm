module KeyboardPrototypeNet.Static.Init exposing(..)
import KeyboardPrototypeNet.Init as Init
import KeyboardPrototypeNet.Static.Types exposing (NetState(..))
import KeyboardPrototypeNet.Update as Update
import KeyboardPrototypeNet.Static.Wrappers
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)

init : NetState
init = SKeyboard Init.init
