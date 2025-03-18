import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { MainContentWrapper } from '@/components';
import styles from './Users.module.scss';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: 28;
  gender: string;
  email: string; // "emily.johnson@x.dummyjson.com"
  phone: string; // "+81 965-431-3024"
  username: string;
  password: string;
  birthDate: string; // "1996-5-30"
  image: string;
  bloodGroup: string; // "O-"
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string; //"42.48.100.32"
  address: {
    address: string; //"626 Main Street",
    city: string;
    state: string;
    stateCode: string; // "MS",
    postalCode: string;
    coordinates: {
      lat: number; //-77.16213,
      lng: number; //-92.084824
    };
    country: string; // "United States"
  };
  macAddress: string; //"47:fa:41:18:ec:eb",
  university: string; // "University of Wisconsin--Madison",
  bank: {
    cardExpire: string; //"03/26",
    cardNumber: string; //"9289760655481815",
    cardType: string; //"Elo",
    currency: string; // "CNY",
    iban: string; // "YPUXISOBI7TTHPK2BR3HAIXL"
  };
  company: {
    department: string; //"Engineering",
    name: string;
    title: string; //"Sales Manager",
    address: {
      address: string; //"263 Tenth Street",
      city: string;
      state: string;
      stateCode: string; //"WI",
      postalCode: string;
      coordinates: {
        lat: number; //-77.16213,
        lng: number; //-92.084824
      };
      country: string;
    };
  };
  ein: string; // "977-175",
  ssn: string; //"900-590-289",
  userAgent: string; //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  crypto: {
    coin: string; //"Bitcoin",
    wallet: string; //"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: string; //"Ethereum (ERC20)"
  };
  role: string; //"admin"
}

const Users: FC = () => {
  //todo Free User Api - https://dummyjson.com/users

  const [users, setUsers] = useState<User[]>([] as User[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://dummyjson.com/users');
      setUsers(data.users);
      setIsLoading(false);
    })();
  }, []);

  return (
    <MainContentWrapper title={'Users'}>
      <div className={styles.userList}>
        {!isLoading
          ? // Скелетон отображается, пока данные загружаются
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.userItemSkeleton}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonName}></div>
                <div className={styles.skeletonInfo}></div>
                <div className={styles.skeletonAddress}></div>
              </div>
            ))
          : // Реальные карточки пользователей
            users.map(
              ({ id, firstName, lastName, maidenName, image, age, birthDate, address }: User) => (
                <div key={id} className={styles.userItem}>
                  <h3 className={styles.userName}>
                    {firstName} {lastName} {maidenName}
                  </h3>
                  <figure className={styles.userImageWrapper}>
                    <img
                      className={styles.userImage}
                      src={image}
                      alt={`${firstName} ${lastName}`}
                    />
                    <figcaption className={styles.userInfo}>
                      age - {age}, birthDate - {new Date(birthDate).toLocaleDateString('ru')}
                    </figcaption>
                  </figure>
                  <div className={styles.userAddress}>
                    <address>
                      address - {address.address}, city - {address.city}, state - {address.state}
                    </address>
                  </div>
                </div>
              )
            )}
      </div>
    </MainContentWrapper>
  );
};

export default Users;
