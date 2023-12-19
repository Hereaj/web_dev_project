const express = require("express");
const router = express.Router();

const uuid = require("uuid");
const resData = require("../util/restaurant-data");

router.get("/confirm", (req, res) => {
  res.render("confirm");
});

router.get("/recommend", (req, res) => {
  res.render("recommend");
});

router.post("/recommend", (req, res) => {
  const restaurant = req.body;
  restaurant.id = uuid.v4(); // v4 generates random cryptic id

  const restaurantLists = resData.readRestaurantData();
  restaurantLists.push(restaurant);
  resData.writeRestaurantData(restaurantLists);

  res.redirect("/confirm");
});

router.get("/restaurants", (req, res) => {
  let order = req.query.order;
  let nextOrder = "desc";

  // fallback case
  // if default order is not set
  if (order !== "asc" && order !== "desc") {
    order ="asc";
  }

  if (order === "desc") {
    nextOrder = "asc";
  }

  const restaurantLists = resData.readRestaurantData();

  restaurantLists.sort((resA, resB) => {
    if ((order === "asc" && resA.name > resB.name) || (order === "desc" && resA.name < resB.name)) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: restaurantLists.length,
    restaurants: restaurantLists,
    nextOrder: nextOrder,
  });
});

router.get("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;
  const restaurantLists = resData.readRestaurantData();

  for (const restaurant of restaurantLists) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurants-detail", { restaurant: restaurant });
    }
  }
  // no id that user search
  res.status(404).render("404");
});

module.exports = router;
