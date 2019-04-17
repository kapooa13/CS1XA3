module FrontEndNet.Init exposing(..)
import FrontEndNet.Static.Types exposing(..)
import Dict

-- the initial state of the starting place
init : Keyboard
init = Keyboard (Dict.fromList [(0,False),(1,False),(2,False)])
