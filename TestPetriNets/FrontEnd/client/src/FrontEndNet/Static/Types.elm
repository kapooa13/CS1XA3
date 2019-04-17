module FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)


-- the types of all places in the net
type Dummy = Dummy
-- place states
type Keyboard  =
      Keyboard (List Int {-clientKeyStateInt-}) {-clientKeyStateList-}



-- union place type
type NetState  =
      SKeyboard Keyboard
-- internal transition types
type InternalTransition  =
      TNoOp
-- outgoing transition types
type OutgoingTransition  =
      TBoardKeyPressed Int
    | TMakeDark (List Int) Int
    | TMakeLight (List Int) Int
type BoardKeyUnpressed  =
      BoardKeyUnpressed Int
type NoOp  =
      NoOp
type MadeKeyDark  =
      MadeKeyDark (List Int) Int
type MadeKeyLight  =
      MadeKeyLight (List Int) Int
type BoardKeyPressed  =
      BoardKeyPressed Int
type MakeDark  =
      MakeDark (List Int) Int
type MakeLight  =
      MakeLight (List Int) Int

-- outgoing server message types
type IncomingMessage  =
      MBoardKeyUnpressed Int {-myKeyInt-}
    | MNoOp
    | MMadeKeyDark (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}
    | MMadeKeyLight (List Int {-clientKeyStateInt-}) {-clientKeyStateList-} Int {-myKeyInt-}

type Transition =
      Internal InternalTransition |
    External OutgoingTransition
