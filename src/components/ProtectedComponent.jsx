import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthContext';

const ProtectedComponent = () => {
  const { isAuthenticated, token } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && token) {
        try {
          const response = await axios.get('https://your-api-endpoint/protected', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, token]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Protected Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProtectedComponent;
