import { useEffect } from 'react';
import { onAuthStateChanged, auth } from './firebase'; // Adjust path as needed

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  // ... rest of your component
}