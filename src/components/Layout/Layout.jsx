import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProjectsSection from "../Projects/ProjectsSection";
import TasksSection from "../Tasks/TasksSection";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f8f9fa" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          //   ml: sidebarOpen ? "240px" : "64px",
          transition: (theme) =>
            theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Header toggleSidebar={toggleSidebar} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 8.1,
            py: 4,
            backgroundColor: "#f8f9fa",
            overflowY: "auto",
          }}
        >
          <ProjectsSection />
          <TasksSection />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
