import React, { useState, useEffect } from "react";
import RatingsChart from "./components/RatingsChart";
import "./App.css";

const App = () => {
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    fetch("/public/data.json")
      .then(response => response.json())
      .then(data => {
        if (data.history.length > 0) {
          setRatings(data.history[data.history.length - 1].ratings);
        }
      });
  }, []);

  return (
    <div className="container">
      <h1>Suivi des Notes des Applications</h1>
      <div className="ratings">
        {ratings ? (
          <>
            <p>Note Android : {ratings.android.toFixed(2)}</p>
            <p>Note iOS : {ratings.ios.toFixed(2)}</p>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </div>
      <RatingsChart />
    </div>
  );
};

export default App;
