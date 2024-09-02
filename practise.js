let data = collection.find({}).sort({ amount: -1 }).skip(1).limit(1);
