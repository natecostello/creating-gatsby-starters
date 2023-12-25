import React from "react";
import { Container } from "../components/Container";
import { Bio } from "../components/Bio";
import { SEO } from "../components/Seo";

export default function Home() {
  return (
    <Container>
    <Bio />
    </Container>
    );
  }

export const Head = () => (
  <SEO />
)