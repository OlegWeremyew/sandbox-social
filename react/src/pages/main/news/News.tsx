import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface News {
  title: string
  description: string
  content: string,
  url: string //"https://www.dallasnews.com/sports/cowboys/2025/03/10/dallas-cowboys-dak-prescott-contract-free-agency/",
  image: string //"https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/PFORAWPW2FHMJMG47XAUSVZNIA.jpg?auth=12d8755992c36fb8830589c60f8e6b9db30fa8f09a6f5c0e673928c4c2aa08a8&height=630&width=1200&focal=1061,1053&quality=80",
  publishedAt: string // "2025-03-10T16:26:48Z",
  source: {
    name: string,
    url: string // "https://www.dallasnews.com"
  }
}

const News: FC = () => {
  //todo site - https://gnews.io
  //e22228eee746da75737fc1d15db54fb7
  // password - "frontend_developer"
  // email - olegweremey1994@mail.ru

  const [news, setNews] = useState<News[]>([] as News[]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=e22228eee746da75737fc1d15db54fb7`);
      console.log('data', data);
      setNews(data.articles);
    })();
  }, []);
  return (
    <div>
      <h1>News</h1>
      {news.map(({ title, image, content, description, publishedAt }: News) => (
        <div key={title}>
          <h3>{title}</h3>
          <figure>
            <img src={image} alt={content} />
            <figcaption>
              {description}
              <br/>
              {content}</figcaption>
          </figure>
          <div>
            <time dateTime={publishedAt}>{publishedAt}</time>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
