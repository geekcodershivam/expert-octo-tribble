import React from "react";
import { Box } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
export default function ApplicantZero() {
  return (
    <Box
      type="column"
      justifyContent="center"
      alignItems="center"
      style={{
        height: "70vh",
        backgroundColor: "#557DA526",
        display: "flex",
        justifyContent: "center",
        alignaItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DescriptionIcon
          style={{
            color: "#A9AFBC",
            fontSize: 100,
          }}
        />
        <h5
          style={{
            marginTop: "19px",
            margin: 0,
            fontSize: 20,
            fontWeight: 200,
          }}
        >
          No applications available!
        </h5>
      </div>
    </Box>
  );
}
