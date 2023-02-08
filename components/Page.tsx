import React, { createContext, useState, useContext } from "react";

interface PageContextType {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

interface PageProviderProps {
    children: React.ReactNode;
}

export const PageContext = createContext<PageContextType>({
  currentPage: "",
  setCurrentPage: () => {},
});

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>("projects");

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
