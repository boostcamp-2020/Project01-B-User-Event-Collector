import mongoose from 'mongoose';
import { createConnection } from 'typeorm';

export default () => {
    const dbConnect = () => {
        mongoose.connect(`${process.env.MONGO_URI}`, {
            dbName: process.env.DB_NAME,
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log('mongodb connected'))
            .catch((e) => console.error(e));

        createConnection()
            .then(() => console.log('mysql connected'))
            .catch((e) => console.error(e));
    };

    dbConnect();
    mongoose.connection.on('disconnected', dbConnect);
};
