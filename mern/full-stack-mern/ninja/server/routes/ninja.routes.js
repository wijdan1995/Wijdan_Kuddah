const NinjaController = require("../controllers/ninja.controller");

module.exports = app => {
  app.get("/api/ninjas/", NinjaController.findAllNinjas);
  app.get("/api/ninjas/:id", NinjaController.findOneSingleNinja);
  app.put("/api/ninjas/update/:id", NinjaController.updateExistingNinja);
  app.post("/api/ninjas/new", NinjaController.createNewNinja);
  app.delete("/api/ninjas/delete/:id", NinjaController.deleteAnExistingNinja);
  app.post("/api/ninjutsu/new/:id", NinjaController.addNinjutsu);
  app.delete("/api/ninjas/:id/:nid", NinjaController.removeNinjutsu);

};