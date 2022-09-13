const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
