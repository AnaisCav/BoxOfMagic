import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import expressAPI from "../services/expressAPI";
import CommentCard from "./CommentCard";

function Comments({ product }) {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    expressAPI
      .get(`/comments-by-product/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl xl:text-4xl mt-16 mb-8">
        Commentaires{" "}
        <span className=" font-mono text-lg md:text-xl">
          ({comments.length})
        </span>
      </h1>
      <div className="mb-12">
        <h3 className="text-xl mb-4">Votre commentaire</h3>
        <input
          id="content"
          name="content"
          type="text"
          placeholder="Tapez votre commentaire"
          className=" rounded-xl p-2 w-full pb-8 border-2 border-brown focus:outline-none focus:ring-brown"
        />
      </div>
      <div className="flex flex-wrap">
        {comments &&
          comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              product={product}
            />
          ))}
      </div>
    </div>
  );
}

Comments.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default Comments;
