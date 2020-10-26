import React, { useState } from 'react'
// import Topics from './Topics'    

function Form({ topics, setTopics }) {
    const [newTopic, setAddTopics] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTopic = {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: e.target.topic.value,
            id: Date.now(),
        };
        topics.push(newTopic);
        setTopics([...topics]);
    }

    return (
        <>
            <header>
                <h4>Add a topic</h4>
            </header>
            <article>
                <form className="add-topic" onSubmit={handleSubmit}>
                    <input type="text" name="topic" value={newTopic} onChange={(e) => setAddTopics(e.target.value)} placeholder="Type your idea here" />
                    <button type="submit">Submit</button>
                </form>
            </article>
        </>
    )
}
export default Form