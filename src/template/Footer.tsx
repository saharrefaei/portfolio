import { Logo } from "./Logo.tsx";
import React from "react";
export function Footer({ title = "", url = "" }) {
  return (
    <footer>
      <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <Logo />
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        <code>{title}</code>
      </a>
    </footer>
  );
}
