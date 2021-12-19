const router = require("express").Router();
const Movie = require("../models/Movie");

const { verifyToken } = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(200).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to update movie");
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie has been deleted");
    } catch (err) {
      req.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not alowed");
  }
});

//GET RANDOM MOVIE
router.get("/random", async (req, res) => {
  const type = req.query.type;
  let movie;
  //use $sample to get random value
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        //to get one random one
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        //to get one random one
        { $sample: { size: 1 } },
      ]);
    }

    res.status(200).json(movie);
  } catch (err) {
    req.status(500).json(err);
  }
});

//GET MOVIE
router.get("/find/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    res.status(200).json(movie);
  } catch (err) {
    req.status(500).json(err);
  }
});

//GEL ALL MOVIES
router.get("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      //reverse() will return movies form latest to old entry
      res.status(200).json(movies.reverse());
    } catch (err) {
      req.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users");
  }
});

//GET MOVIE STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    //aggregate is from mongoDB
    const data = await Movie.aggregate([
      //$gte is greaterthen
      //   { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          //year: { $year: "$createdAt" }, # will return users by year
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
