import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface Product {
  id: number,
  title: string
  price: number,
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const Shop: FC = () => {
  //todo Free Store Api - https://fakestoreapi.com/docs

  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    })();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {products.map(({ id, title, description, image, category, price, rating }: Product) => (
        <div key={id}>
          <h3>{title} <span>{price}</span></h3>
          <figure>
            <img src={image} alt={title} title={description} />
            <figcaption>{description}</figcaption>
          </figure>
          <div>
            <p>{category}, count - {rating.count}</p>
            <p>rate - {rating.rate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
