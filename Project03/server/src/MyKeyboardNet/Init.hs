module MyKeyboardNet.Init where
import MyKeyboardNet.Static.Types
import Static.Cmd (Cmd)
import Static.Cmd as Cmd

import Data.Map (Map)
import qualified Data.Map as Map

myInitColor = Map.fromList [(0,0),(1,1)
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
                              ]

-- the initial states of each place in this net
initKeyboard :: Keyboard
initKeyboard = Keyboard myInitColor


