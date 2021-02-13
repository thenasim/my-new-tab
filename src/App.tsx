import React from "react";
import MainViewPart from "./parts/MainView.part";
import SettingsParts from "./parts/Settings.part";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <MainViewPart />
      <SettingsParts />
    </div>
  );
}

export default App;
