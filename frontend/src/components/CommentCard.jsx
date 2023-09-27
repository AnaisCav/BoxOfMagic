import PropTypes from "prop-types";

function CommentCard({ comment }) {
  return (
    <div>
      <p>{comment.content}</p>
      <p>{comment.product_id}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    product_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;
