let express = require("express");
let cors = require("cors");
let chefdata = require("./data/chefdata.json");
let dotenv = require("dotenv");
dotenv.config();
let app = express();
let port = process.env.PORT || 5000;
let url = process.env.URL || "http://localhost";
app.use(cors());

app.get("/", function (req, res) {
  res.send("Server Running!");
});
app.get("/chef-details", function (req, res) {
  res.send(chefdata);
});
app.get("/popular", function (req, res) {
  let popularRecipe = chefdata.map((recipedata) =>
    recipedata.recipe.filter((v) => v.rating > 4.7)
  );
  res.send(popularRecipe.flat());
});

app.get("/chef-details/:id", function (req, res) {
  let id = req.params.id;
  const selectedRecipe = chefdata.find((n) => n.id === Number(id));
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`Listening on ${url}:${port}`);
});
