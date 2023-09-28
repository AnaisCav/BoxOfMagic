import PropTypes from "prop-types";

import expressAPI from "../services/expressAPI";

import corbeille from "../assets/images/icones/corbeille.png";

function CommentCard({
  comment,
  product,
  comments,
  setComments,
  isUpdated,
  setIsUpdated,
}) {
  const handleDelete = () => {
    expressAPI
      .delete(`/comments/${comment.comment_id}`)
      .then((res) => {
        if (res.status === 204) {
          setComments(
            comments.filter((item) => item.id !== comment.comment_id)
          );
          setIsUpdated(!isUpdated);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full">
      {product.house === "" && (
        <div className="flex flex-col gap-3 md:border-brown md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex justify-between items-start ">
            <div>
              <p className="font-bold text-xl mb-2">{comment.author}</p>
              <p>{comment.comment_title}</p>
            </div>
            <button type="button" onClick={handleDelete}>
              <img src={corbeille} alt="Icône poubelle" className="h-6" />
            </button>
          </div>
          <div className="border-brown border-b-2 my-4" />

          <p className="text-justify md:text-left">{comment.content}</p>
        </div>
      )}
      {product.house === "Griffondor" && (
        <div className="flex flex-col gap-3 md:border-redGrif md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex justify-between items-start ">
            <div>
              <p className="font-bold text-xl mb-2">{comment.author}</p>
              <p>{comment.comment_title}</p>
            </div>
            <button type="button" onClick={handleDelete}>
              <img src={corbeille} alt="Icône poubelle" className="h-6" />
            </button>
          </div>
          <div className="border-lightRedGrif border-b-2 my-4" />

          <p className="text-justify md:text-left">{comment.content}</p>
        </div>
      )}
      {product.house === "Serpentard" && (
        <div className="flex flex-col gap-3 md:border-greenSerp md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex justify-between items-start ">
            <div>
              <p className="font-bold text-xl mb-2">{comment.author}</p>
              <p>{comment.comment_title}</p>
            </div>
            <button type="button" onClick={handleDelete}>
              <img src={corbeille} alt="Icône poubelle" className="h-6" />
            </button>
          </div>
          <div className="border-lightGreenSerp border-b-2 my-4" />

          <p className="text-justify md:text-left">{comment.content}</p>
        </div>
      )}
      {product.house === "Serdaigle" && (
        <div className="flex flex-col gap-3 md:border-blueSerd md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex justify-between items-start ">
            <div>
              <p className="font-bold text-xl mb-2">{comment.author}</p>
              <p>{comment.comment_title}</p>
            </div>
            <button type="button" onClick={handleDelete}>
              <img src={corbeille} alt="Icône poubelle" className="h-6" />
            </button>
          </div>
          <div className="border-lightBlueSerd border-b-2 my-4" />

          <p className="text-justify md:text-left">{comment.content}</p>
        </div>
      )}
      {product.house === "Poufsouffle" && (
        <div className="flex flex-col gap-3 md:border-yellowPouff md:border-2 md:p-4 md:rounded-2xl">
          <div className="flex justify-between items-start ">
            <div>
              <p className="font-bold text-xl mb-2">{comment.author}</p>
              <p>{comment.comment_title}</p>
            </div>
            <button type="button" onClick={handleDelete}>
              <img src={corbeille} alt="Icône poubelle" className="h-6" />
            </button>
          </div>
          <div className="border-yellowPouff border-b-2 my-4" />

          <p className="text-justify md:text-left">{comment.content}</p>
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
  // eslint-disable-next-line react/forbid-prop-types
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  setIsUpdated: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

export default CommentCard;
