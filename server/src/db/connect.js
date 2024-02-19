import mongoose from "mongoose";
const connectdb = async (conn) => {
    await mongoose.connect(conn)
        .then(result => {
            console.log("DataBase Connected.....");
        })
        .catch(error => {
            console.log("error");
        })
}
export default connectdb