import { useState, useEffect } from "react";

export const useGetData = (url) => {
  const FULL_URL = "https://restcountries.com/v3.1/" + url;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData([]);
    fetch(FULL_URL)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((jsonResponse) => {
        setData(jsonResponse);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 500)
      );
  }, [FULL_URL]);

  return { data, loading, error };
};
