import axios from 'axios';
import { type FC, useEffect, useState } from 'react';
import { MainContentWrapper } from '@/components';
import styles from './Shop.module.scss'; // Импортируем стили

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Shop: FC = () => {
  //todo Free Store Api - https://fakestoreapi.com/docs

  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <MainContentWrapper title="Shop">
      <div className={styles.productList}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.productItemSkeleton}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonDescription}></div>
                <div className={styles.skeletonPrice}></div>
              </div>
            ))
          : products.map(({ id, title, description, image, category, price, rating }: Product) => (
              <div key={id} className={styles.productItem}>
                <h3 className={styles.productTitle}>
                  {title} <span className={styles.productPrice}>${price}</span>
                </h3>
                <figure className={styles.productImageWrapper}>
                  <img
                    className={styles.productImage}
                    src={image}
                    alt={title}
                    title={description}
                  />
                  <figcaption className={styles.productDescription}>{description}</figcaption>
                </figure>
                <div className={styles.productDetails}>
                  <p className={styles.productCategory}>
                    {category}, count - {rating.count}
                  </p>
                  <p className={styles.productRating}>rate - {rating.rate}</p>
                </div>
              </div>
            ))}
      </div>
    </MainContentWrapper>
  );
};

export default Shop;
