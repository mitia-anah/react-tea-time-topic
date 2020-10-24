import React from 'react'

function Form(props) {
    const { handleSubmit } = props;
    return (
        <>
            <header>
                <h4>Add a topic</h4>
            </header>
            <article>
                <form className="add-topic">
                    <input type="text" name="topic" onChange={handleSubmit} placeholder="Type your idea here" />
                    <button type="submit" onSubmit={handleSubmit}>Submit</button>
                </form>
            </article>
        </>
    )
}
export default Form