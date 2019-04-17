module Static.Types where
import KeyboardPrototypeNet.Static.Types


-- a type identifying all of the nets in the server
data NetModel  =
      KeyboardPrototypeNet
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetTransition  =
      KeyboardPrototypeNetTrans KeyboardPrototypeNet.Static.Types.Transition
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetOutgoingMessage  =
      KeyboardPrototypeNetOMsg KeyboardPrototypeNet.Static.Types.ClientMessage
    deriving(Show,Ord,Eq)
