-- import Main exposing (..)
import Browser
import Html exposing (..)
import Http
import String
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick)

main =
 Browser.element
     { init = init
     , update = update
     , subscriptions = subscriptions
     , view = view
     }

-- Model

type alias Model =
    { name : String
    , response : String
    , password : String
    , passwordAgain : String}

type Msg
    = Name String
    | Password String
    | PasswordAgain String
    | ButtonPressed
    | GotText (Result Http.Error String)

testGet : Cmd Msg
testGet =
    Http.get
        { url = "https://mac1xa3.ca/e/kapooa13/testget/?name=Curt"
        , expect = Http.expectString GotText
        }

init : () -> ( Model, Cmd Msg )
init _ = ({ name = "", response = "", password = "", passwordAgain = "" }, Cmd.none )


-- View

view : Model -> Html Msg
view model =
    div []
    [ viewInput "text" "Name" model.name Name
    , viewInput "password" "Password" model.password Password
    , viewInput "password" "Re-enter Password" model.passwordAgain PasswordAgain
    , viewValidation model
    , button [ onClick ButtonPressed ] [ text "Verify" ]
    , text model.response
    ]

viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []
  
viewValidation : Model -> Html msg
viewValidation model =
  if model.password == model.passwordAgain then
    div [ style "color" "green" ] [ text "OK" ]
  else
    div [ style "color" "red" ] [ text "Passwords do not match!" ]

-- Update

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Name name -> ({ model | name = name }, Cmd.none )
        Password password -> ({ model | password = password }, Cmd.none )
        PasswordAgain password -> ({ model | passwordAgain = password }, Cmd.none )
        ButtonPressed -> ( model, testPost model )
        GotText result ->
            case result of
                Ok val ->
                    ( { model | response = val }, Cmd.none )

                Err error ->
                    ( handleError model error, Cmd.none )

handleError model error =
    case error of
        Http.BadUrl url ->
            { model | response = "bad url: " ++ url }
        Http.Timeout ->
            { model | response = "timeout" }
        Http.NetworkError ->
            { model | response = "network error" }
        Http.BadStatus i ->
            { model | response = "bad status " ++ String.fromInt i }
        Http.BadBody body ->
            { model | response = "bad body " ++ body }

-- POST

testStr : Model -> String
testStr model = "name=" ++ model.name ++ "&password=" ++ model.password

testPost : Model -> Cmd Msg
testPost model =
  Http.post
    { url = "https://mac1xa3.ca/e/kapooa13/post/"
    , body = Http.stringBody "application/x-www-form-urlencoded" (testStr model)
    , expect = Http.expectString GotText
    -- refers to GotText
    -- handle this POST request
    }


subscriptions : Model -> Sub Msg
subscriptions model = Sub.none
