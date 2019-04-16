module Static.Decode exposing(..)
import Static.Types exposing(..)
import Utils.Utils exposing(..)
import KeyboardNet.Static.Decode


decodeIncomingMessage : String -> NetModel -> Result String NetIncomingMessage
decodeIncomingMessage txt clientNet =
    case clientNet of
        KeyboardNet _ -> rMap KeyboardNetInMsg <| Tuple.first <| KeyboardNet.Static.Decode.decodeIncomingMessage (Err "",String.split "\u{0000}" txt)
