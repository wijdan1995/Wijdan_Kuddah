const MyappController = require("../controllers/myapp.controller");

module.exports = app => {
  app.get("/api/myapps/", MyappController.findAllMyapps);
  app.get("/api/myapps/:id", MyappController.findOneSingleMyapp);
  app.put("/api/myapps/update/:id", MyappController.updateExistingMyapp);
  app.post("/api/myapps/new", MyappController.createNewMyapp);
  app.delete("/api/myapps/delete/:id", MyappController.deleteAnExistingMyapp);
};