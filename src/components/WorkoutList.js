import React from 'react';
import './WorkoutList.css'

const WorkoutList = ({ workouts }) => {
  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout.id}>
          <p>Exercises: {workout.exercise}</p>
          {workout.duration && <p>Duration: {workout.duration} min</p>}
          {workout.reps && <p>Reps: {workout.reps}</p>}
          {workout.calories && <p>Calories Burned: {workout.calories}</p>}
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;