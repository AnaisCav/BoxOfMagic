import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import expressAPI from "../services/expressAPI";
import CommentCard from "./CommentCard";

function Comments({ product }) {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    expressAPI
      .get(`/comments-by-product/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  }, [isUpdated]);

  const handleNewAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleNewTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleNewComment = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      author,
      title,
      content,
      product_id: parseInt(id, 10),
    };

    expressAPI
      .post(`/comments`, data)
      .then((res) => {
        if (res.status === 201) {
          setAuthor("");
          setTitle("");
          setContent("");
          setIsUpdated(!isUpdated);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl xl:text-4xl mt-16 mb-8">
        Commentaires{" "}
        <span className=" font-mono text-lg md:text-xl">
          ({comments.length})
        </span>
      </h1>
      {product.house === "" && (
        <div className="mb-12">
          <h3 className="text-xl mb-4">Postez un commentaire</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Prénom"
                value={author}
                onChange={handleNewAuthor}
                required
                className=" rounded-xl border-2 border-brown focus:outline-none focus:ring-brown p-2"
              />
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Titre"
                value={title}
                required
                onChange={handleNewTitle}
                className=" rounded-xl border-2 border-brown focus:outline-none focus:ring-brown p-2"
              />
            </div>
            <input
              id="content"
              name="content"
              type="text"
              placeholder="Commentaire"
              value={content}
              required
              onChange={handleNewComment}
              className=" rounded-xl p-2 w-full pb-8 border-2 border-brown focus:outline-none focus:ring-brown"
            />
            <div className="flex w-full md:justify-end mt-6">
              <button
                type="submit"
                className="bg-brown btn border-0 text-almostBlack --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown pt-1 w-full md:w-auto lg:w-40 "
              >
                Envoyer
              </button>
            </div>
            <div className="border-brown border-b-2 mt-16" />
          </form>
        </div>
      )}
      {product.house === "Griffondor" && (
        <div className="mb-12">
          <h3 className="text-xl mb-4">Postez un commentaire</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Prénom"
                value={author}
                onChange={handleNewAuthor}
                required
                className=" rounded-xl border-2 border-lightRedGrif focus:outline-none focus:ring-lightRedGrif p-2"
              />
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Titre"
                value={title}
                required
                onChange={handleNewTitle}
                className=" rounded-xl border-2 border-lightRedGrif focus:outline-none focus:ring-lightRedGrif p-2"
              />
            </div>
            <input
              id="content"
              name="content"
              type="text"
              placeholder="Commentaire"
              value={content}
              required
              onChange={handleNewComment}
              className=" rounded-xl p-2 w-full pb-8 border-2 border-lightRedGrif focus:outline-none focus:ring-lightRedGrif"
            />
            <div className="flex w-full md:justify-end mt-6">
              <button
                type="submit"
                className="bg-redGrif btn border-0 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-redGrif pt-1 w-full md:w-auto lg:w-40 "
              >
                Envoyer
              </button>
            </div>
            <div className="border-lightRedGrif border-b-2 mt-16" />
          </form>
        </div>
      )}
      {product.house === "Serpentard" && (
        <div className="mb-12">
          <h3 className="text-xl mb-4">Postez un commentaire</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Prénom"
                value={author}
                onChange={handleNewAuthor}
                required
                className=" rounded-xl border-2 border-lightGreenSerp focus:outline-none focus:ring-lightGreenSerp p-2"
              />
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Titre"
                value={title}
                required
                onChange={handleNewTitle}
                className=" rounded-xl border-2 border-lightGreenSerp focus:outline-none focus:ring-lightGreenSerp p-2"
              />
            </div>
            <input
              id="content"
              name="content"
              type="text"
              placeholder="Commentaire"
              value={content}
              required
              onChange={handleNewComment}
              className=" rounded-xl p-2 w-full pb-8 border-2 border-lightGreenSerp focus:outline-none focus:ring-lightGreenSerp"
            />
            <div className="flex w-full md:justify-end mt-6">
              <button
                type="submit"
                className="bg-greenSerp btn border-0 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-greenSerp pt-1 w-full md:w-auto lg:w-40 "
              >
                Envoyer
              </button>
            </div>
            <div className="border-lightGreenSerp border-b-2 mt-16" />
          </form>
        </div>
      )}
      {product.house === "Poufsouffle" && (
        <div className="mb-12">
          <h3 className="text-xl mb-4">Postez un commentaire</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Prénom"
                value={author}
                onChange={handleNewAuthor}
                required
                className=" rounded-xl border-2 border-yellowPouff focus:outline-none focus:ring-yellowPouff p-2"
              />
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Titre"
                value={title}
                required
                onChange={handleNewTitle}
                className=" rounded-xl border-2 border-yellowPouff focus:outline-none focus:ring-yellowPouff p-2"
              />
            </div>
            <input
              id="content"
              name="content"
              type="text"
              placeholder="Commentaire"
              value={content}
              required
              onChange={handleNewComment}
              className=" rounded-xl p-2 w-full pb-8 border-2 border-yellowPouff focus:outline-none focus:ring-yellowPouff"
            />
            <div className="flex w-full md:justify-end mt-6">
              <button
                type="submit"
                className="bg-yellowPouff btn border-0 text-almostBlack --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-yellowPouff pt-1 w-full md:w-auto lg:w-40 "
              >
                Envoyer
              </button>
            </div>
            <div className="border-yellowPouff border-b-2 mt-16" />
          </form>
        </div>
      )}
      {product.house === "Serdaigle" && (
        <div className="mb-12">
          <h3 className="text-xl mb-4">Postez un commentaire</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Prénom"
                value={author}
                onChange={handleNewAuthor}
                required
                className=" rounded-xl border-2 border-lightBlueSerd focus:outline-none focus:ring-lightBlueSerd p-2"
              />
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Titre"
                value={title}
                required
                onChange={handleNewTitle}
                className=" rounded-xl border-2 border-lightBlueSerd focus:outline-none focus:ring-lightBlueSerd p-2"
              />
            </div>
            <input
              id="content"
              name="content"
              type="text"
              placeholder="Commentaire"
              value={content}
              required
              onChange={handleNewComment}
              className=" rounded-xl p-2 w-full pb-8 border-2 border-lightBlueSerd focus:outline-none focus:ring-lightBlueSerd"
            />
            <div className="flex w-full md:justify-end mt-6">
              <button
                type="submit"
                className="bg-blueSerd btn border-0 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-blueSerd pt-1 w-full md:w-auto lg:w-40 "
              >
                Envoyer
              </button>
            </div>
            <div className="border-lightBlueSerd border-b-2 mt-16" />
          </form>
        </div>
      )}

      <div className="flex flex-wrap gap-4 ">
        {comments &&
          comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              product={product}
              comments={comments}
              setComments={setComments}
              isUpdated={isUpdated}
              setIsUpdated={setIsUpdated}
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
