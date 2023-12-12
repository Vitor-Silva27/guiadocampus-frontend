import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://guiadocampus-api.onrender.com/" + url
        );

        if (!response.ok) {
          throw new Error(
            `Erro na requisição: ${response.status} ${response.statusText}`
          );
        }

        const responseData: T = await response.json();
        setData(responseData);
      } catch (error) {
        setError(`Erro na requisição`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
