// db config/connection file
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // await as mongoose returns a promise
        // it takes mongoose URI and second, we have to pass some default options
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
