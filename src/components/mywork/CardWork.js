import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent} from '@mui/material';
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Button } from '@mui/material';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 1000,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#102027',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    color:'#fafafa',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#ffff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-15px)',
    },
    '&:after': {  
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage:'linear-gradient(black, gray)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
    
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const CardWork = React.memo(function BlogCard() {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'img/devcode.png'
        }
      />
      <CardContent>
      <Typography variant="h6" color="#0075eb">
                <b>
                DevCode
                </b>
        </Typography>
        <Typography variant="h7">
                <b>
                DevCode is a bshadhjasdjlasjd lorem ibshadhjasdjlasjd lorem i
                </b>
        </Typography>
        <div>
        <Button classes={chubbyStyles} style={{background:'linear-gradient(to right, #004bb8, #64a3ff)',color:"#fafafa",minWidth:"150px",margin:"10px 0px 10px"}}>Go to</Button>
        <Button classes={chubbyStyles} style={{background:'linear-gradient(to right, #004bb8, #64a3ff)',color:"#fafafa",minWidth:"150px",margin:"10px 10px 10px"}}>GitHub</Button>
        </div>
        
        
        
       
        
      </CardContent>
    </Card>
  );
});

export default CardWork;