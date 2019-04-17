{-# LANGUAGE DeriveDataTypeable #-}
module FrontEndNet.Static.Types where
import Data.Typeable (Typeable)
import Data.Data (Data)
import Data.SafeCopy (SafeCopy)
import Static.List (List)


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
data MadeKeyDark  =
      MadeKeyDark (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MadeKeyLight  =
      MadeKeyLight (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data ClientMessage  =
      MBoardKeyUnpressed Int {-myKeyInt-}
    | MMadeKeyDark (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    | MMadeKeyLight (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)

-- individual transition types
data BoardKeyPressedfromKeyboard  =
      BoardKeyPressed_KeyboardtoKeyboard KeyboardPlayer BoardKeyUnpressed
    deriving(Ord,Eq,Show)

data MakeDarkfromKeyboard  =
      MakeDark_KeyboardtoKeyboard KeyboardPlayer MadeKeyDark
    deriving(Ord,Eq,Show)

data MakeLightfromKeyboard  =
      MakeLight_KeyboardtoKeyboard KeyboardPlayer MadeKeyLight
    deriving(Ord,Eq,Show)


-- main transition types
data Transition  =
      TBoardKeyPressed Int {-myKeyInt-}
    | TMakeDark (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    | TMakeLight (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data BoardKeyPressed  =
      BoardKeyPressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MakeDark  =
      MakeDark (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MakeLight  =
      MakeLight (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)

-- player state union type
data Player  =
      PKeyboardPlayer
    deriving(Ord,Eq,Show)
-- extra server types


