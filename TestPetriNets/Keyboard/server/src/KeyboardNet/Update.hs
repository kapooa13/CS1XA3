module KeyboardNet.Update where
import KeyboardNet.Static.Types
import KeyboardNet.Static.FromSuperPlace
import KeyboardNet.Static.Helpers.Keyboard as Keyboard

import KeyboardNet.Static.Helpers.KeyboardPlayer as KeyboardPlayer

import Static.List
import Utils.Utils
import Static.ServerTypes
import Static.Cmd (Cmd(..))
import qualified Static.Cmd as Cmd

-- function called when new client connects (do not delete)
clientConnect :: FromSuperPlace -> ClientID -> Keyboard -> (Keyboard, KeyboardPlayer)
clientConnect fsp clientID keyboard =
    (keyboard, KeyboardPlayer)
    -- error "Please fill out clientConnect function for the KeyboardNet net."

-- functions called when a client disconnects (do not delete)
clientDisconnectFromKeyboard :: FromSuperPlace -> ClientID -> Keyboard -> KeyboardPlayer -> Keyboard
clientDisconnectFromKeyboard fsp clientID keyboard keyboardPlayer =
    keyboard
    -- error "Please fill out the clientDisconnectFromKeyboard function for the KeyboardNet net."


-- functions for each transition
updateSomeKeyPressed :: FromSuperPlace -> 
    ClientID ->
    SomeKeyPressed ->
    Keyboard -> 
    List KeyboardPlayer -> 
    ( Keyboard,
      (ClientID, KeyboardPlayer) -> SomeKeyPressedfromKeyboard
    )
updateSomeKeyPressed fsp clientId (SomeKeyPressed somearg) keyboard lstKeyboard =
    let
        fromKeyboard :: (ClientID, KeyboardPlayer) -> SomeKeyPressedfromKeyboard
        fromKeyboard (pId, pkeyboard) = -- error "Please fill in function stub."
                SomeKeyPressed_KeyboardtoKeyboard KeyboardPlayer (KeyUnpressed somearg)

    in
        (keyboard, fromKeyboard)


