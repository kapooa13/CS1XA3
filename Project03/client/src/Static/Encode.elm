module Static.Encode exposing(..)
import MyKeyboardNet.Static.Encode as MyKeyboardNet

import Static.Types exposing(NetTransition(..))

encodeTransition : NetTransition -> Maybe String
encodeTransition netTrans =
    case netTrans of
        MyKeyboardNetTrans msg -> MyKeyboardNet.encodeTransition msg

