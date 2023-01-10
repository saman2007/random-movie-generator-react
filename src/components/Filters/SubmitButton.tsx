import classes from "../../styles/submit-button.module.scss";

interface Props {
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SubmitButton = ({ onClickHandler }: Props) => {
  return (
    <button onClick={onClickHandler} className={classes.submitButton}>
      generate a random movie
    </button>
  );
};

export default SubmitButton;
