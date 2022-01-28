import { useState, useEffect } from "react";

export const useGetData = (url) => {
  const FULL_URL = "https://restcountries.com/v3.1/" + url;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(FULL_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
      })
      .catch((err) => console.log(err))
      .finally(setTimeout(() => setLoading(false), 400));
  }, [FULL_URL]);

  return { data, loading };
};
