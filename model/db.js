const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://adityac22f:eXLb2LMhcgozHrAA@cluster0.ndt99w0.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err));
