import { createTheme } from "@mui/material/styles";
import "./App.css"; // Import the CSS file for global styles
import "./index.css"; // Import the CSS file for global styles
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Blue from active items
    },
    secondary: {
      main: "#4caf50", // Green for completed items
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    status: {
      notStarted: "#f44336", // Red
      inProgress: "#2196f3", // Blue
      inReview: "#ff9800", // Orange
      completed: "#4caf50", // Green
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif ,Inter',
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
