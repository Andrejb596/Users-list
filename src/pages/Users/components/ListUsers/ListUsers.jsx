import { useState, useEffect } from 'react';
import axios from 'axios';

const src = 'https://jsonplaceholder.typicode.com/users';

export const ListUsers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(src).then(data => {
      setItems(data.data);
    });
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
