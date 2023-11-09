import React, { useState, useEffect } from "react";

function Teachers() {
  const [users, setUsers] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users")  
      .then((response) => { 
        if (response.ok) { 
          return response.json();
        } else { 
          throw response;
        }
      })
      .then((data) => { 
        setUsers(data);
      })
      .catch((error) => { 
        setError(error);
      })
      .finally(() => { 
        setLoading(false);
      });
  }, []);  

  if (loading) { 
    return <div>Loading...</div>;
  }

  if (error) { 
    return <div>Error!</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
