import React, { createContext, useState } from "react";
import SocialDashboard from "./pages/SocialDashboard";
import { ContextTypes } from "./type/ContextTypes.type";

export const SwitchContext = createContext<ContextTypes>({
  mode: "",
  setMode(){}
});
;

export default function App() {
  const [mode, setMode] = useState("light");
  
  return (
    <SwitchContext.Provider value={{mode, setMode}}>
      <div className="App">
        <SocialDashboard />
      </div>
    </SwitchContext.Provider>
  );
}
