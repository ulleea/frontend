import "./Comments.scss";

export function Comment(props) {
    const { comment } = props;

    return <div className="comment">
        <div className="author">{comment.author}</div>
        <div className="text">{comment.text}</div>
    </div>
}