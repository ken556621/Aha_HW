import { createStyles, makeStyles } from '@material-ui/core/styles';

import Image from "next/image";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: "23px 0px",
      display: "flex",
      justifyContent: "center",
      gap: 58,
    },
    imageLabelWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    icon: {},
    [theme.breakpoints.down("mobile")]: {
      display: "none",
    },
  })
);

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageLabelWrapper}>
        <Image
          className={classes.icon}
          alt="icon"
          src="/images/nav1.png"
          width={20}
          height={20}
        />
        <div className={classes.label}>Home</div>
      </div>
      <div className={classes.imageLabelWrapper}>
        <Image
          className={classes.icon}
          alt="icon"
          src="/images/nav2.png"
          width={20}
          height={20}
        />
        <div className={classes.label}>Tags</div>
      </div>
    </div>
  );
};

export default Navigation;
