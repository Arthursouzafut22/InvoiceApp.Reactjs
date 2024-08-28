import SideBar from "./Components/Sidebar/Sidebar";
import GlobalPayment from "../src/Hooks/UseContextPayment";
import Globalrouting from "./Routes";

const App = () => {
  return (
    <>
      <GlobalPayment>
        <SideBar />
        <Globalrouting />
      </GlobalPayment>
    </>
  );
};

export default App;
