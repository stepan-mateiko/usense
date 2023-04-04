import React, { useState } from "react";

import { InfoCard, Wrapper, Section } from "../styles";
import Input from "../Input";

const Card = () => {
  const [password, setPassword] = useState("");

  const passStrength = () => {
    if (password.length === 0) {
      return "gray";
    }
    if (password.length < 8) {
      return "red";
    }

    const hasLetters = /[A-Za-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return "green";
    }
    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return "yellow";
    }

    return "red";
  };

  const sectionColor = passStrength();
  let sectionTwoColor = sectionColor === "red" ? "gray" : sectionColor;
  let sectionThreeColor = sectionColor === "green" ? "green" : "gray";

  if (sectionColor === "red" && password.length < 8) {
    [sectionTwoColor, sectionThreeColor] = ["red", "red"];
  }
  return (
    <InfoCard>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <Wrapper>
        <Section style={{ backgroundColor: sectionColor }}></Section>
        <Section style={{ backgroundColor: sectionTwoColor }}></Section>
        <Section style={{ backgroundColor: sectionThreeColor }}></Section>
      </Wrapper>
    </InfoCard>
  );
};

export default Card;
