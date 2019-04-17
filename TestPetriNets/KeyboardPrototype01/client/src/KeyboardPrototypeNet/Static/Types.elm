module KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)


-- the types of all places in the net
type Dummy = Dummy
-- place states
type Keyboard  =
      Keyboard



-- union place type
type NetState  =
      SKeyboard Keyboard
-- internal transition types
type InternalTransition  =
      TNoOp
-- outgoing transition types
type OutgoingTransition  =
      TBoardKeyPressed Int
type NoOp  =
      NoOp
type DeflatedBoardKey  =
      DeflatedBoardKey Int
type BoardKeyPressed  =
      BoardKeyPressed Int

-- outgoing server message types
type IncomingMessage  =
      MNoOp
    | MDeflatedBoardKey Int {-myKeyInteger-}

type Transition =
      Internal InternalTransition |
    External OutgoingTransition
