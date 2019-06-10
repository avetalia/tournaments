import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: "#fff" }}>
          {children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
