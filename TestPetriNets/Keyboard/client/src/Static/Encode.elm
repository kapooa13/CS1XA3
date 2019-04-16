module Static.Encode exposing(..)
import KeyboardNet.Static.Encode as KeyboardNet

import Static.Types exposing(NetTransition(..))

encodeTransition : NetTransition -> Maybe String
encodeTransition netTrans =
    case netTrans of
        KeyboardNetTrans msg -> KeyboardNet.encodeTransition msg

