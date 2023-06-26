import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box
      component="form"
      margin="auto"
      sx={{
        border: 1,
        borderRadius: 1,
        borderColor: "lightgray",
        width: 300,
        height: 300,
        padding: 1,
        backgroundColor: "transparent",
      }}
    >
      <Stack direction="column">
        <Typography align="center" variant="h4" marginBottom={1}>
          Login
        </Typography>

        <TextField
          margin="dense"
          id="standard-required"
          label="Username"
          variant="standard"
        />
        <TextField
          margin="dense"
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
        />
        <Button
          variant="contained"
          sx={{ width: 100, margin: "auto", marginTop: 4 }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}
