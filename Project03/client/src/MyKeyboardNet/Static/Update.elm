module MyKeyboardNet.Static.Update exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.Wrappers exposing(..)
import MyKeyboardNet.Static.FromSuperPlace exposing (FromSuperPlace)
import MyKeyboardNet.Update exposing(..)
import Utils.Utils exposing(Either(..))
import Static.Types exposing(..)
import Dict

update : FromSuperPlace -> IncomingMessage -> NetState -> (NetState,Cmd Transition)
update fsp trans state =
    case (trans,state) of
        ((MBoardKeyUnpressed myKeyInt) , SKeyboard st) -> let (newModel, cmd) = updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  st in (SKeyboard newModel, Cmd.map (Internal << unwrapNoOp) cmd)

        (MNoOp , SKeyboard st) -> (SKeyboard <| updateNoOpKeyboard fsp NoOp  st, Cmd.none)
        ((MMadeKeyDark otherColor myKeyInt) , SKeyboard st) -> (SKeyboard <| updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark otherColor myKeyInt)  st, Cmd.none)

        ((MMadeKeyLight otherColor myKeyInt) , SKeyboard st) -> (SKeyboard <| updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight otherColor myKeyInt)  st, Cmd.none)

        ((MRandomColorNumber myColor) , SKeyboard st) -> (SKeyboard <| updateRandomColorNumberKeyboard fsp (RandomColorNumber myColor)  st, Cmd.none)
        (MRandomNumRolled , SKeyboard st) -> let (newModel, cmd) = updateKeyboardRandomNumRolledKeyboard fsp RandomNumRolled  st in (SKeyboard newModel, Cmd.map (Internal << unwrapRandomColorNumber) cmd)



outgoingToIncoming : Transition -> Either IncomingMessage Transition
outgoingToIncoming trans =
    case trans of
        Internal TNoOp  -> Left <| MNoOp 
        Internal (TRandomColorNumber myColor)  -> Left <| (MRandomColorNumber myColor) 

        External outT -> Right <| External outT
