import { MongoClient } from "mongodb";
import { config } from "dotenv";
import mongoose from "mongoose";

config()
let url = process.env.MDURL


async function main() {
  // const client = new MongoClient(url, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

  try {
      // Connect to the MongoDB server
      //   await client.connect();
      //   console.log("Connected to MongoDB");

      //   // Select the database
      //   const db = client.db("ftms"); // Replace with your database name
      //  let Product = await db.collection("Product").find({})
      // console.log(Product,"---")

      let db = mongoose.connection.db;

      // Calculating the total Order Quantity
      let totalOrderQuantity = await db.collection("orders").aggregate([
          //Let write the first stage Match
          {
              $match: { size: "medium" },
          },
          // this is the second stage of Aggregating
          {
              $group: { _id: "$name", totalQty: { $sum: "$quantity" } },
          },
      ]);
      console.log(await totalOrderQuantity.toArray());

      //Calculate the total orderValue and Avg Order Quantity
      let avgOrderQuantity = await db.collection("orders").aggregate([
          //Let write the first stage Match
          {
              $match: {
                  date: {
                      $gte: new Date("2020-01-30"),
                      $lt: new Date("2022-01-30"),
                  },
              },
          },
      ]);
      console.log(await avgOrderQuantity.toArray());
  } catch (err) {
    console.error("Error creating collection:", err);
  } finally {
    // Close the connection
    // await client.close();
  }
}

main().catch(console.error);
