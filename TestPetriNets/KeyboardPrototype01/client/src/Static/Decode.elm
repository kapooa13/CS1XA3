module Static.Decode exposing(..)
import Static.Types exposing(..)
import Utils.Utils exposing(..)
import KeyboardPrototypeNet.Static.Decode


decodeIncomingMessage : String -> NetModel -> Result String NetIncomingMessage
decodeIncomingMessage txt clientNet =
    case clientNet of
        KeyboardPrototypeNet _ -> rMap KeyboardPrototypeNetInMsg <| Tuple.first <| KeyboardPrototypeNet.Static.Decode.decodeIncomingMessage (Err "",String.split "\u{0000}" txt)
