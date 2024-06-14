import { useGitHubUsers } from "../context";
import "../styles/User.css";
import UserProfile from "../components/UserProfile";
import NoUserFound from "../components/NoUserFound";

const User = () => {
  const { user } = useGitHubUsers();

  return (
    <section className="container">
      {user ? (
        <UserProfile
          avatar_url={user.avatar_url}
          followers={user.followers}
          html_url={user.html_url}
          name={user.name || user.login}
          public_repos={user.public_repos}
          key={user.id}
        />
      ) : (
        <NoUserFound />
      )}
    </section>
  );
};

export default User;
