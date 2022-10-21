import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

export function Footer() {
  return (
    <Box >
    <AppBar position="static">
      <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => {window.open("https://github.com/axialis", "_blank")}}
        >
          <GitHubIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  )
}