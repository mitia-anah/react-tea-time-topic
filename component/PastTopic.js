import React from 'react'

function PastTopic(props) {
    const { topic, removeTopic } = props;
    const discussedOnDate = new Date(Number(topic.discussedOn));
    return (
        <article>
            <button className="delete" onClick={removeTopic}></button>
            <h5 className="topic-text" >{topic.title}</h5>
            <p>Discussed on {discussedOnDate.toLocaleDateString()}</p>
        </article >
    )
}
export default PastTopic