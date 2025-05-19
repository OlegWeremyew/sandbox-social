import { type FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MainContentWrapper } from '@/components';
import styles from './Shop.module.scss';

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

  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [isLoading, setIsLoading] = useState(true);

  const goToProduct = useCallback(
    (id: number): void => {
      navigate(`/shop/${id}`);
    },
    [navigate]
  );

  const controller = new AbortController();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products', {
        signal: controller.signal,
      });
      setProducts(data);
      setIsLoading(false);
    })();

    () => {
      controller.abort();
    };
  }, []);

  return (
    <MainContentWrapper title="ShopProduct">
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
              <div key={id} className={styles.productItem} onClick={() => goToProduct(id)}>
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
