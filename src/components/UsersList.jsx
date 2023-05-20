import axios, { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'


const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios.get('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setErr(err.message)
        setLoading(false);
      })

    return () => controller.abort()
  }, [])


  return (
    <div>
      {err && <p>{err}</p>}
      {isLoading && <div className='spinner-outline'></div>}
      <ul>
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

export default UsersList;
