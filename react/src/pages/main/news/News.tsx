import { type FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './News.module.scss';
import { MainContentWrapper } from '@/components/pages/mainContentWrapper';

interface News {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

//todo site - https://gnews.io
//e22228eee746da75737fc1d15db54fb7
// password - "frontend_developer"
// email - olegweremey1994@mail.ru

const News: FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://gnews.io/api/v4/search?apikey=e22228eee746da75737fc1d15db54fb7`,
        {
          params: {
            q: 'example',
            lang: 'en',
            country: 'us',
            max: 10,
            page: 2,
          },
        }
      );
      setNews(data.articles);
      setLoading(false);
    })();
  }, []);

  return (
    <MainContentWrapper title={'World News'}>
      <div className={styles.newsContainer}>
        {loading ? (
          // Пока данные грузятся, показываем скелетон
          <div className={styles.skeletonWrapper}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.skeletonNewsItem}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonDate}></div>
              </div>
            ))}
          </div>
        ) : (
          news.map(({ title, image, content, description, publishedAt, source }: News) => (
            <div key={title} className={styles.newsItem}>
              <h3>{title}</h3>
              <figure>
                <img src={image} alt={content} />
                <figcaption>
                  {description}
                  <hr />
                  {content}
                </figcaption>
              </figure>
              <p>
                <span>
                  Source:{' '}
                  <a href={source.url} target="_blank">
                    {source.name}
                  </a>
                </span>
                <span className={styles.timeBlock}>
                  Posted:{' '}
                  <time dateTime={publishedAt}>{new Date(publishedAt).toLocaleString('ru')}</time>
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </MainContentWrapper>
  );
};

export default News;
