import VideoComment from "./VideoComment";

function VideoComments(props) {
    function showComments() {
        return props.comments.map(comment => {
            return (
                <VideoComment key={comment.id} comment={comment} />
            )

        })
    }

    return (
        <div id="video-comments-container">
            <hr></hr>
            <h2>{props.comments.length} Comments</h2>
            {showComments()}
        </div>
    )
}

export default VideoComments;