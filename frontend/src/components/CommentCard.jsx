import PropTypes from "prop-types";

function CommentCard({ comment, product }) {
  return (
    <div>
      {product.house === "" && (
        <div className="md:max-w-[20rem] md:border-brown md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">{comment.author}</p>
            <p>{comment.comment_title}</p>
            <div className="border-brown border-b-2 my-4" />

            <p className="text-justify md:text-left">{comment.content}</p>
          </div>
        </div>
      )}
      {product.house === "Griffondor" && (
        <div className="md:w-72 md:border-lightRedGrif md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">{comment.author}</p>
            <p>{comment.comment_title}</p>
            <div className="border-lightRedGrif border-b-2 my-4" />

            <p className="text-justify md:text-left">{comment.content}</p>
          </div>
        </div>
      )}
      {product.house === "Serpentard" && (
        <div className="md:w-72 md:border-lightGreenSerp md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">{comment.author}</p>
            <p>{comment.comment_title}</p>
            <div className="border-lightGreenSerp border-b-2 my-4" />
            <p className="text-justify md:text-left">{comment.content}</p>
          </div>
        </div>
      )}
      {product.house === "Serdaigle" && (
        <div className="md:w-72 md:border-lightBlueSerd md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">{comment.author}</p>
            <p>{comment.comment_title}</p>
            <div className="border-lightBlueSerd border-b-2 my-4" />

            <p className="text-justify md:text-left">{comment.content}</p>
          </div>
        </div>
      )}
      {product.house === "Poufsouffle" && (
        <div className="md:w-72 md:border-yellowPouff md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">{comment.author}</p>
            <p>{comment.comment_title}</p>
            <div className="border-yellowPouff border-b-2 my-4" />

            <p className="text-justify md:text-left">{comment.content}</p>
          </div>
        </div>
      )}
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
  product: PropTypes.shape({
    house: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;
