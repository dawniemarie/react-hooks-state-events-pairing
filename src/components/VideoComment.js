import { useState } from "react";

function VideoComment(props) {
    const [commentUpVote, setCommentUpVote] = useState(0);
    const [commentDownVote, setCommentDownVote] = useState(0);

    // handles for comment up and down vote buttons
    function handleCommentUpVote() {
        setCommentUpVote(commentUpVote + 1)
    }
    function handleCommentDownVote() {
        setCommentDownVote(commentDownVote + 1)
    }

    return (
        <div>
            <h3>{props.comment.user}</h3>
            <p><button onClick={handleCommentUpVote}>{commentUpVote} 👍</button> {props.comment.comment} <button onClick={handleCommentDownVote}>{commentDownVote} 👎</button></p>
        </div>
    )
}

export default VideoComment;