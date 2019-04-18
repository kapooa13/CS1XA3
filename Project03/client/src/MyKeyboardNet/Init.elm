module MyKeyboardNet.Init exposing(..)
import MyKeyboardNet.Static.Types exposing(..)

import Dict

-- the initial state of the starting place

myInitState = (Dict.fromList [(0,False)
                             ,(1,False)
                             ,(2,False)
                             ,(3,False)
                             ,(4,False)
                             ,(5,False)
                             ,(6,False)
                             ,(7,False)
                             ,(8,False)
                             ,(9,False)
                             ,(10,False)
                             ,(11,False)
                             ,(12,False)
                             ,(13,False)
                             ,(14,False)
                             ,(15,False)
                             ,(16,False)
                             ,(17,False)
                             ,(18,False)
                             ,(19,False)
                              ])

init : Keyboard
init = Keyboard myInitState (0) (0)