import express from  'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import mongoose  from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

const mongoURL = 'mongodb+srv://Naptoss:ueadMcuOX812JMV9@cluster0.ftdiq33.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURL, { })
    .then(() => console.log('MongoDB connected'))

    .catch((error) => 
    console.error(`Error connecting to MongoDB: ${error}`))