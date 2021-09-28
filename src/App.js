import React, {useState} from "react";
import Profile from "./components/Profile";
import Cards from "./components/Cards";

function App() {
  const [tab, setTab] = useState('weekly')
  const changeTab = (e) => {
    setTab(e.target.id)
  }
  return (
    <section>
      <Profile changeTab={changeTab} tab={tab}/>
      <Cards tab={tab}/>
    </section>
  );
}

export default App;
