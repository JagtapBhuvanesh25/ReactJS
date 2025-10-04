import { useState, useEffect } from "react";

function useCurrInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((err) => { console.error("Error fetching currency:", err) });
  }, [currency]);
  return data;
}

export default useCurrInfo;