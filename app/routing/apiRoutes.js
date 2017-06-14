var apiRoutes = function (app, friends) {

  // Get current friends array
  app.get("/api", function (req, res) {
    console.log(friends);
    return res.json(friends);
  });

  // Create New Profile - takes in JSON input
  app.post("/api/new", function (req, res) {
    var newProfile = req.body;

    friends.push(newProfile);

    res.json(newProfile);
  });

}

module.exports = apiRoutes;