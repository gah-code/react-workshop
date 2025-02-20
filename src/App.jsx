import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

import { useState } from 'react';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const style = {};

  return (
    <div>
      <Steps />
      <div className='card'>
        <SkillList />
      </div>
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <button> &times;</button>
      <div className='steps'>
        <div className='numbers'>
          {/* is step greater or equal to one ? if so should be the string of active if not nothing   */}
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>
        <p className='message'>
          Step {step}: {messages[step - 1]}
          {/* {test.name} */}
        </p>
        <div className='buttons'>
          {/* HANDLE EVENTS THE REACT WAY */}
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
            Previous
          </button>
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

///

function Skill({ skill, color, level }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
}

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
