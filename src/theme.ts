import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0EA5E9" },
    text: { primary: "#101423" },
    background: { default: "#F7F7F9" },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    h1: { fontSize: "2.2rem", fontWeight: 700 },
    h2: { fontSize: "1.6rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
});
