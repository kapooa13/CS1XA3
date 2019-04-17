module Static.Encode where
import FrontEndNet.Static.Encode as FrontEndNet

import Static.ServerTypes
import Data.Text as T
import Static.Types

encodeOutgoingMessage :: NetOutgoingMessage -> T.Text
encodeOutgoingMessage netTrans =
    case netTrans of
        FrontEndNetOMsg msg -> FrontEndNet.encodeClientMessage msg

