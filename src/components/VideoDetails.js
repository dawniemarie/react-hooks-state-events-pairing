import { useState } from "react";

function VideoDetails({ title, upvotes, downvotes, viewCount, createdAt }) {
    const [upVotes, setUpvotes] = useState(upvotes)
    const [downVotes, setDownvotes] = useState(downvotes)
    const [commentsToggle, setCommentsToggle] = useState(true);

    const handleUpVotes = () => {
        setUpvotes(upVotes + 1)
    }
    const handleDownVotes = () => {
        setDownvotes(downVotes + 1)
    }
    const handleCommentsToggle = () => {
        let commentsContainer = document.getElementById('video-comments-container');
        commentsContainer.classList.toggle("hidden");
        setCommentsToggle(!commentsToggle)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{viewCount} Views | Uploaded {createdAt}</p>
            <button onClick={handleUpVotes}>{upVotes} 👍</button>
            <button onClick={handleDownVotes}>{downVotes} 👎</button>
            <br></br>
            <br></br>
            <button onClick={handleCommentsToggle}>{commentsToggle ? "Hide Comments" : "Show Comments"}</button>

        </div>
    )
}

export default VideoDetails;