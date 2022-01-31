import { useState, useEffect } from "react";

export const useGetData = (url) => {
  const FULL_URL = "https://restcountries.com/v3.1/" + url;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setData([]);
    fetch(FULL_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
      })
      .catch((err) => setError(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 400)
      );
  }, [FULL_URL]);

  return { data, loading, error };
};
