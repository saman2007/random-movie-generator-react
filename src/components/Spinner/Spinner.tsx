import { LineWave } from "react-loader-spinner";
import classes from "../../styles/spinner.module.scss";

interface Props {
  text: string;
}

const Spinner = ({ text }: Props) => {
  return (
    <div className={classes.spinner_container}>
      <LineWave
        color="#00e25a"
        ariaLabel="line-wave"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          right: "-15px",
        }}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
      <p>{text}</p>
    </div>
  );
};

export default Spinner;
