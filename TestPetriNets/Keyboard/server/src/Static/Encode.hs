module Static.Encode where
import KeyboardNet.Static.Encode as KeyboardNet

import Static.ServerTypes
import Data.Text as T
import Static.Types

encodeOutgoingMessage :: NetOutgoingMessage -> T.Text
encodeOutgoingMessage netTrans =
    case netTrans of
        KeyboardNetOMsg msg -> KeyboardNet.encodeClientMessage msg

