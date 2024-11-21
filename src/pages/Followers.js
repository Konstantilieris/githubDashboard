import React, { useState, useEffect } from "react";
import useQueryStore from "../store/useQueryStore";
import axios from "axios";
import Loader from "../components/Loader";
import FollowersCarousel from "../components/FollowersCarousel";
import { IconUsersGroup } from "@tabler/icons-react";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import GithubLoading from "../components/Loading";
const Followers = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { queryValue } = useQueryStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const debounceFetch = setTimeout(async () => {
      if (!queryValue) return setData(null);
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${queryValue}/followers`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 200); // 500ms debounce delay

    return () => clearTimeout(debounceFetch); // Cleanup timeout if queryValue changes
  }, [queryValue]);
  if (loading) return <GithubLoading />;
  if (error) return <ErrorState error={error} />;
  if (!data) return <Loader />;
  if (data.length === 0)
    return <EmptyState name={queryValue} title={"Followers"} />;

  return (
    <section className="w-full h-full flex flex-col relative py-8 items-center font-sans px-4 gap-20">
      <h1 className=" text-light-900 uppercase tracking-widest self-start text-2xl flex items-center gap-2">
        <IconUsersGroup className="text-light-900" size={28} />
        FOLLOWERS OF <span className="text-lime-500 "> {queryValue}</span>
      </h1>

      <FollowersCarousel data={data} />
    </section>
  );
};

export default Followers;
