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

myInitColor = (Dict.fromList [(0,0)  -- it doesn't matter what it is initially as it'll be updated later
                             ,(1,1)
                             ,(2,2)
                             ,(3,3)
                             ,(4,4)
                             ,(5,5)
                             ,(6,6)
                             ,(7,7)
                             ,(8,8)
                             ,(9,9)
                             ,(10,10)
                             ,(11,11)
                             ,(12,12)
                             ,(13,13)
                             ,(14,14)
                             ,(15,15)
                             ,(16,16)
                             ,(17,17)
                             ,(18,18)
                             ,(19,19)
                              ])
init : Keyboard
init = Keyboard myInitState (16) myInitColor