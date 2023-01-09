import React from 'react'
import { Paper, Avatar, Typography, Switch, Card, Button } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { AvatarPaper, PortofolioPaper, ProfileStyle, Balance } from './styled'

export const Profile = () => {
  return (
    <ProfileStyle>
      <AvatarPaper>
        <Paper className='profile_paper'>
          <Avatar className='avatar_icon' />
          <Typography variant='body1' className='profile_name'>Reutki Marcu</Typography>
        </Paper>
      </AvatarPaper>
      <PortofolioPaper>

        <Paper className='portofolio_paper'>
          <Typography >Balance</Typography>
          <Balance>
            <Typography>0</Typography>
            <AttachMoneyIcon />
          </Balance>
        </Paper>
      </PortofolioPaper>
      <Card className='card_option'>
        <SettingsIcon />
        <Typography>Settings</Typography>
      </Card >
      <Card className='card_option'>
        <Switch />
        <Typography>Theme</Typography>
      </Card >
      <Card className='card_option'>
        <HelpIcon />
        <Typography>Help and Contact</Typography>
      </Card>
    </ProfileStyle>
  )
}
