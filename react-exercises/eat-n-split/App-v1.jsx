import React, { useState } from 'react';

import './style.css';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default function EatApp() {
  // const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        {showAddFriend && <FormAddFriend />}{' '}
        <Button onClick={handleShowAddFriend}> Add friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList({}) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>button</Button>
    </li>
  );
}

// function FriendsList({}) {
//   const friends = initialFriends;
//   return (
//     <ul>
//       {friends.map((friend) => (
//         <Friend friend={friend} key={friend.id} />
//       ))}
//     </ul>
//   );
// }

// function Friend({ friend }) {
//   return <li>{friend.name}</li>;
// }

function FormAddFriend() {
  return (
    <form action='' className='form-add-friend'>
      <label htmlFor=''>👯‍♀️Friend name</label>
      <input type='text' />
      <label htmlFor=''>Image URL</label>
      <input type='text' />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>
      <label htmlFor=''>Bill value</label>
      <input type='text' name='' id='' />

      <label htmlFor=''>Your expense</label>
      <input type='text' name='' id='' />

      <label htmlFor=''> X's expense</label>
      <input type='text' name='' id='' />

      <label htmlFor=''>Who is paying the bill</label>
      <select name='' id=''>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Spilt Bill</Button>
    </form>
  );
}
