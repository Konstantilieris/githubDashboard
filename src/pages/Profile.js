import React, { useEffect, useState } from "react";
import axios from "axios";
import useQueryStore from "../store/useQueryStore";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import { IconUserScan } from "@tabler/icons-react";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import GithubLoading from "../components/Loading";
const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { queryValue } = useQueryStore();
  useEffect(() => {
    const debounceFetch = setTimeout(async () => {
      setError(null);
      if (!queryValue) return setData(null);
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${queryValue}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms debounce delay

    return () => clearTimeout(debounceFetch); // Cleanup timeout if queryValue changes
  }, [queryValue]);
  if (loading) return <GithubLoading />;
  if (error) return <ErrorState error={error} />;
  if (!data) return <Loader />;
  if (data.length === 0)
    return <EmptyState name={queryValue} title={"Profile"} />;

  return (
    <section className="w-full h-full flex flex-col relative py-2 items-center ">
      <h1 className="text-light-900 font-sans text-xl self-start pl-8 mt-4 uppercase flex items-center gap-2">
        {" "}
        <IconUserScan size={30} />
        GitHub Profile{" "}
      </h1>
      <div className="flex w-full bg-neural-800 text-light-900 justify-center">
        <UserCard
          url={data.avatar_url}
          name={data.name}
          created={data.created_at}
          blog={data.blog}
          bio={data.bio}
          location={data.location}
          followers={data.followers}
          repositories={data.public_repos}
          following={data.following}
        />
      </div>
    </section>
  );
};

export default Profile;
