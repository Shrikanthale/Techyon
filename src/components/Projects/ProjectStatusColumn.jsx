import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectStatusColumn = ({ title, color, count, projects }) => {
  const statusColors = {
    "Not Started": "#B0B0B0",
    "In Progress": "#4A90E2",
    Archived: "#607D8B",
    Completed: "#4CAF50",
  };

  const statusColor = statusColors[title] || color;

  return (
    <Box sx={{ mb: 2, mt: 2 }}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          background: statusColor,
          borderRadius: "10px",
          textAlign: "center",
          width: "110px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: "12px",
            mr: 1,
            fontFamily: "Inter",
            color: "#FFFFFF",
          }}
        >
          {title} &nbsp;
          {count}
        </Typography>
      </Box>

      <Stack spacing={2}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            statusColor={statusColor}
          />
        ))}
        <Button
          variant="text"
          color="primary"
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            px: 0,
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          View more
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectStatusColumn;
