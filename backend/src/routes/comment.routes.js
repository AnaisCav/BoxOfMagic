const express = require("express");

const router = express.Router();

const commentControllers = require("../controllers/commentControllers");

router.get("/comments", commentControllers.browse);
router.get("/comments/:id", commentControllers.read);
router.put("/comments/:id", commentControllers.edit);
router.post("/comments", commentControllers.add);
router.delete("/comments/:id", commentControllers.destroy);
router.get("/comments-by-product/:id", commentControllers.browseByProductId);

module.exports = router;
