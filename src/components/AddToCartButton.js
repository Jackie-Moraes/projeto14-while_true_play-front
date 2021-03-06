import React from "react"

import * as S from "./../styles/styles.js"

export default function AddToCartButton(props) {
    const { addToCartCallback } = props

    return (
        <>
            <S.AddToCartButton onClick={addToCartCallback}>
                {props.children}
            </S.AddToCartButton>
        </>
    )
}
