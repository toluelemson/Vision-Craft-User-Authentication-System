import React, { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Footer: React.FC = (): ReactElement => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Material UI
    </Link>
    {new Date().getFullYear()}
  </Typography>
)

export default Footer
