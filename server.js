import express from 'express';
import { config } from './config/config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import waitlistRoutes from './routes/waitlist.js';


const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors())

const startServer = async () => {
    try {
        await mongoose.connect(config.mongo.url);

       

        app.use('/waitlist', waitlistRoutes);

        app.listen(config.server.port, () => {
            console.log(`Server is running on port ${config.server.port}`);
        });
    } catch (err) {
        console.log(err);
    }

};

startServer();
