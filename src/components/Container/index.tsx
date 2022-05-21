import React from "react";
import { CurrentLocation } from "../CurrentLocation";

import { StyledContainer } from "./styles"

export function Container () {
    return (
        <>
            <StyledContainer>
                <CurrentLocation />
            </StyledContainer>
        </>
    )
}