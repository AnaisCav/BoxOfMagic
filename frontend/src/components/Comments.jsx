import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import CommentCard from "./CommentCard";

function Comments() {
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
      <h1 className="text-2xl md:text-3xl mt-16">Commentaires</h1>
      <div>
        {comments &&
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
}

export default Comments;
