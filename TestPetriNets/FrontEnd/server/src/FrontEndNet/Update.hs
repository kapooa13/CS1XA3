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
clientConnect fsp clientID keyboard =
    error "Please fill out clientConnect function for the FrontEndNet net."

-- functions called when a client disconnects (do not delete)
clientDisconnectFromKeyboard :: FromSuperPlace -> ClientID -> Keyboard -> KeyboardPlayer -> Keyboard
clientDisconnectFromKeyboard fsp clientID keyboard keyboardPlayer =
    error "Please fill out the clientDisconnectFromKeyboard function for the FrontEndNet net."


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
        fromKeyboard (pId, pkeyboard) = error "Please fill in function stub."


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
updateMakeDark fsp clientId (MakeDark myKeyInt clientKeyStateList) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> MakeDarkfromKeyboard
        fromKeyboard (pId, pkeyboard) = error "Please fill in function stub."


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
updateMakeLight fsp clientId (MakeLight myKeyInt clientKeyStateList) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> MakeLightfromKeyboard
        fromKeyboard (pId, pkeyboard) = error "Please fill in function stub."


    in
        (keyboard, fromKeyboard)


