import React from 'react';

import background from '../../assets/background.png'

import { StyledBackground } from './styles'

export function BackgroundBody() {
    return (
        <>
            <StyledBackground>
                <img src={background} alt="Imagem de fundo" />
            </StyledBackground>
        </>
    )
}