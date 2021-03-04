// import { makeStyles } from '@material-ui/core/styles';
import { Theme, makeStyles } from '@material-ui/core/styles';

export type StylesData = {
  fontSize: number,
  bulletSize: number,
  bulletColor1: string,
  bulletColor2: string,
}

const useStyles = makeStyles((theme: Theme) => ({
  item: (props: StylesData) => ({
    lineHeight: (17 / 14),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: props.fontSize,
    '&:before': {
      display: 'inline-block',
      content: '""',
      borderRadius: '50%',
      height: props.bulletSize,
      width: props.bulletSize,
      marginRight: theme.spacing(2),
      background: `linear-gradient(270deg, ${props.bulletColor2} 0%, ${props.bulletColor1} 100%)`,
      transform: 'translateY(1px)',
    },
  }),
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;