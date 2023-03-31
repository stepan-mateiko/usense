import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Typography } from "@mui/material";

const App = () => {
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

  return (
    <Container>
      <Card>
        <Typography sx={{ fontSize: 48 }}>Password Check</Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          type="password"
          sx={{ backgroundColor: "#57C5B6" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Wrapper>
          <Section
            style={{
              backgroundColor:
                sectionColor === "red"
                  ? "red"
                  : sectionColor === "yellow"
                  ? "yellow"
                  : sectionColor === "green"
                  ? "green"
                  : "gray",
            }}
          ></Section>
          <Section
            style={{
              backgroundColor:
                sectionColor === "red" && password.length < 8
                  ? "red"
                  : sectionColor === "yellow"
                  ? "yellow"
                  : sectionColor === "green"
                  ? "green"
                  : "gray",
            }}
          ></Section>
          <Section
            style={{
              backgroundColor:
                sectionColor === "red" && password.length < 8
                  ? "red"
                  : sectionColor === "green"
                  ? "green"
                  : "gray",
            }}
          ></Section>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  background-color: #1a5f7a;
  height: 100vh;
  padding-top: 20%;
`;
const Card = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: #159895;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  background-color: #57c5b6;
  padding: 5px;
`;
const Section = styled.div`
  width: 33%;
  height: 20px;
`;
