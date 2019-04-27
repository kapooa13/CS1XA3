module MyKeyboardNet.Update exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.FromSuperPlace exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

import Dict
import Random
import MyKeyboardNet.Sounds exposing(..)

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard,Cmd NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed clientKeyColorDict myColor myKeyInt)  (Keyboard cKSD mC cKCD playerCounter) =
    let
        keyboard = Keyboard cKSD mC clientKeyColorDict playerCounter
        -- updates the clientKeyColorDict to the one recieved from the server

        checkState = case (Dict.get myKeyInt cKSD) of
                         Just myBool -> not myBool
                         Nothing     -> not True
    in
        case myKeyInt of
                0           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a49.mp3")
                1           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a50.mp3")
                2           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a51.mp3")
                3           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a52.mp3")
                4           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a53.mp3")
                5           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a54.mp3")
                6           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a55.mp3")
                7           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a56.mp3")
                8           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a57.mp3")
                9           -> (keyboard, if checkState then Cmd.none else playSound "./piano/a48.mp3")
                10          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a81.mp3")
                11          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a87.mp3")
                12          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a69.mp3")
                13          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a82.mp3")
                14          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a84.mp3")
                15          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a89.mp3")
                16          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a85.mp3")
                17          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a73.mp3")
                18          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a79.mp3")
                19          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a80.mp3")
                20          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a65.mp3")
                21          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a83.mp3")
                22          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a68.mp3")
                23          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a70.mp3")
                24          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a71.mp3")
                25          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a72.mp3")
                26          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a74.mp3")
                27          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a75.mp3")
                28          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a76.mp3")
                29          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a90.mp3")
                30          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a88.mp3")
                31          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a67.mp3")
                32          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a86.mp3")
                33          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a66.mp3")
                34          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a78.mp3")
                35          -> (keyboard, if checkState then Cmd.none else playSound "./piano/a77.mp3")

                36          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b49.mp3")
                37          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b50.mp3")
                38          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b52.mp3")
                39          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b53.mp3")
                40          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b54.mp3")
                41          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b56.mp3")
                42          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b57.mp3")
                43          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b81.mp3")
                44          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b87.mp3")
                45          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b69.mp3")
                46          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b84.mp3")
                47          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b89.mp3")
                48          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b73.mp3")
                49          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b79.mp3")
                50          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b80.mp3")
                51          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b83.mp3")
                52          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b68.mp3")
                53          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b71.mp3")
                54          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b72.mp3")
                55          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b74.mp3")
                56          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b76.mp3")
                57          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b90.mp3")
                58          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b67.mp3")
                59          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b86.mp3")
                60          -> (keyboard, if checkState then Cmd.none else playSound "./piano/b66.mp3")

                otherwise   -> (keyboard, Cmd.none)

{-
        case myKeyInt of
                0          -> (keyboard, playSound "./notes/q.mp3")
                1          -> (keyboard, playSound "./notes/w.mp3")
                2          -> (keyboard, playSound "./notes/e.mp3")
                3          -> (keyboard, playSound "./notes/r.mp3")
                4          -> (keyboard, playSound "./notes/t.mp3")
                5          -> (keyboard, playSound "./notes/y.mp3")
                6          -> (keyboard, playSound "./notes/u.mp3")
                7          -> (keyboard, playSound "./notes/i.mp3")
                8          -> (keyboard, playSound "./notes/o.mp3")
                9          -> (keyboard, playSound "./notes/p.mp3")
                10         -> (keyboard, playSound "./notes/a.mp3")
                11         -> (keyboard, playSound "./notes/s.mp3")
                12         -> (keyboard, playSound "./notes/qup2.mp3")
                13         -> (keyboard, playSound "./notes/wup3.mp3")
                14         -> (keyboard, playSound "./notes/eup4.mp3")
                15         -> (keyboard, playSound "./notes/tup6.mp3")
                16         -> (keyboard, playSound "./notes/yup7.mp3")
                17         -> (keyboard, playSound "./notes/iup9.mp3")
                18         -> (keyboard, playSound "./notes/oup0.mp3")
                19         -> (keyboard, playSound "./notes/pup-.mp3")
                otherwise  -> (keyboard, Cmd.none)
-}

updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard = keyboard

updateKeyboardMadeKeyDarkKeyboard : FromSuperPlace -> MadeKeyDark -> Keyboard -> Keyboard
updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark myKeyInt)  (Keyboard clientKeyStateDict myColor clientKeyColorDict playerCounter) =
    let
        -- updating state of key
        myDarkFunc : Maybe Bool -> Maybe Bool
        myDarkFunc someBool =
            case someBool of
                Just False -> Just True
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myDarkFunc clientKeyStateDict
        
{-        myColFunc : Int -> Maybe Int -> Maybe Int
        myColFunc mC someInt = Just mC
        myColDict = Dict.update myKeyInt (myColFunc myColor) clientKeyColorDict
-}
    in
        Keyboard myDict myColor clientKeyColorDict playerCounter

updateKeyboardMadeKeyLightKeyboard : FromSuperPlace -> MadeKeyLight -> Keyboard -> Keyboard
updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight myKeyInt)  (Keyboard clientKeyStateDict myColor cKCD playerCounter) =
    let
        myLightFunc : Maybe Bool -> Maybe Bool
        myLightFunc someBool =
            case someBool of
                Just True  -> Just False
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myLightFunc clientKeyStateDict
    in
        Keyboard myDict myColor cKCD playerCounter


updateRandomColorNumberKeyboard : FromSuperPlace -> RandomColorNumber -> Keyboard -> Keyboard
updateRandomColorNumberKeyboard fsp (RandomColorNumber myColor)  (Keyboard clientKeyStateDict someCol cKCD playerCounter) = 
            Keyboard clientKeyStateDict myColor cKCD playerCounter

updateKeyboardRandomNumRolledKeyboard : FromSuperPlace -> RandomNumRolled -> Keyboard -> (Keyboard, Cmd RandomColorNumber)
updateKeyboardRandomNumRolledKeyboard fsp RandomNumRolled  keyboard = (keyboard, Random.generate RandomColorNumber (Random.int 0 24))


updateKeyboardInfoUpdatedKeyboard : FromSuperPlace -> InfoUpdated -> Keyboard -> Keyboard
updateKeyboardInfoUpdatedKeyboard fsp (InfoUpdated cKCD pC) (Keyboard clientKeyStateDict someCol a b) =
            Keyboard clientKeyStateDict someCol cKCD pC