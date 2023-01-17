import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCurrentPath = (index) => {
  const location = useLocation();
  const [pathArray, setPathArray] = useState([]);

  useEffect(() => {
    const locationToArray = location.pathname?.split("/");
    setPathArray(locationToArray);
  }, [location.pathname]);

  return pathArray[index];
};

export default useCurrentPath;
