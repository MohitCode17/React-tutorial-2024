import Screen from "./Screen";

const RenderScreen = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>React.com</h1>
      <h3>Ulimate Library</h3>
      <Screen isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default RenderScreen;
