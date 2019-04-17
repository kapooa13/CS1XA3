module KeyboardPrototypeNet.Update where
import KeyboardPrototypeNet.Static.Types
import KeyboardPrototypeNet.Static.FromSuperPlace
import KeyboardPrototypeNet.Static.Helpers.Keyboard as Keyboard

import KeyboardPrototypeNet.Static.Helpers.KeyboardPlayer as KeyboardPlayer

import Static.List
import Utils.Utils
import Static.ServerTypes
import Static.Cmd (Cmd(..))
import qualified Static.Cmd as Cmd

-- function called when new client connects (do not delete)
clientConnect :: FromSuperPlace -> ClientID -> Keyboard -> (Keyboard, KeyboardPlayer)
clientConnect fsp clientID keyboard =
    error "Please fill out clientConnect function for the KeyboardPrototypeNet net."

-- functions called when a client disconnects (do not delete)
clientDisconnectFromKeyboard :: FromSuperPlace -> ClientID -> Keyboard -> KeyboardPlayer -> Keyboard
clientDisconnectFromKeyboard fsp clientID keyboard keyboardPlayer =
    error "Please fill out the clientDisconnectFromKeyboard function for the KeyboardPrototypeNet net."


-- functions for each transition
updateBoardKeyPressed :: FromSuperPlace -> 
    ClientID ->
    BoardKeyPressed ->
    Keyboard -> 
    List KeyboardPlayer -> 
    ( Keyboard,
      (ClientID, KeyboardPlayer) -> BoardKeyPressedfromKeyboard
    )
updateBoardKeyPressed fsp clientId (BoardKeyPressed myKeyInteger) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> BoardKeyPressedfromKeyboard
        fromKeyboard (pId, pkeyboard) = error "Please fill in function stub."


    in
        (keyboard, fromKeyboard)


