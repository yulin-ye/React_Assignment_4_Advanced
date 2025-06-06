import { useEffect, useState } from 'react';
import LecturerCard from './LecturerCard';
import { fetchLecturers } from './util/api';
import './App.css';

function App() {
  const [lecturers, setLecturers] = useState(null);

  useEffect(() => {
    const loadLecturers = async () => {
      try {
        const response = await fetchLecturers()
        setLecturers(response);
      } catch (e) {
        console.log(e)
      }
    };

    loadLecturers();
  }, []);

  return (
    <div className="lecturer-cards-wrapper">
        {lecturers?.map((lecturer, index) => (
          <LecturerCard key={`${new Date()}-${index}`} lecturer={lecturer} />
        ))}
    </div>
  );
}

export default App;