import React from 'react'

function NextTopic(props) {
    const { topic, upvote, downvote, archivedTopic } = props;

    return (
        <>
            <article>
                <button className="archive" onClick={archivedTopic} id={topic.id}></button>
                <h5 className="topic-text" id={topic.id}>{topic.title}</h5>
                <div className="votes">
                    <button className="upvote" onClick={upvote} id={topic.id} ></button>
                    <span className="upvote-number">{topic.upvotes}</span>
                    <button className="downvote" onClick={downvote} id={topic.id}></button>
                    <span className="downvote-number">{topic.downvotes}</span>
                </div>
            </article>
        </>
    )
}
export default NextTopic

