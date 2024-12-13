import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateUser } from '../store/actions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UpdateButton = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.user);

  const handleFetch = () => {
    dispatch(fetchUser('USER_ID')); // Replace 'USER_ID' with actual ID
  };

  const handleUpdate = () => {
    dispatch(updateUser({ userId: 'USER_ID', userData: { name: 'New Name' } }));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleFetch} disabled={loading}>
        Fetch User
      </Button>
      <Button variant="contained" color="secondary" onClick={handleUpdate} disabled={loading}>
        Update User
      </Button>

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Error: {error}</Typography>}
      {data && <Typography>User Data: {JSON.stringify(data)}</Typography>}
    </div>
  );
};

export default UpdateButton;