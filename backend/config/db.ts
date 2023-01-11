import mongoose from 'mongoose';

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    //console.log and set types and add colors
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold
    );
  } catch (error: any) {
    console.log(error?.message || 'Error connecting to MongoDB');
    process.exit(1);
  }
};

export default db;
