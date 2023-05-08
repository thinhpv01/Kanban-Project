import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingButton variant="outlined" color="success">
        Click here to create your board
      </LoadingButton>
    </Box>
  );
};

export default Home;
