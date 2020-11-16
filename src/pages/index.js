import React from "react";
import styled from "styled-components";
import Home from "../components/Home/Home";
import WebAppsType from "../components/WebAppsType/index";

const WebApplicationTypes = [
  {
    title: "Aplicaciones Nativas",
    description:
      "El desarrollo de estas aplicaciones móviles va dirigido específicamente para un sistema operativo (iOS, Android), programada bajo un lenguage específico, la ventaja de estas apps es que aprovechan todas las funcionalidades del dispositivo.",
    image: "/images/aplicaciones-nativas.png",
  },
  {
    title: "Aplicaciones Web",
    description:
      "Básicamente es una página web optimizada de tal manera que se puede adaptar a cualquier dispositivo móvil, está optimización es posible a HTML, CSS y Javascript. Se puede acceder a la aplicación web a través de un navegador web ingresando su URL.",
    image: "/images/aplicaciones-web.png",
  },
  {
    title: "Aplicaciones híbridas",
    description:
      "Desarrollo de aplicaciones móviles que se programan para funcionar en varias plataformas iOS o Android. Pueden adaptarse a cualquier dispositivo móvil y aprovechar el acceso a las funcionalidades del dispositivo.Las aplicaciones híbridas permiten ahorrar recursos y tiempo de desarrollo.",
    image: "/images/aplicaciones-hibridas.png",
  },
  {
    title: "Aplicaciones PWA",
    description:
      "Desarrollo de aplicaciones móviles que combina aspectos de una aplicación nativa y aplicación web. Se desarrollan en lenguajes de programación web por lo que pueden adaptarse a cualquier dispositivo móvil y aprovechar el acceso a las funcionalidades del dispositivo. ",
    image: "/images/aplicaciones-pwa.png",
  },
];

const H2 = styled.h2`
  text-align: center;
  color: var(--fg);
  font-weight: normal;
  font-size: 39px;
`;
const Section = styled.section`
  padding: 48px;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Index = () => (
  <>
    <Home />

    <Section>
      <H2>Tipos de aplicaciones móviles</H2>
      {WebApplicationTypes.map((item, key) => (
        <WebAppsType
          key={key}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </Section>
  </>
);

export default Index;
