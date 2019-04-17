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
        ((MMakeDark myKeyInt) , SKeyboard st) -> (SKeyboard <| updateMakeDarkKeyboard fsp (MakeDark myKeyInt)  st, Cmd.none)
        ((MMakeLight myKeyInt) , SKeyboard st) -> (SKeyboard <| updateMakeLightKeyboard fsp (MakeLight myKeyInt)  st, Cmd.none)


outgoingToIncoming : Transition -> Either IncomingMessage Transition
outgoingToIncoming trans =
    case trans of
        Internal TNoOp  -> Left <| MNoOp 
        Internal (TMakeDark myKeyInt)  -> Left <| (MMakeDark myKeyInt) 
        Internal (TMakeLight myKeyInt)  -> Left <| (MMakeLight myKeyInt) 

        External outT -> Right <| External outT
