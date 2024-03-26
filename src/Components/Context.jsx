import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const GlobeContext = createContext();
export const Contexts = () => useContext(GlobeContext);

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [classs, setclass] = useState(false);
  const [classsone, setclassone] = useState(false);
  const [classstwo, setclasstwo] = useState(false);

  const Classlist = () => {
    setclass(!classs);
  };
  const Classlistone = () => {
    setclassone(!classsone);
  };
  const Classlisttwo = () => {
    setclasstwo(!classstwo);
  };
  return (
    <GlobeContext.Provider
      value={{
        classs,
        Classlist,
        classsone,
        classstwo,
        Classlistone,
        Classlisttwo,
      }}
    >
      {" "}
      {children}{" "}
    </GlobeContext.Provider>
  );
};

export default Context;
