import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Checkbox,
  LinearProgress,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import foldericon from "../../assets/dashboard/foldericon.png";
import pinfile from "../../assets/dashboard/pinfile.png";
const ProjectCard = ({ project, statusColor }) => {
  const projectId = `${project.id}-${project.id + 11}`;

  return (
    <Card
      elevation={0}
      sx={{
        width: 320,
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: 2,
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent sx={{ p: "16px", "&:last-child": { pb: "16px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <img
              src={foldericon}
              alt="Folder Icon"
              width={"12px"}
              height={"12px"}
            />
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{
                flex: 1,
                ml: 1,
                fontSize: "12px",
                fontFamily: "Inter",
                fontWeight: 700,
              }}
            >
              {project.name}
            </Typography>
          </Box>
          <Typography variant="caption" color="#404040" fontWeight={700}>
            ID: {projectId}
          </Typography>
        </Box>

        <Box mt={1} mb={1} position="relative">
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              height: 15,
              borderRadius: 5,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                borderRadius: 5,
                backgroundColor: "#66CC66",
              },
            }}
          />
          <Typography
            variant="caption"
            color="#2D446E"
            fontWeight={600}
            sx={{
              position: "absolute",
              top: -2,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            50%
          </Typography>
          {/* Custom Badge */}
          {/* <Box
            sx={{
              position: "absolute",
              top: -22,
              right: -10,
              backgroundColor: "#D2C305",
              color: "black",
              fontWeight: 600,
              fontSize: 12,
              px: 1,
              py: 0.3,
              borderRadius: "6px 6px 6px 0",
              boxShadow: 1,
            }}
          >
            On Track
          </Box> */}
        </Box>

        <Grid container spacing={1} alignItems="center" mt={2}>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }}
              />
              <Typography variant="caption" color="#404040" fontWeight={700}>
                {project.startDate} - {project.endDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box component={"hr"} sx={{ borderBottom: "0.1px solid #FEFEFE" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Box sx={{ display: "flex", mr: 1, alignItems: "center" }}>
            {[...Array(3)].map((_, i) => (
              <Avatar
                key={i}
                sx={{
                  width: 24,
                  height: 24,
                  fontSize: "0.75rem",
                  bgcolor: "grey.300",
                  border: "1px solid white",
                  ml: i > 0 ? -1 : 0,
                }}
              >
                P
              </Avatar>
            ))}
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Inter",
                fontWeight: 700,
                ml: 0.5,
              }}
            >
              10+
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={pinfile} alt="File Icon" width={"12px"} height={"12px"} />
            <Typography
              variant="caption"
              sx={{ fontSize: "12px", fontFamily: "Inter", fontWeight: 700 }}
            >
              {project.files} Files
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

// import React from "react";
// import { Card, CardContent } from "@mui/material";
// import { Typography, LinearProgress, Avatar, Box, Stack } from "@mui/material";
// import FolderIcon from "@mui/icons-material/Folder";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

// const ProjectCard = () => {
//   return (
//     <Card sx={{ width: 280, borderRadius: 2, boxShadow: 3, position: 'relative', p: 1 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Box display="flex" alignItems="center" gap={1}>
//           <FolderIcon fontSize="small" />
//           <Typography fontWeight={600}>Project Name</Typography>
//         </Box>
//         <Typography variant="body2" color="text.secondary">
//           ID: P-11
//         </Typography>
//       </Box>

//       <Box mt={1} position="relative">
//         <LinearProgress
//           variant="determinate"
//           value={50}
//           sx={{ height: 10, borderRadius: 5, backgroundColor: '#e0e0e0' }}
//         />
//         <Typography
//           variant="caption"
//           color="white"
//           fontWeight={600}
//           sx={{ position: "absolute", top: -2, left: '50%', transform: 'translateX(-50%)' }}
//         >
//           50%
//         </Typography>
//         {/* Custom Badge */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: -22,
//             right: -10,
//             backgroundColor: '#D2C305',
//             color: 'black',
//             fontWeight: 600,
//             fontSize: 12,
//             px: 1,
//             py: 0.3,
//             borderRadius: '6px 6px 6px 0',
//             boxShadow: 1
//           }}
//         >
//           On Track
//         </Box>
//       </Box>

//       <Typography variant="body2" color="text.secondary" mt={1}>
//         01/01/2024 - 31/01/2024
//       </Typography>

//       <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
//         <Box display="flex" alignItems="center">
//           <Avatar sx={{ width: 24, height: 24 }} src="/avatar1.jpg" />
//           <Typography variant="body2" ml={1}>10+</Typography>
//         </Box>
//         <Box display="flex" alignItems="center">
//           <InsertDriveFileIcon fontSize="small" sx={{ mr: 0.5 }} />
//           <Typography variant="body2">12 Files</Typography>
//         </Box>
//       </Stack>
//     </Card>
//   );
// };

// export default ProjectCard;
