import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
// import StepsComponent from '../react-state/steps/App';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
      {/* <StepsComponent /> */}
    </div>
  );
}

//

export default App;

////////// WHAT IS STATE MANAGEMENT?

///////// DECLARATIVE: With state, we view UI as a reflection of data changing over time, and we describe that refection of data using state, event handlers, and JSX.

// For data that should not trigger component re-renders, don’t use state. Use a regular variable instead. This is a common beginner mistake

// STATE = Internal data owned by component
// PROPS = External data, owned by parent component

// State updates create a component re-render, and receiving new props also casese a re-render

// WHAT IS STATE? - Data that a component can hold over time, necessary for information that it needs to rememeber throughtout the apps lifecycle, updating componenet state triggers React to re-render the component.

/////////////////////////////////////////////////////

/// PROPS: used to pass data from parent components to child components. Used to configure and customize components, with props parents components control how child components look and work. PROPS ARE READ-ONLY, THEY ARE IMMUTEABLE.

/// ONE WAY DATA FLOW: Makes app more predictable and easier to understand.
