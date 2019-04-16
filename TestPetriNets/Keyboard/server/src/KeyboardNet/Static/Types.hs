{-# LANGUAGE DeriveDataTypeable #-}
module KeyboardNet.Static.Types where
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
data KeyUnpressed  =
      KeyUnpressed Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)
data ClientMessage  =
      MKeyUnpressed Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)

-- individual transition types
data SomeKeyPressedfromKeyboard  =
      SomeKeyPressed_KeyboardtoKeyboard KeyboardPlayer KeyUnpressed
    deriving(Ord,Eq,Show)


-- main transition types
data Transition  =
      TSomeKeyPressed Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)
data SomeKeyPressed  =
      SomeKeyPressed Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)

-- player state union type
data Player  =
      PKeyboardPlayer
    deriving(Ord,Eq,Show)
-- extra server types


