import React, { useState } from "react";
import SearchBar from "./SeachBar";
import VideoComment from "./VideoComment";

function FilterableComments(props) {
    const [search, setSearch] = useState("");
    props.comments.filter(comment => comment.user.includes(search))

    return (
        <div id="video-comments-container">
            <SearchBar search={search} onSearchChange={setSearch}/>
            <h2>{comments.length} Comments</h2>
            <VideoComment key={comment.id} comment={comment} />
        </div>
    )
}

export default FilterableComments;