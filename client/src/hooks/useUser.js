import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Allows to know if the user is logged in or not at any given moment
const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    /* 
      getAuth is a function which returns FirebaseAuth object to manage user accounts and
      credentials. onAuthStateChanged adds an observer for changes to the user's sign-in state
      */
    const unsubscribe = onAuthStateChanged(getAuth(), (data) => {
      setUser(data);
    });

    // The effect returns the unsubscribe callback from onAuthStateChanged,
    // ensuring that we don't run in any memory leaks.
    return unsubscribe;
  }, []);

  return { user };
};

export default useUser;
