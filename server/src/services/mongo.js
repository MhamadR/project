const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:rbAr0oDuhjfrSJpF@nasa-cluster.gjotr8x.mongodb.net/?retryWrites=true&w=majority&appName=nasa-cluster";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
