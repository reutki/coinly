import React from 'react'
import { Paper, Avatar, Typography, Switch } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { AvatarPaper, PortofolioPaper } from './styled'

export const Profile = () => {
  return (
    <>
      <AvatarPaper>

        <Paper className='profile_paper'>
          <Avatar className='avatar_icon' />
          <Typography>Reutki Marcu</Typography>
          <Typography>marcu.reutki@gmail.com</Typography>
        </Paper>
      </AvatarPaper>
      <PortofolioPaper>

        <Paper className='portofolio_paper'>
          <>
            <Typography className='portofolio_paper'>Portofolio</Typography>
            <AttachMoneyIcon />
          </>
          <Typography>0$</Typography>
        </Paper>
      </PortofolioPaper>
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
