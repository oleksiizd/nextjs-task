import { Button } from "@material-ui/core/";
import useStyles from "./styles";

export default function Comp404() {
  const errorStyles = useStyles();
  return <Button className={errorStyles.root}>Hook</Button>;
}
