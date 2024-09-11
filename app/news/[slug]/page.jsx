import React from "react";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

const page = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  return (
    <article>
      <header>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          width={300}
          height={200}
        />
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default page;
