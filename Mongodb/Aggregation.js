import { MongoClient } from "mongodb";
import { config } from "dotenv";
import mongoose from "mongoose";

config();
let url = process.env.MDURL;

async function main() {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        let db = mongoose.connection.db;

        let data = await db
            .collection("movies")
            .aggregate([
                // First stage: $match to filter documents
                {
                    $match: {
                        $and: [
                            {
                                genres: { $in: ["Drama"] },
                            },
                            {
                                runtime: { $gte: 20, $lte: 50 },
                            },
                        ],
                    },
                },

                // Second stage: $group to group the filtered documents by title
                {
                    $group: {
                        _id: "$title",
                        runtime: { $last: "$runtime" },
                        title: { $first: "$title" },
                    },
                },
                //third Stage where i will be writing

            ])
            .toArray();
        console.log(data, "==");
    } catch (err) {
        console.error("Error creating collection:", err);
    } finally {
        // Close the connection
        // await client.close();
    }
}

main().catch(console.error);
