import { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [covData, setCovData] = useState(null);
  const [nationalCovData, setNationalCovData] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);

  return (
    <DataContext.Provider
      value={{
        covData,
        setCovData,
        nationalCovData,
        setNationalCovData,
        selectedProvince,
        setSelectedProvince,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
