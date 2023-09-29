import PropTypes from "prop-types";
import { useState } from "react";

import expressAPI from "../services/expressAPI";

import corbeille from "../assets/images/icones/corbeille.png";
import modify from "../assets/images/icones/modify.png";
import save from "../assets/images/icones/save.png";

function CommentCard({
  comment,
  product,
  comments,
  setComments,
  isUpdated,
  setIsUpdated,
}) {
  const [isBeingModified, setIsBeingModified] = useState(false);
  const [updateAuthor, setUpdateAuthor] = useState(comment.author);
  const [updateTitle, setUpdateTitle] = useState(comment.comment_title);
  const [updateContent, setUpdateContent] = useState(comment.content);

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

  const handleEdit = () => {
    setIsBeingModified(true);
  };

  const handleSaveEdit = () => {
    expressAPI
      .put(`comments/${comment.comment_id}`, {
        author: updateAuthor,
        title: updateTitle,
        content: updateContent,
        product_id: product.id,
      })
      .then((res) => {
        if (res.status === 204) {
          setIsBeingModified(false);
          setIsUpdated(!isUpdated);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full">
      {product.house === "" && (
        <div>
          {isBeingModified ? (
            <div className="flex flex-col gap-3 md:border-brown md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <textarea
                    name="author"
                    id="author"
                    value={updateAuthor}
                    onChange={(e) => setUpdateAuthor(e.target.value)}
                  />
                  <textarea
                    name="title"
                    id="title"
                    value={updateTitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleSaveEdit}>
                    <img src={save} alt="Icône poubelle" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-brown border-b-2 my-4" />

              <textarea
                name="content"
                id="content"
                value={updateContent}
                onChange={(e) => setUpdateContent(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3 md:border-brown md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <p className="font-bold text-xl mb-2">{comment.author}</p>
                  <p>{comment.comment_title}</p>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleDelete}>
                    <img src={corbeille} alt="Icône poubelle" className="h-6" />
                  </button>
                  <button type="button" onClick={handleEdit}>
                    <img src={modify} alt="Icône modifier" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-brown border-b-2 my-4" />

              <p className="text-justify md:text-left">{comment.content}</p>
            </div>
          )}
        </div>
      )}
      {product.house === "Griffondor" && (
        <div>
          {isBeingModified ? (
            <div className="flex flex-col gap-3 md:border-lightRedGrif md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <textarea
                    name="author"
                    id="author"
                    value={updateAuthor}
                    onChange={(e) => setUpdateAuthor(e.target.value)}
                  />
                  <textarea
                    name="title"
                    id="title"
                    value={updateTitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleSaveEdit}>
                    <img src={save} alt="Icône poubelle" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-lightRedGrif border-b-2 my-4" />

              <textarea
                name="content"
                id="content"
                value={updateContent}
                onChange={(e) => setUpdateContent(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3 md:border-lightRedGrif md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <p className="font-bold text-xl mb-2">{comment.author}</p>
                  <p>{comment.comment_title}</p>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleDelete}>
                    <img src={corbeille} alt="Icône poubelle" className="h-6" />
                  </button>
                  <button type="button" onClick={handleEdit}>
                    <img src={modify} alt="Icône modifier" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-lightRedGrif border-b-2 my-4" />

              <p className="text-justify md:text-left">{comment.content}</p>
            </div>
          )}
        </div>
      )}
      {product.house === "Serpentard" && (
        <div>
          {isBeingModified ? (
            <div className="flex flex-col gap-3 md:border-lightGreenSerp md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <textarea
                    name="author"
                    id="author"
                    value={updateAuthor}
                    onChange={(e) => setUpdateAuthor(e.target.value)}
                  />
                  <textarea
                    name="title"
                    id="title"
                    value={updateTitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleSaveEdit}>
                    <img src={save} alt="Icône poubelle" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-lightGreenSerp border-b-2 my-4" />

              <textarea
                name="content"
                id="content"
                value={updateContent}
                onChange={(e) => setUpdateContent(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3 md:border-lightGreenSerp md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <p className="font-bold text-xl mb-2">{comment.author}</p>
                  <p>{comment.comment_title}</p>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleDelete}>
                    <img src={corbeille} alt="Icône poubelle" className="h-6" />
                  </button>
                  <button type="button" onClick={handleEdit}>
                    <img src={modify} alt="Icône modifier" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-lightGreenSerp border-b-2 my-4" />

              <p className="text-justify md:text-left">{comment.content}</p>
            </div>
          )}
        </div>
      )}
      {product.house === "Serdaigle" && (
        <div>
          {isBeingModified ? (
            <div className="flex flex-col gap-3 md:border-lightBlueSerd md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <textarea
                    name="author"
                    id="author"
                    value={updateAuthor}
                    onChange={(e) => setUpdateAuthor(e.target.value)}
                  />
                  <textarea
                    name="title"
                    id="title"
                    value={updateTitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleSaveEdit}>
                    <img src={save} alt="Icône poubelle" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-lightBlueSerd border-b-2 my-4" />

              <textarea
                name="content"
                id="content"
                value={updateContent}
                onChange={(e) => setUpdateContent(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3 md:border-lightBlueSerd md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <p className="font-bold text-xl mb-2">{comment.author}</p>
                  <p>{comment.comment_title}</p>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleDelete}>
                    <img src={corbeille} alt="Icône poubelle" className="h-6" />
                  </button>
                  <button type="button" onClick={handleEdit}>
                    <img src={modify} alt="Icône modifier" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-lightBlueSerd border-b-2 my-4" />

              <p className="text-justify md:text-left">{comment.content}</p>
            </div>
          )}
        </div>
      )}
      {product.house === "Poufsouffle" && (
        <div>
          {isBeingModified ? (
            <div className="flex flex-col gap-3 md:border-yellowPouff md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <textarea
                    name="author"
                    id="author"
                    value={updateAuthor}
                    onChange={(e) => setUpdateAuthor(e.target.value)}
                  />
                  <textarea
                    name="title"
                    id="title"
                    value={updateTitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleSaveEdit}>
                    <img src={save} alt="Icône poubelle" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-yellowPouff border-b-2 my-4" />

              <textarea
                name="content"
                id="content"
                value={updateContent}
                onChange={(e) => setUpdateContent(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3 md:border-yellowPouff md:border-2 md:p-4 md:rounded-2xl">
              <div className="flex justify-between items-start ">
                <div>
                  <p className="font-bold text-xl mb-2">{comment.author}</p>
                  <p>{comment.comment_title}</p>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <button type="button" onClick={handleDelete}>
                    <img src={corbeille} alt="Icône poubelle" className="h-6" />
                  </button>
                  <button type="button" onClick={handleEdit}>
                    <img src={modify} alt="Icône modifier" className="h-6" />
                  </button>
                </div>
              </div>
              <div className="border-yellowPouff border-b-2 my-4" />

              <p className="text-justify md:text-left">{comment.content}</p>
            </div>
          )}
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
    id: PropTypes.number.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  setIsUpdated: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

export default CommentCard;
