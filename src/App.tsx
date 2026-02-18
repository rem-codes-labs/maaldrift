import { Box, Card, CardContent, Container, Divider, Stack, Typography } from "@mui/material";

const designTasks = [
  "UX flow voor vinger-tekenen van vakverdeling (vrije rijen/kolommen).",
  "Interactiestates voor minimum vakgrootte (200×200mm) + validaties.",
  "Componenten: maatvoering per vak, type-selectie (raam/deur/vulling).",
  "Projectopslag: lijstweergave, versiebeheer, export-knop.",
  "Export UI: keuze DXF/DWG + schaal/maatvoering instellen.",
  "Mobiel-first layout en touch targets (min. 40px).",
  "Empty, error, en success states (geen bestand, export fail, etc.).",
];

const implementationTasks = [
  "Canvas/SVG grid editor met vrije rijen/kolommen + drag handles.",
  "Constraint engine: min cell 200×200mm + snapping + auto-resize.",
  "Per-vak metadata model (maatvoering, type, materiaal, notities).",
  "Project storage: local storage + export/import JSON.",
  "DXF/DWG export service (backend of client) met maatlijnen.",
  "Device calibration: mm ↔ px mapping + schaal per project.",
  "API contract voor opslag en export (indien backend).",
  "Tests: grid constraints, export output, mobile gestures.",
];

const assumptions = [
  "REQUIREMENTS/UI/COPY zijn nog leeg of placeholder; scope bevestigen.",
  "DXF/DWG export kan via serverless of client library (investigatie nodig).",
];

export default function App() {
  return (
    <Box>
      <Box sx={{ background: "white", borderBottom: "1px solid rgba(16,20,35,0.08)" }}>
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Typography variant="h1" gutterBottom>
            Maaldrift — ontwerp & implementatie taken
          </Typography>
          <Typography variant="body1">
            Levering voor PROJ-012: geen code, alleen ontwerp- en implementatietaken voor de
            kozijn-configurator.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Card>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Ontwerptaken
              </Typography>
              <Stack spacing={1.2}>
                {designTasks.map((item) => (
                  <Typography key={item}>• {item}</Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Implementatietaken
              </Typography>
              <Stack spacing={1.2}>
                {implementationTasks.map((item) => (
                  <Typography key={item}>• {item}</Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Aannames / open vragen
              </Typography>
              <Stack spacing={1.2}>
                {assumptions.map((item) => (
                  <Typography key={item}>• {item}</Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      <Divider />
      <Box sx={{ background: "white", py: 3 }}>
        <Container maxWidth="md">
          <Typography variant="body2">© 2026 Maaldrift</Typography>
        </Container>
      </Box>
    </Box>
  );
}
