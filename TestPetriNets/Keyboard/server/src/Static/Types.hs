module Static.Types where
import KeyboardNet.Static.Types


-- a type identifying all of the nets in the server
data NetModel  =
      KeyboardNet
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetTransition  =
      KeyboardNetTrans KeyboardNet.Static.Types.Transition
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetOutgoingMessage  =
      KeyboardNetOMsg KeyboardNet.Static.Types.ClientMessage
    deriving(Show,Ord,Eq)
