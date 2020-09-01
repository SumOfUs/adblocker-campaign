import React from "react";
import styled from "styled-components";

// Internal imports
import Header from "./sections/Header";
import Hero from "./sections/HeroSection";
import Message from "./sections/MessageSection";
import Body from "./sections/BodySection";
import Partner from "./sections/PartnerSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Message />
      <Body />
      <Partner />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
`;

export default App;
