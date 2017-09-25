// Dependencies
// =============================================================
var path = require("path");


module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //The default route to the homepage.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //Blog route loads the wedding blog page
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // Sign-up route loads the new-client form page
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/new-client.html"));
  });

  // My-wedding route loads an individuals current wedding plan.
  app.get("/my-wedding", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/checklist_page.html"));
  });
};