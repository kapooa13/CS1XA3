module Static.Types where
import MyKeyboardNet.Static.Types


-- a type identifying all of the nets in the server
data NetModel  =
      MyKeyboardNet
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetTransition  =
      MyKeyboardNetTrans MyKeyboardNet.Static.Types.Transition
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetOutgoingMessage  =
      MyKeyboardNetOMsg MyKeyboardNet.Static.Types.ClientMessage
    deriving(Show,Ord,Eq)
