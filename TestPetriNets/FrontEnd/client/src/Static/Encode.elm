module Static.Encode exposing(..)
import FrontEndNet.Static.Encode as FrontEndNet

import Static.Types exposing(NetTransition(..))

encodeTransition : NetTransition -> Maybe String
encodeTransition netTrans =
    case netTrans of
        FrontEndNetTrans msg -> FrontEndNet.encodeTransition msg

