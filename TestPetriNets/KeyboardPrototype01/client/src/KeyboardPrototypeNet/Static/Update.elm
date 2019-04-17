module KeyboardPrototypeNet.Static.Update exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.Static.Wrappers exposing(..)
import KeyboardPrototypeNet.Static.FromSuperPlace exposing (FromSuperPlace)
import KeyboardPrototypeNet.Update exposing(..)
import Utils.Utils exposing(Either(..))
import Static.Types exposing(..)
import Dict

update : FromSuperPlace -> IncomingMessage -> NetState -> (NetState,Cmd Transition)
update fsp trans state =
    case (trans,state) of
        (MNoOp , SKeyboard st) -> (SKeyboard <| updateNoOpKeyboard fsp NoOp  st, Cmd.none)
        ((MDeflatedBoardKey myKeyInteger) , SKeyboard st) -> let (newModel, cmd) = updateKeyboardDeflatedBoardKeyKeyboard fsp (DeflatedBoardKey myKeyInteger)  st in (SKeyboard newModel, Cmd.map (Internal << unwrapNoOp) cmd)



outgoingToIncoming : Transition -> Either IncomingMessage Transition
outgoingToIncoming trans =
    case trans of
        Internal TNoOp  -> Left <| MNoOp 

        External outT -> Right <| External outT
