module Static.Decode exposing(..)
import Static.Types exposing(..)
import Utils.Utils exposing(..)
import FrontEndNet.Static.Decode


decodeIncomingMessage : String -> NetModel -> Result String NetIncomingMessage
decodeIncomingMessage txt clientNet =
    case clientNet of
        FrontEndNet _ -> rMap FrontEndNetInMsg <| Tuple.first <| FrontEndNet.Static.Decode.decodeIncomingMessage (Err "",String.split "\u{0000}" txt)
