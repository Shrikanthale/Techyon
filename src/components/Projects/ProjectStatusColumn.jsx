import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectStatusColumn = ({ title, color, count, projects }) => {
  const statusColors = {
    "Not Started": "#f44336",
    "In Progress": "#2196f3",
    "In Review": "#ff9800",
    Completed: "#4caf50",
  };

  const statusColor = statusColors[title] || color;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mr: 1 }}>
          {title}
        </Typography>
        <Box
          sx={{
            bgcolor: statusColor,
            color: "white",
            borderRadius: "50%",
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          {count}
        </Box>
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
