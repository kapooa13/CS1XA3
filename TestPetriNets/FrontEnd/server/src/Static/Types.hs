module Static.Types where
import FrontEndNet.Static.Types


-- a type identifying all of the nets in the server
data NetModel  =
      FrontEndNet
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetTransition  =
      FrontEndNetTrans FrontEndNet.Static.Types.Transition
    deriving(Show,Ord,Eq)
-- a union type of all the nets and their transitions
data NetOutgoingMessage  =
      FrontEndNetOMsg FrontEndNet.Static.Types.ClientMessage
    deriving(Show,Ord,Eq)
