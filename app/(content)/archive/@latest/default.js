import React from "react";
import { getLatestNews } from "../../../../lib/news"
import NewsList from "../../../../components/news-list"

const Latest = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} /> 
    </>
  );
};

export default Latest;
