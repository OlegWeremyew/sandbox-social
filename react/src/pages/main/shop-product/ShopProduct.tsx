import axios from 'axios';
import { type FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ShopProduct.module.scss';

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

const ShopProduct: FC = () => {
  //todo Free Store Api - https://fakestoreapi.com/docs

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({} as Product);
  const [isLoading, setIsLoading] = useState(true);

  const controller = new AbortController();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`, {
        signal: controller.signal,
      });
      setProduct(data);
      setIsLoading(false);
    })();

    () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.productItemSkeleton}>
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonDescription}></div>
          <div className={styles.skeletonPrice}></div>
        </div>
      ) : (
        <div key={id} className={styles.productItem}>
          <h3 className={styles.productTitle}>
            {product.title} <span className={styles.productPrice}>${product.price}</span>
          </h3>
          <figure className={styles.productImageWrapper}>
            <img
              className={styles.productImage}
              src={product.image}
              alt={product.title}
              title={product.description}
            />
            <figcaption className={styles.productDescription}>{product.description}</figcaption>
          </figure>

          <div className={styles.productDetails}>
            <p className={styles.productCategory}>
              {product.category}, count - {product.rating.count}{' '}
              <p className={styles.productRating}>rate - {product.rating.rate}</p>
            </p>
          </div>
          <div>
            <button>add to basket</button>
            <button>comments</button>
            <div>
              <p>set rate</p>
              <button onClick={() => console.log(1)}>rate 1</button>
              <button onClick={() => console.log(2)}>rate 2</button>
              <button onClick={() => console.log(3)}>rate 3</button>
              <button onClick={() => console.log(4)}>rate 4</button>
              <button onClick={() => console.log(5)}>rate 5</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopProduct;
