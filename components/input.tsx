import { ChangeEventHandler, MouseEventHandler } from "react";

const Input = (props: {
  handleSearch: MouseEventHandler<HTMLButtonElement>;
  idOne: ChangeEventHandler<HTMLInputElement>;
  idTwo: ChangeEventHandler<HTMLInputElement>;
  ErrorOne: string | undefined;
  ErrorTwo: string | undefined;
}) => {
  return (
    <main className="input-section">
      <section className="form-section">
        <label htmlFor="actorActressOne">Actor/Actress One:</label>
        <input
          type="text"
          id="actorActressOne"
          className={props.ErrorOne}
          onChange={props.idOne}
        />
        <label htmlFor="actorActressTwo">Actor/Actress Two:</label>
        <input
          type="text"
          id="actorActressOne"
          className={props.ErrorTwo}
          onChange={props.idTwo}
        />
      </section>
      <button
        onClick={props.handleSearch}
        type="submit"
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Find Film(s)
      </button>
    </main>
  );
};
export default Input;
