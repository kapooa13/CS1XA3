module FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import Dict exposing (Dict)


-- the types of all places in the net
type Dummy = Dummy
-- place states
type Keyboard  =
      Keyboard (Dict Int {-myKeyInt-} Bool {-keyStateBool-}) {-clientKeyStateDict-}



-- union place type
type NetState  =
      SKeyboard Keyboard
-- internal transition types
type InternalTransition  =
      TNoOp
    | TMakeDark Int
    | TMakeLight Int
-- outgoing transition types
type OutgoingTransition  =
      TBoardKeyPressed Int
type BoardKeyUnpressed  =
      BoardKeyUnpressed Int
type NoOp  =
      NoOp
type MakeDark  =
      MakeDark Int
type MakeLight  =
      MakeLight Int
type BoardKeyPressed  =
      BoardKeyPressed Int

-- outgoing server message types
type IncomingMessage  =
      MBoardKeyUnpressed Int {-myKeyInt-}
    | MNoOp
    | MMakeDark Int {-myKeyInt-}
    | MMakeLight Int {-myKeyInt-}

type Transition =
      Internal InternalTransition |
    External OutgoingTransition
