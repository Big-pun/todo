// Todo create the form component
function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        //reset the form
        event.target.reset();
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    placeholder="Write your next task here"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}
// Todo export the Form component
export default Form;