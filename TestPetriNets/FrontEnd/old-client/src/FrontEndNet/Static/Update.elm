module FrontEndNet.Static.Update exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.Wrappers exposing(..)
import FrontEndNet.Static.FromSuperPlace exposing (FromSuperPlace)
import FrontEndNet.Update exposing(..)
import Utils.Utils exposing(Either(..))
import Static.Types exposing(..)
import Dict

update : FromSuperPlace -> IncomingMessage -> NetState -> (NetState,Cmd Transition)
update fsp trans state =
    case (trans,state) of
        ((MBoardKeyUnpressed myKeyInt) , SKeyboard st) -> let (newModel, cmd) = updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  st in (SKeyboard newModel, Cmd.map (Internal << unwrapNoOp) cmd)

        (MNoOp , SKeyboard st) -> (SKeyboard <| updateNoOpKeyboard fsp NoOp  st, Cmd.none)
        ((MMadeKeyDark clientKeyStateList myKeyInt) , SKeyboard st) -> (SKeyboard <| updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark clientKeyStateList myKeyInt)  st, Cmd.none)

        ((MMadeKeyLight clientKeyStateList myKeyInt) , SKeyboard st) -> (SKeyboard <| updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight clientKeyStateList myKeyInt)  st, Cmd.none)



outgoingToIncoming : Transition -> Either IncomingMessage Transition
outgoingToIncoming trans =
    case trans of
        Internal TNoOp  -> Left <| MNoOp 

        External outT -> Right <| External outT
