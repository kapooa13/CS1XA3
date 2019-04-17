module Static.Encode exposing(..)
import KeyboardPrototypeNet.Static.Encode as KeyboardPrototypeNet

import Static.Types exposing(NetTransition(..))

encodeTransition : NetTransition -> Maybe String
encodeTransition netTrans =
    case netTrans of
        KeyboardPrototypeNetTrans msg -> KeyboardPrototypeNet.encodeTransition msg

