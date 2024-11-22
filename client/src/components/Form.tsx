import './style.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs

  };

  return (
    <div className="container text-center">
      <h1>
        Hello
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input  name="title" type="text" placeholder="title" />
        <input  name="author"  type="text" placeholder="author" />
        <input  name="rating"  type="text" placeholder="rating" />
        <input  name="review"  type="text" placeholder="review" />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default Form;