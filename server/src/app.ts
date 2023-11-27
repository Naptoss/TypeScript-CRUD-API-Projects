import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();


app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/todo-app'
mongoose.connect(mongoURL, { })
    .then(() => console.log('MongoDB connected'))

    .catch((error) => 
    console.error(`Error connecting to MongoDB: ${error}`))