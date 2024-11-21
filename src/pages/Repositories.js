import React, { useEffect, useState } from "react";
import useQueryStore from "../store/useQueryStore";
import { IconFileFilled, IconArrowsSort } from "@tabler/icons-react";
import axios from "axios";
import Loader from "../components/Loader";
import RepoCards from "../components/RepoCards";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import GithubLoading from "../components/Loading";
const Repositories = () => {
  const { queryValue } = useQueryStore();
  const [data, setData] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const debounceFetch = setTimeout(async () => {
      if (!queryValue) return setData(null);
      setError(null);
      setLoading(true);
      if (queryValue) {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${queryValue}/repos`
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    }, 200);

    return () => clearTimeout(debounceFetch);
  }, [queryValue]);
  if (loading) return <GithubLoading />;
  if (error) return <ErrorState error={error} />;
  if (!data) return <Loader />;
  const sortedRepositories = [...data].sort((a, b) => {
    return sortOrder === "asc"
      ? a.stargazers_count - b.stargazers_count
      : b.stargazers_count - a.stargazers_count;
  });
  if (data.length === 0)
    return <EmptyState name={queryValue} title={"Repositories"} />;
  return (
    <section className="w-full h-full flex flex-col relative py-2 items-center font-sans overflow-x-hidden">
      <h1 className="text-light-900  text-xl self-start pl-8 mt-4 uppercase flex items-center gap-2 max-md:hidden">
        {" "}
        <IconFileFilled /> Repositories{" "}
      </h1>
      <div className="flex w-full bg-neural-800 text-light-900 justify-center max-md:mt-2">
        <p className="text-2xl flex items-center gap-4">
          Repositories of{" "}
          <span className="uppercase text-lime-500">
            github.com/{queryValue}
          </span>
        </p>
      </div>
      <IconArrowsSort
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        size={40}
        className="cursor-pointer text-yellow-500 animate-pulse mt-8"
      />
      <RepoCards data={sortedRepositories} />
    </section>
  );
};

export default Repositories;
