import React from "react";
import styled from "styled-components";
import { Nav } from "./Nav"

const ContainerWrapper = styled.div`
height: 100%;
display: block;
margin: auto;
max-width: 640px;
`;
export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
        {"  "}
        <Nav />
        {children}
        </ContainerWrapper>
        );
    };