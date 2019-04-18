module MyKeyboardNet.Init where
import MyKeyboardNet.Static.Types
import Static.Cmd (Cmd)
import Static.Cmd as Cmd

import Data.Map (Map)
import qualified Data.Map as Map

myInitColor = Map.fromList [(0,0),(1,0)
                             ,(2,0)
                             ,(3,0)
                             ,(4,0)
                             ,(5,0)
                             ,(6,0)
                             ,(7,0)
                             ,(8,0)
                             ,(9,0)
                             ,(10,0)
                             ,(11,0)
                             ,(12,0)
                             ,(13,0)
                             ,(14,0)
                             ,(15,15)
                             ,(16,16)
                             ,(17,17)
                             ,(18,18)
                             ,(19,19)
                              ]

-- the initial states of each place in this net
initKeyboard :: Keyboard
initKeyboard = Keyboard myInitColor


