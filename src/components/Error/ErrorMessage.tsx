import classes from "../../styles/error.module.scss";

interface Props {
  text: string;
}

const ErrorMessage = ({ text }: Props) => {
  return (
    <div className={classes.errorContainer}>
      <p className={classes.error}>{text}</p>
    </div>
  );
};

export default ErrorMessage;
