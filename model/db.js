const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://Adi123:d6bSX5QMW1UE0vdP@cluster0.m1kllof.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err));