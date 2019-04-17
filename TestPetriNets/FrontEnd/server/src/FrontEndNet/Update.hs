module FrontEndNet.Update where
import FrontEndNet.Static.Types
import FrontEndNet.Static.FromSuperPlace
import FrontEndNet.Static.Helpers.Keyboard as Keyboard

import FrontEndNet.Static.Helpers.KeyboardPlayer as KeyboardPlayer

import Static.List
import Utils.Utils
import Static.ServerTypes
import Static.Cmd (Cmd(..))
import qualified Static.Cmd as Cmd

-- function called when new client connects (do not delete)
clientConnect :: FromSuperPlace -> ClientID -> Keyboard -> (Keyboard, KeyboardPlayer)
clientConnect fsp clientID keyboard = (keyboard, KeyboardPlayer)

-- functions called when a client disconnects (do not delete)
clientDisconnectFromKeyboard :: FromSuperPlace -> ClientID -> Keyboard -> KeyboardPlayer -> Keyboard
clientDisconnectFromKeyboard fsp clientID keyboard keyboardPlayer = keyboard


-- functions for each transition
updateBoardKeyPressed :: FromSuperPlace -> 
    ClientID ->
    BoardKeyPressed ->
    Keyboard -> 
    List KeyboardPlayer -> 
    ( Keyboard,
      (ClientID, KeyboardPlayer) -> BoardKeyPressedfromKeyboard
    )
updateBoardKeyPressed fsp clientId (BoardKeyPressed myKeyInt) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> BoardKeyPressedfromKeyboard
        fromKeyboard (pId, pkeyboard) = BoardKeyPressed_KeyboardtoKeyboard KeyboardPlayer (BoardKeyUnpressed myKeyInt)


    in
        (keyboard, fromKeyboard)

updateMakeDark :: FromSuperPlace -> 
    ClientID ->
    MakeDark ->
    Keyboard -> 
    List KeyboardPlayer -> 
    ( Keyboard,
      (ClientID, KeyboardPlayer) -> MakeDarkfromKeyboard
    )
updateMakeDark fsp clientId (MakeDark clientKeyStateList myKeyInt) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> MakeDarkfromKeyboard
        fromKeyboard (pId, pkeyboard) = MakeDark_KeyboardtoKeyboard KeyboardPlayer (MadeKeyDark clientKeyStateList myKeyInt)


    in
        (keyboard, fromKeyboard)

updateMakeLight :: FromSuperPlace -> 
    ClientID ->
    MakeLight ->
    Keyboard -> 
    List KeyboardPlayer -> 
    ( Keyboard,
      (ClientID, KeyboardPlayer) -> MakeLightfromKeyboard
    )
updateMakeLight fsp clientId (MakeLight clientKeyStateList myKeyInt) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> MakeLightfromKeyboard
        fromKeyboard (pId, pkeyboard) = MakeLight_KeyboardtoKeyboard KeyboardPlayer (MadeKeyLight clientKeyStateList myKeyInt)


    in
        (keyboard, fromKeyboard)


