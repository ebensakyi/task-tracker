import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Go shopping", day: "January 3rd 2021", reminder: true },
    { id: 2, text: "Go jogging", day: "February 3rd 2021", reminder: false },
    { id: 3, text: "Go swimming", day: "March 3rd 2021", reminder: false },
    { id: 4, text: "Go shoppfishinging", day: "June 3rd 2021", reminder: true },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
