module KeyboardPrototypeNet.Update exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.Static.FromSuperPlace exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)
import KeyboardPrototypeNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

import KeyboardPrototypeNet.Sounds exposing (..)

updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard = keyboard

{- For reference:

- Layout for Keyboard prototype
-
   Key    CorrespondingInt

-- white keys
    q           0
    w           1
    e           2
    r           3
    t           4
    y           5
    u           6
    i           7
    o           8
    p           9
    [           10
    ]           11

-- black keys
    2           12
    3           13
    4           14
    6           15
    7           16
    9           17
    0           18
    -           19
-}
    
updateKeyboardDeflatedBoardKeyKeyboard : FromSuperPlace -> DeflatedBoardKey -> Keyboard -> (Keyboard , Cmd NoOp)
updateKeyboardDeflatedBoardKeyKeyboard fsp (DeflatedBoardKey myKeyInteger)  keyboard =
            case myKeyInteger of
                0          -> (Keyboard, playSound "./notes/q.mp3")
                1          -> (Keyboard, playSound "./notes/w.mp3")
                2          -> (Keyboard, playSound "./notes/e.mp3")
                3          -> (Keyboard, playSound "./notes/r.mp3")
                4          -> (Keyboard, playSound "./notes/t.mp3")
                5          -> (Keyboard, playSound "./notes/y.mp3")
                6          -> (Keyboard, playSound "./notes/u.mp3")
                7          -> (Keyboard, playSound "./notes/i.mp3")
                8          -> (Keyboard, playSound "./notes/o.mp3")
                9          -> (Keyboard, playSound "./notes/p.mp3")
                10         -> (Keyboard, playSound "./notes/a.mp3")
                11         -> (Keyboard, playSound "./notes/s.mp3")
                12         -> (Keyboard, playSound "./notes/qup2.mp3")
                13         -> (Keyboard, playSound "./notes/wup3.mp3")
                14         -> (Keyboard, playSound "./notes/eup4.mp3")
                15         -> (Keyboard, playSound "./notes/tup6.mp3")
                16         -> (Keyboard, playSound "./notes/yup7.mp3")
                17         -> (Keyboard, playSound "./notes/iup9.mp3")
                18         -> (Keyboard, playSound "./notes/oup0.mp3")
                19         -> (Keyboard, playSound "./notes/pup-.mp3")
                otherwise  -> (Keyboard, Cmd.none)



