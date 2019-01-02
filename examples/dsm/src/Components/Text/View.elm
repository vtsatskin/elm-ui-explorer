module Components.Text.View exposing (text)

import Color as RawColor
import Element exposing (..)
import Element.Font as Font
import Theme.Color exposing (Color, getColor)
import Theme.Typography exposing (Typography, getFamily, getSize)


text : String -> Typography -> Color -> Element msg
text label typo color =
    let
        { red, green, blue } =
            RawColor.toRgba (getColor color)
    in
    Element.paragraph
        [ Font.family
            [ Font.typeface (getFamily typo)
            , Font.sansSerif
            ]
        , Font.size (getSize typo)
        , Font.color (rgb red green blue)
        ]
        [ Element.text label ]