import { useEffect } from "react";
import axios from 'axios';

export const FetchData = (url, setData, setLoading, setError) => {

    useEffect(() => {
        const getBreweries = async () => {
          try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getBreweries();
      }, [setData, setError, setLoading, url]);
}

