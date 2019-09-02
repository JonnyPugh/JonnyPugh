import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MenuButton = () => (
  <IconButton edge='start' color='inherit' aria-label='menu'>
    <MenuIcon />
  </IconButton>
)

const AppBarButton = ({ label, href, icon }) => (
  <IconButton
    aria-label={label}
    color='inherit'
    href={href}
    target='_blank'
    rel='noopener noreferrer'
  >
    <Badge color='secondary'>
      <FontAwesomeIcon icon={icon} />
    </Badge>
  </IconButton>
)

export default () => (
  <AppBar position='static' style={{ marginBottom: 32 }}>
    <Toolbar>
      <MenuButton />
      <Typography variant='h6' style={{ flexGrow: 1 }}>
        Jonathan Pugh
      </Typography>
      <AppBarButton
        label='GitHub'
        href='https://github.com/jonnypugh'
        icon={faGithub}
      />
      <AppBarButton
        label='LinkedIn'
        href='https://www.linkedin.com/in/jonnypugh'
        icon={faLinkedin}
      />
    </Toolbar>
  </AppBar>
)
