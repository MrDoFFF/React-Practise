const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://muradovvmurad2706:muradovvmurad2706@clusterm.61pv5.mongodb.net/")
    .then(() => console.log("MangoDB-ye qosulma ugurludurrr"))
    .catch((err) => console.log("MangoDB-ye qosulma ugrusuzdurrr", err));



const UserSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number
})

const Woman = mongoose.model("Woman", UserSchema);
app.get("/women", async (req, res) => {
    try {
        const women = await Woman.find();
        res.json(women);
    } catch (err) {
        res.json({ error: "Melumat yuklenerken xeta bas verdi" });
    }
});

app.get("/women/:id", async (req, res) => {
    const { id } = req.params
    try {
        const women = await Woman.findById(id);
        if (!women) {
            return res.status(404).json({ error: "Istifadəçi tapılmadı" });
        }
        res.json(women);
    } catch (err) {
        res.json({ error: "Melumat yuklenerken xeta bas verdi" });
    }
});


app.post("/women", async (req, res) => {
    const { image, title, price } = req.body;
    const newWoman = new Woman({
        image,
        title,
        price,
    });
    try {
        await newWoman.save();
        res.send("Melumat  ugurla elave edildi");
    } catch (err) {
        res.send("Melumat elave edilerken xeta bas verdi");
    }
});
app.delete("/women/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedWoman = await Woman.findByIdAndDelete(id);
        if (!deletedWoman) {
            return res.send("Melumat tapilmadi");
        }
        res.send("Melumat silindi");
    } catch (err) {
        res.send("Melumat silinerken xeta bas verdi");
    }
});




app.listen(port, () => {
    console.log(`Dinlenilirrr... ${port}`)
})