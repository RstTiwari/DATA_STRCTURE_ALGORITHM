import { MongoClient } from "mongodb";

// Connection URL

// Connect to the MongoDB cluster
async function main() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
      // Connect to the MongoDB server
      await client.connect();
      console.log("Connected to MongoDB");

      // Select the database
      const db = client.db("test"); // Replace with your database name

      // Create a new collection
      let newCollection = await db.command({
          create: "betView",
          viewOn: "betlists",
          pipeline: [{ $match:{} }],
      });

      console.log("Collection 'betlists' created:", newCollection);
  } catch (err) {
    console.error("Error creating collection:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
