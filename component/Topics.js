import React, { useState, useEffect } from 'react'
import { TopicLists } from './TopicLists'


export default function Topics() {
    const API_URL = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

    const [topics, setTopics] = useState([])

    useEffect(() => {
        const getTopics = async () => {
            const res = await fetch(API_URL);
            const data = await res.json();
            setTopics(data)
        }
        getTopics()
    }, [])

    return (
        <div>
            {topics.map(data =>
                <TopicLists topic={data} key={data.id} />
            )}
        </div>
    )
}