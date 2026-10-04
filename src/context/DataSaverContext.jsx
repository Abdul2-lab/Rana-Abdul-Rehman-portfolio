import { createContext, useContext, useEffect, useState } from "react";

const DataSaverContext = createContext();

export function DataSaverProvider({ children }) {
  const [dataSaver, setDataSaver] = useState(() => {
    return localStorage.getItem("dataSaver") === "true";
  });

  useEffect(() => {
    localStorage.setItem("dataSaver", String(dataSaver));
  }, [dataSaver]);

  const toggleDataSaver = () => setDataSaver((d) => !d);

  return (
    <DataSaverContext.Provider value={{ dataSaver, toggleDataSaver }}>
      {children}
    </DataSaverContext.Provider>
  );
}

export function useDataSaver() {
  return useContext(DataSaverContext);
}
