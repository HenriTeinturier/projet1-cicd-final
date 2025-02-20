const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

if (process.env.NODE_ENV === "production") {
  mongoose
    .connect(
      "mongodb+srv://henri:123@cluster0.ti7u6.mongodb.net/vue3c23?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected [DB PROD] !");
    })
    .catch((e) => console.log(e));
} else {
  MongoMemoryServer.create().then(async (mongo) => {
    const uri = mongo.getUri();
    await mongoose.connect(uri);
    console.log("Connected [DB test] !");
  });
}
