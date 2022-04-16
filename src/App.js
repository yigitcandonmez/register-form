import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";
import { SignUp } from "./pages";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App theme--${theme}`}>
      <SignUp />
    </div>
  );
}

export default App;
