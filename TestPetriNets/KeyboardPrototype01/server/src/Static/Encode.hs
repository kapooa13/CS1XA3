module Static.Encode where
import KeyboardPrototypeNet.Static.Encode as KeyboardPrototypeNet

import Static.ServerTypes
import Data.Text as T
import Static.Types

encodeOutgoingMessage :: NetOutgoingMessage -> T.Text
encodeOutgoingMessage netTrans =
    case netTrans of
        KeyboardPrototypeNetOMsg msg -> KeyboardPrototypeNet.encodeClientMessage msg

