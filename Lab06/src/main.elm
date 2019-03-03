import Browser
import Html exposing (Html, Attribute, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

-- Main
main = Browser.sandbox { init = init, update = update, view = view }

-- Model
type alias Model = { word0 : String
                   , word1 : String}

type Msg = Change0 String
         | Change1 String           

init : Model
init = { word0 = ""
       , word1 = ""}

-- View
view : Model -> Html Msg
view model = div []
         [
            input [ placeholder "String 1", value model.word0, onInput Change0 ] []
           ,input [ placeholder "String 2", value model.word1, onInput Change1 ] []
           ,div [] [ text (model.word0 ++ ":" ++ model.word1)]

         ]

-- Update
update : Msg -> Model -> Model
update msg model = case msg of
                    Change0 newWord -> { model | word0 = newWord }
                    Change1 newWord -> { model | word1 = newWord}