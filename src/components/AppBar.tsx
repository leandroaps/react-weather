import { AppBar, Toolbar, Typography } from '@mui/material';

export default function ApplicationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
}
