import React from 'react'

export default function Form() {
    return (
        <form>
            <label>Add a topic</label>
            <input type="text" placeholder="Type your idea here" />
            <button type="submit">Submit</button>
        </form>
    )
}