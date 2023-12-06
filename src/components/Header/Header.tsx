import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import Nav from "./Nav";

export default function Header({ lang }: { lang: string }) {
  return (
    <HeaderWrapper lang={lang}>
      <Nav lang={lang} />
    </HeaderWrapper>
  );
}
