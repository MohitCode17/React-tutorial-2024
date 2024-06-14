import { useGitHubUsers } from "../context";

const User = () => {
  const { user } = useGitHubUsers();
  console.log(user);
  return <div>User</div>;
};

export default User;
