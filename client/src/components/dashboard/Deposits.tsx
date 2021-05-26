import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

function Deposits(): ReactElement {
  const classes = useStyles()
  return (
    <>
      <Typography component="p" variant="h4" />
      <Typography color="textSecondary" className={classes.depositContext} />
      <div />
    </>
  )
}

export default Deposits
