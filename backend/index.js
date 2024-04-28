require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://LeaderOfMeow:qwezxc!!%40!@cluster1.fvlhmya.mongodb.net/NetflixClone');
	console.log("mongoose connected");
}
app.use(express.json());

// setting up my auth router;
app.use('/api/auth',authRouter.router);

app.listen(5000,()=>{
    console.log("server working at port 5000")
})