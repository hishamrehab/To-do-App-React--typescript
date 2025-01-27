import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(gaol: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: gaol,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of Goals" }}>
        <h1>Your Course Goals</h1>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList
          goals={goals}
          onDeleteGoal={handleDeleteGoal}
        />
      </Header>
    </main>
  );
}
