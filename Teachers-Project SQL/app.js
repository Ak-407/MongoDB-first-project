const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/teacherdb", {useNewUrlParser: true});

const teacherSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Fill The Name."]},
    rating:{
        type:Number,
        min:1,
        max:10
    },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

const teacher = new Teacher({
    name:"sajad",
    rating:9
});

const teacher1 = new Teacher({
    name:"amaan",
    rating:4
}) ;

const teacher3 = new Teacher({
    name:"firs",
    rating:4
});

Teacher.insertMany([teacher,teacher1,teacher3], function(err,Teacher){
    if(err){
        console.log("error something is wrong");
    }
    else{
        console.log(Teacher);
    }
})