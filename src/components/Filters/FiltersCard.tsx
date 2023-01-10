import CardWrapper from "../Wrapper/CardWrapper";
import classes from "../../styles/filters-card.module.scss";
import useFetchedData from "../../hooks/useFetchedData";
import FilterItem from "./FilterItem";
import sorts from "../../data/sorts.json";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";
import { api } from "../../App";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../Error/ErrorMessage";

const getYears = () => {
  const years: { name: string; id: number }[] = [];
  let startYear = new Date().getFullYear();

  for (let index = startYear; index >= startYear - 70; index--) {
    years.push({ id: index, name: index.toString() });
  }

  return years;
};

const FiltersCard = () => {
  const { data }: any = useFetchedData("init datas");
  const [selectedGenre, selectGenre] = useState(null);
  const [selectedSort, selectSort] = useState(sorts[0].param);
  const [selectedYear, selectYear] = useState(new Date().getFullYear());

  const getRandomMovie = async () => {
    const params = {
      year: selectedYear,
      sort_by: selectedSort,
      withGenres: selectedGenre,
      page: 1,
    };

    const { data: initData } = await api.get("/discover/movie", {
      params,
    });

    const randomPage = Math.floor(
      Math.random() * (initData.total_pages - 1 + 1) + 1
    );

    params.page = randomPage;

    const { data: originialData } = await api.get("/discover/movie", {
      params,
    });

    const randomIndex = Math.floor(
      Math.random() * (originialData.results.length - 1 - 0 + 1) + 0
    );

    return originialData.results[randomIndex];
  };

  const { refetch, status, isFetching } = useQuery(
    "random movie",
    getRandomMovie,
    {
      refetchOnWindowFocus: true,
      enabled: false,
    }
  );

  useEffect(() => {
    if (status === "error") {
      alert("failed to generate. please try again.");
    }
  }, [status]);

  return (
    <CardWrapper>
      <div className={classes.about}>
        <h1>WELCOME TO THIS WEBSITE!</h1>
        <p>
          here you can find a movie to see, randomly by selecting the filters
          below.
        </p>
      </div>
      <div className={classes.filtersContainer}>
        <FilterItem
          onChangeSetState={selectGenre}
          items={data.genres}
          labelText="select a genre"
          onChangeProperty="id"
        />
        <FilterItem
          onChangeSetState={selectSort}
          hasAll={false}
          items={sorts}
          labelText="select a sort"
          onChangeProperty="param"
        />
        <FilterItem
          onChangeSetState={selectYear}
          items={getYears()}
          labelText="select a release year"
        />
      </div>
      <SubmitButton
        onClickHandler={() => {
          refetch();
        }}
      />
      {status === "loading" || isFetching ? (
        <div className={classes.backdrop}>
          {status === "loading" || isFetching ? (
            <Spinner text="generating... please wait." />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </CardWrapper>
  );
};

export default FiltersCard;
