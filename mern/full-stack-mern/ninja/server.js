const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the ninja routes function from our ninja.routes.js file
require("./server/routes/ninja.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
