module KeyboardPrototypeNet.Keys exposing (..)

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

fromCode : String -> Int
fromCode keyCode =
    case keyCode of
        "f"       -> 0
        "w"       -> 1
        "F"       -> 2
        "r"       -> 3
        "R"       -> 4
        "y"       -> 5
        "u"       -> 6
        "i"       -> 7
        "o"       -> 8
        "p"       -> 9
        "["       -> 10
        "]"       -> 11
        "2"       -> 12
        "3"       -> 13
        "4"       -> 14
        "6"       -> 15
        "7"       -> 16
        "9"       -> 17
        "0"       -> 18
        "-"       -> 19
        otherwise -> 20