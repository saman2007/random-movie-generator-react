import { api } from "../../App";
import classes from "../../styles/wrapper.module.scss";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../Error/ErrorMessage";

interface Props {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
  const getInitialDatas = async () => {
    const genres = await api.get("/genre/movie/list");
    return {
      genres: genres.data.genres,
    };
  };

  const { status } = useQuery("init datas", getInitialDatas);

  let statusElement = <></>;
  if (status === "loading")
    statusElement = (
      <div className={classes.loadingContainer}>
        <Spinner text="initializing..." />
      </div>
    );
  else if (status === "error")
    statusElement = (
      <ErrorMessage text="something went wrong! please refresh this page and turn on your VPN." />
    );

  return (
    <div className={classes.wrapper}>
      {status === "success" ? children : statusElement}
    </div>
  );
};

export default AppWrapper;
