import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  'id': number
  'firstName': string
  'lastName': string
  'maidenName': string
  'age': 28
  'gender': string
  'email': string // "emily.johnson@x.dummyjson.com"
  'phone': string // "+81 965-431-3024"
  'username': string
  'password': string
  'birthDate': string // "1996-5-30"
  'image': string
  'bloodGroup': string // "O-"
  'height': number
  'weight': number
  'eyeColor': string
  'hair': {
    'color': string
    'type': string
  },
  'ip': string //"42.48.100.32"
  'address': {
    'address': string //"626 Main Street",
    'city': string,
    'state': string,
    'stateCode': string // "MS",
    'postalCode': string,
    'coordinates': {
      'lat': number //-77.16213,
      'lng': number //-92.084824
    }
    'country': string // "United States"
  }
  'macAddress': string //"47:fa:41:18:ec:eb",
  'university': string // "University of Wisconsin--Madison",
  'bank': {
    'cardExpire': string //"03/26",
    'cardNumber': string //"9289760655481815",
    'cardType': string //"Elo",
    'currency': string // "CNY",
    'iban': string // "YPUXISOBI7TTHPK2BR3HAIXL"
  },
  'company': {
    'department': string //"Engineering",
    'name': string,
    'title': string //"Sales Manager",
    'address': {
      'address': string //"263 Tenth Street",
      'city': string,
      'state': string,
      'stateCode': string //"WI",
      'postalCode': string,
      'coordinates': {
        'lat': number //-77.16213,
        'lng': number //-92.084824
      },
      'country': string
    }
  },
  'ein': string // "977-175",
  'ssn': string //"900-590-289",
  'userAgent': string //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  'crypto': {
    'coin': string //"Bitcoin",
    'wallet': string //"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    'network': string //"Ethereum (ERC20)"
  },
  'role': string //"admin"
}


const Users: FC = () => {
  //todo Free User Api - https://dummyjson.com/users

  const [users, setUsers] = useState<User[]>([] as User[]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://dummyjson.com/users');
      setUsers(data.users);
    })();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(({ id, firstName, lastName, maidenName, image, age,birthDate, address }: User) => (
        <div key={id}>
          <h3>{firstName} {lastName} {maidenName}</h3>
          <figure>
            <img src={image} alt={`${firstName} ${lastName}`} />
            <figcaption>age - {age}, birthDate - {birthDate}</figcaption>
          </figure>
          <div>
            <address>address - {address.address}, city - {address.city}, state - {address.state}</address>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Users;
