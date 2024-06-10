import RenderScreen from "./RenderScreen";

const getIsLoggedIn = () => true;

const App = () => {
  const isLoggedIn = getIsLoggedIn();

  return (
    <div>
      <RenderScreen isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
