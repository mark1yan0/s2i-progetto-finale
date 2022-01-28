import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useLoading = selector => {
  const { loading, hasErrors } = useSelector(selector);

  const [snackbar, setSnackbar] = useState(false);
  useEffect(() => {
    if (hasErrors) {
      setSnackbar(true);
      setTimeout(() => setSnackbar(false), 2000);
    }
  }, [hasErrors]);

  if (loading === undefined || hasErrors === undefined) {
    console.log('Invalid Selector');
    return;
  } else {
    return [loading, hasErrors, snackbar];
  }
};

export default useLoading;
