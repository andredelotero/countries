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
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.status === undefined) {
          setData(jsonResponse);
          setError(null);
        } else {
          setError(jsonResponse.status);
        }
      })
      .catch((err) => setError(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 500)
      );
  }, [FULL_URL]);

  return { data, loading, error };
};
