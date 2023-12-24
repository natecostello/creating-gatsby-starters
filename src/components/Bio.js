import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GiDove } from "react-icons/gi";

const BioWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 0.4rem;
svg {
    color: purple;
    font-size: 2rem;
}
h2 {
    margin-bottom: 0.5rem;
}
h3 {
    margin: 0.8rem 0;
    font-weight: 600;
}
`;
export const Bio = () => {
    const data = useStaticQuery(graphql`
    query 
    {
        imageSharp(fixed: {originalName: {eq: "portrait.png"}}) {
            gatsbyImageData(layout: FIXED, height: 250, width: 250)
        }
    }
    `);
    return (
        <BioWrapper>
        <GatsbyImage
        image={data.imageSharp.gatsbyImageData}
        style={{ borderRadius: "50%", left: "0", top: "0" }}
        alt="My Avatar"
        />
        <h2>
        Hey Stranger <GiDove />
        </h2>
        
        <br />
        <p>
        My name is <b>Ashutosh</b>! I'm a JavaScript Developer & Technical
        Writer. I develop awesome stuff with JavaScript and love to write about
        them.
        </p>
        <h3>Latest Posts</h3>
        </BioWrapper>
        );
    };