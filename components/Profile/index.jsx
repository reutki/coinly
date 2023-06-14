import React from 'react'
import { Button, Avatar, Modal, useModal, Text } from '@nextui-org/react'
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ProfileStyle } from './styled'
import { useDispatch } from 'react-redux';
import { setAuthorized, setUnauthorized } from '../../src/services/Authorization';

export const Profile = () => {
  const { setVisible, bindings } = useModal();
  const dispatch = useDispatch()
  const logout = () => {
    localStorage.setItem('isAuthenticated', false);
    dispatch(setUnauthorized(false))

  }
  return (
    <ProfileStyle>
      <Avatar onClick={() => setVisible(true)} color={'gradient'}
        textColor={'white'}
        pointer
        size={window.innerWidth < 320 ? 'xs' : window.innerWidth < 320 ? 'sm' : window.innerWidth < 768 ? 'md' : window.innerWidth < 1024 ? 'lg' : window.innerWidth > 1024 ? 'xl' : 'xl'}
        text={localStorage.getItem('username').toUpperCase().charAt(0)} />
      <Modal closeButton {...bindings}>
        <Modal.Body>
          <Text>Hello, {localStorage.getItem('username')}</Text>
          <Button variant='contained' onClick={() => logout()}>Log Out</Button>
        </Modal.Body>
      </Modal>
    </ProfileStyle >
  )
}
