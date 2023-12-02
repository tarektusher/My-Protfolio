import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {  IconButton, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { red } from '@mui/material/colors';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  paddingLeft : '5vh',
  paddingTop: '10vh',
  paddingBottom : '5vh',
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={12}>
          <Item>
            <Typography variant='h2' sx={{textAlign : 'center',color : 'black'}}>
                Hi, I'm <span style={{color : '#24BFA7'}}>Tarek Tusher</span>
            </Typography>
            <Typography variant='h6' >
                I am a Full Stack Developer. Currently I'm working Vivasoft LTD as a Intern Software Engineer.<br/>
                
            </Typography>
            <IconButton href='https://www.facebook.com/profile.php?id=100011716865124' target='_blank' rel="noopener noreferrer" sx={{color : '#0866FF', marginTop : '1vh', ":hover" : {borderColor : '#24BFA7'}}}>
                <FacebookOutlinedIcon/>
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/mdtarek33/' target='_blank' rel="noopener noreferrer" sx={{color : '#0A66C2', marginTop : '1vh', ":hover" : {borderColor : '#24BFA7'}}}>
                <LinkedInIcon/>
            </IconButton>
            <IconButton href='https://github.com/tarektusher' target='_blank' rel="noopener noreferrer" sx={{color : '#010409', marginTop : '1vh', ":hover" : {borderColor : '#24BFA7'}}}>
                <GitHubIcon/>
            </IconButton>
          </Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}