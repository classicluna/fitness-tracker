import React, { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  }
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App;
