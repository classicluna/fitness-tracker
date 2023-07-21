import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './WorkoutForm.css';

const WorkoutForm = ({ addWorkout }) => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [reps, setReps] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exercise || (!duration && !reps)) return;

    const newWorkout = {
      id: uuidv4(),
      exercise,
      duration: duration ? Number(duration) : null,
      reps: reps ? Number(reps) : null,
      calories: calories ? Number(calories) : null
    };

    addWorkout(newWorkout);
    setExercise('');
    setDuration('');
    setReps('');
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit} className='workout-form'>
      <input
        type="text"
        placeholder="exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories Burned (optional)"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;