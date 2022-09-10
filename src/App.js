import React from 'react';
import './style.css';
import { useEarthoOne } from '@eartho/one-client-react';
import AddIdea from './component/Ideas/AddIdea';
export default function App() {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  if (isConnected) {
    console.log(user.user);
    return (
      <div>
        <h1>Hello {user.user.displayName}</h1>
        <img src={user.user.photoURL} width={50} height={50} />
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <AddIdea />
      </div>
    );
  } else {
    return (
      <button
        className="btn btn-outline-success"
        id="login"
        onClick={() => connectWithPopup({ access_id: 'gHnGmdqszGAjvgW1GPmf' })}
      >
        Log in
      </button>
    );
  }
}
