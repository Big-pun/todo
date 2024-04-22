// Todo create function component called TODOHero
function TODOHero({ todos_completed, total_todos }) {
    return (
        <section className="todohero_section">
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}
// Todo export the TODOHero component

export default TODOHero;

