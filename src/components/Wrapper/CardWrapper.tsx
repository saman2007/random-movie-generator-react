import classes from "../../styles/card-wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: Props) => {
  return <div className={classes.cardWrapper}>{children}</div>;
};

export default CardWrapper;
