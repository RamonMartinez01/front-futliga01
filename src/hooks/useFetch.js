import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialUrl) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(initialUrl);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialUrl]);

  return { data, loading, error };
};

export default useFetch;