import React from 'react'

export const boton = ({funcion, texto}) => {
    return (
        <button onClick={funcion }>
            {texto}
        </button>
    )
}
