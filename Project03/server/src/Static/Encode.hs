module Static.Encode where
import MyKeyboardNet.Static.Encode as MyKeyboardNet

import Static.ServerTypes
import Data.Text as T
import Static.Types

encodeOutgoingMessage :: NetOutgoingMessage -> T.Text
encodeOutgoingMessage netTrans =
    case netTrans of
        MyKeyboardNetOMsg msg -> MyKeyboardNet.encodeClientMessage msg

