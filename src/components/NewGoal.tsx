import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    new FormData(event.currentTarget);
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input
          id="goal"
          type="text"
          name="goal"
          ref={goal}
          required
        />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} required />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
