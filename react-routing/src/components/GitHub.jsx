// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const profile = useLoaderData();
  // const [profile, setProfile] = useState([]);

  // const fetchGitProfile = async () => {
  //   const res = await fetch("https://api.github.com/users/MohitCode17");
  //   const data = await res.json();
  //   setProfile(data);
  // };

  // useEffect(() => {
  //   fetchGitProfile();
  // }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={profile.avatar_url}
              alt="image"
              className="sm:rounded-full shadow-xl"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              {profile.name}
            </h2>
            <p className="mt-6 text-gray-600">{profile.bio}</p>

            <div className="flex sm:items-center flex-col sm:flex-row gap-5 mt-6">
              <p className="text-xl font-semibold">
                Followers: {profile.followers}
              </p>
              <button className="bg-yellow-900 text-yellow-200 px-4 py-2 rounded-full">
                Join me for a coffee ☕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;

export const githubApiLoader = async () => {
  const res = await fetch("https://api.github.com/users/MohitCode17");
  return res.json();
};
