import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        display: { xs: "none", sm: "block" },
      }}
      flex={2}
      p={2}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
