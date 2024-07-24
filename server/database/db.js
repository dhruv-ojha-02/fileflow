import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://user:codeforinterview@ac-nzt4wio-shard-00-00.lhgo8k7.mongodb.net:27017,ac-nzt4wio-shard-00-01.lhgo8k7.mongodb.net:27017,ac-nzt4wio-shard-00-02.lhgo8k7.mongodb.net:27017/?ssl=true&replicaSet=atlas-1ih9bk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with database ', error.message);
    }
}

export default DBConnection;