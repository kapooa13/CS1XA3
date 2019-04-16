module KeyboardNet.Static.Update exposing(..)
import KeyboardNet.Static.Types exposing(..)
import KeyboardNet.Static.Wrappers exposing(..)
import KeyboardNet.Static.FromSuperPlace exposing (FromSuperPlace)
import KeyboardNet.Update exposing(..)
import Utils.Utils exposing(Either(..))
import Static.Types exposing(..)
import Dict

update : FromSuperPlace -> IncomingMessage -> NetState -> (NetState,Cmd Transition)
update fsp trans state =
    case (trans,state) of
        ((MKeyUnpressed myKeyInteger) , SKeyboard st) -> let (newModel, cmd) = updateKeyboardKeyUnpressedKeyboard fsp (KeyUnpressed myKeyInteger)  st in (SKeyboard newModel, Cmd.map (Internal << unwrapNoOp) cmd)

        (MNoOp , SKeyboard st) -> (SKeyboard <| updateNoOpKeyboard fsp NoOp  st, Cmd.none)


outgoingToIncoming : Transition -> Either IncomingMessage Transition
outgoingToIncoming trans =
    case trans of
        Internal TNoOp  -> Left <| MNoOp 

        External outT -> Right <| External outT
