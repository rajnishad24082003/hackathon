import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [countryCode, setCountryCode] = useState("in"); // Set the default country code

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response1 = await axios.get(
          `https://newsapi.org/v2/top-headlines?q=cyber%20crime&country=in&apiKey=a59c10d94bfc40768301c7c02aca788f`
        );
        const response2 = await axios.get(
          `https://newsapi.org/v2/top-headlines?q=cyber&country=in&apiKey=a59c10d94bfc40768301c7c02aca788f`
        );
        const response3 = await axios.get(
          `https://newsapi.org/v2/top-headlines?q=cyber%20attacks&country=in&apiKey=a59c10d94bfc40768301c7c02aca788f`
        );
        setArticles([response1, response2, response3]);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [countryCode]);

  return <div>{console.log(articles)}</div>;
};

export default NewsApp;
