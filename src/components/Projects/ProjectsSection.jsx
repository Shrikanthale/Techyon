import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProjectStatusColumn from "./ProjectStatusColumn";
import { projectStatuses, mockProjects } from "../../mockData";
import listview from "../../assets/dashboard/listview.png";
const ProjectsSection = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                color: "#404040",
                fontWeight: 500,
                mr: 2,
                textShadow: "2px 2px 4px #404040",
              }}
            >
              Projects
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#2a3f5f",
                "&:hover": { bgcolor: "#1e3050" },
                borderRadius: "10px",
                px: 2,
              }}
            >
              Projects
            </Button>
          </Box>
          <Box>
            <Typography sx={routeText}>
              Dashboard / Project Overview{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Select
          value="All Projects"
          displayEmpty
          renderValue={() => "All Projects"}
          variant="standard"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            mr: 2,
            ".MuiSelect-select": {
              py: 0.5,
              pl: 0,
              pr: 2,
            },
            color: "#2D446E",
            textShadow: "2px 2px 4px #404040",
            "&:before, &:after": { display: "none" },
          }}
        >
          <MenuItem value="All Projects">All Projects</MenuItem>
          <MenuItem value="My Projects">My Projects</MenuItem>
          <MenuItem value="Archived">Archived</MenuItem>
        </Select>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton
            aria-label="list view"
            sx={{
              color: "#000",
              bgcolor: "#fff",
              boxShadow: "0px 9px 10px #2D446E1A",
              borderRadius: "7px",
              border: "0.5px solid #CCCCCC",
              mr: "1px",
              "&:hover": { bgcolor: "#2D446E", color: "#fff" },
            }}
          >
            <img src={listview} alt="list view" style={{ width: "20px" }} />
          </IconButton>

          <IconButton
            aria-label="grid view"
            sx={{
              color: "#fff",
              bgcolor: "#2D446E",
              boxShadow: "0px 9px 10px #2D446E1A",
              border: "0.5px solid #CCCCCC",
              borderRadius: "7px",
              mr: "1px",
              "&:hover": { bgcolor: "#2D446E" },
            }}
          >
            <ViewModuleIcon
              fontSize="small"
              sx={{ "&:hover": { color: "#fff" } }}
            />
          </IconButton>

          <IconButton sx={{ ml: 1 }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {projectStatuses.map((status) => (
          <Grid item xs={12} sm={6} md={3} key={status.id}>
            <ProjectStatusColumn
              title={status.label}
              color={status.color}
              count={mockProjects.filter((p) => p.status === status.id).length}
              projects={mockProjects.filter((p) => p.status === status.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;

const routeText = {
  FontSize: "12px",
  fontWeight: 400,
  color: "#8A8A8A",
  fontFamily: "Inter",
};
