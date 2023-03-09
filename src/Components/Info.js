import { ArrowBack } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box component="p">
        This single page app has been created by Juho Simojoki.
        <br />
        <br />
        It functions as a portfolio site and as a project for personal growth as
        a web developer. It's not perfect in any way. The margins and paddings
        could be nicer but when you only have so little time and so much to do,
        you¨ve got to leave it somewhere.
        <br />
        <br />
        Thanks for visiting!
      </Box>
      <Box>
        <ArrowBack onClick={() => navigate("/")} />
      </Box>
    </Container>
  );
};

export default Info;
