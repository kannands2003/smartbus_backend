const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

// Database Connection
main().then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://soorajksss136:zlC1hZMZ1ZwSGM63@cluster0.z9u6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

// Import Routes
const authRoutes = require('./routes/authroutes');
const udetailRoutes = require('./routes/udetailroutes');

app.use('/auth', authRoutes);   // Authentication Routes
app.use('/udetails', udetailRoutes); // Udetails Routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
