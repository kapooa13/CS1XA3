{-# LANGUAGE DeriveDataTypeable #-}
module FrontEndNet.Static.Types where
import Data.Typeable (Typeable)
import Data.Data (Data)
import Data.SafeCopy (SafeCopy)


-- place states and place player states
data Keyboard  =
      Keyboard
    deriving(Ord,Eq,Show,Typeable)

data KeyboardPlayer  =
      KeyboardPlayer
    deriving(Ord,Eq,Show,Typeable)



-- outgoing client message types
data BoardKeyUnpressed  =
      BoardKeyUnpressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data ClientMessage  =
      MBoardKeyUnpressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)

-- individual transition types
data BoardKeyPressedfromKeyboard  =
      BoardKeyPressed_KeyboardtoKeyboard KeyboardPlayer BoardKeyUnpressed
    deriving(Ord,Eq,Show)


-- main transition types
data Transition  =
      TBoardKeyPressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data BoardKeyPressed  =
      BoardKeyPressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)

-- player state union type
data Player  =
      PKeyboardPlayer
    deriving(Ord,Eq,Show)
-- extra server types


