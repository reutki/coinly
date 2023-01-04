import React from 'react'
import { Paper, Avatar, Typography, Switch } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Profile = () => {
  return (
    <>
      <Paper className='profile_paper'><Avatar />
        <Typography>Reutki Marcu</Typography>
        <Typography>marcu.reutki@gmail.com</Typography>
      </Paper>
      <Paper>
        <Typography className='portofolio_paper'>Portofolio</Typography>
        <AttachMoneyIcon />
        <Typography>0$</Typography>
      </Paper>
      <>
        <SettingsIcon />
        <Typography>Settings</Typography>
      </>
      <>
        <Switch />
        <Typography>Theme</Typography>
      </>
      <>
        <HelpIcon />
        <Typography>Help and Contact</Typography>
      </>
    </>
  )
}
