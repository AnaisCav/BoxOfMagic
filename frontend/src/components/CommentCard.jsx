import PropTypes from "prop-types";

function CommentCard({ comment }) {
  return (
    <div>
      <p>{comment.author}</p>
      <p>{comment.comment_title}</p>
      <p>{comment.content}</p>
      <p>{comment.comment_id}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    comment_id: PropTypes.number,
    comment_title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;
