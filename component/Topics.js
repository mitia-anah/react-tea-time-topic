import React, { useState, useEffect } from 'react'
import NextTopic from './TopicLists'
import PastTopic from './PastTopic'
import Form from './Form'

function Topics() {
    const API_URL = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

    const [topics, setTopics] = useState([])
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)
    const [removeTopic, setRemoveTopic] = useState('')
    const [archive, setArchive] = useState('')

    useEffect(() => {
        const getTopics = async () => {
            const res = await fetch(API_URL);
            const data = await res.json();
            setTopics(data)
        }
        getTopics()
    }, [])

    function upvotes(e) {
        const id = e.target.id;
        const topicToUpvote = topics.find(topic => topic.id == id);
        let updateVote = topicToUpvote.upvotes++;
        setUpvote(updateVote);
    };

    function downvotes(e) {
        const id = e.target.id;
        const topicToDownvote = topics.find(topic => topic.id == id);
        let minusVote = topicToDownvote.downvotes++;
        setDownvote(minusVote);
    };

    function deleteTopic(id, topics) {
        topics.forEach((topic, index) => {
            if (topic.id === id) {
                topics.splice(index, 1);
            }
        });
        setRemoveTopic(topics);
    }

    const archiveTopic = (e) => {
        const id = e.target.id
        const topicToArchive = topics.find(topic => topic.id == id);
        let archivedTopic = topicToArchive.discussedOn = new Date();
        setArchive(archivedTopic);
    };


    return (
        <>
            <Form />
            <section>
                <h4>Next Topic</h4>
                {topics
                    .filter(topic => !topic.discussedOn)
                    .sort((a, b) => {
                        const topicA = a.upvotes - a.downvotes;
                        const topicB = b.upvotes - b.downvotes;
                        return topicB - topicA;
                    }).map(data => <NextTopic
                        topic={data}
                        key={data.id}
                        upvote={upvotes}
                        downvote={downvotes}
                        archivedTopic={archiveTopic}
                    />)
                }
            </section>
            <section>
                <h4>Past Topic</h4>
                {topics
                    .filter(topic => topic.discussedOn)
                    .map(topic =>
                        <PastTopic
                            topic={topic}
                            key={topic.id}
                            removeTopic={deleteTopic} />
                    )
                }
            </section>
        </>
    )
}

export default Topics