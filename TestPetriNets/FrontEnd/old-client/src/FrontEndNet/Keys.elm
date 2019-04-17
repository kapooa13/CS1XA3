module FrontEndNet.Keys exposing(..)

fromCode : String -> Int
fromCode keyCode =
    case keyCode of
        "q"       -> 0
        "w"       -> 1
        "e"       -> 2
        otherwise -> 3