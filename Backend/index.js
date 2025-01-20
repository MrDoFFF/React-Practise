const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors())

mongoose
  .connect(
    "mongodb+srv://muradovvmurad2706:MuradV29@clusterm.61pv5.mongodb.net/"
  )
  .then(() => console.log("MangoDB-ye qosulma ugurludurrr"))
  .catch((err) => console.log("MangoDB-ye qosulma ugrusuzdurrr", err));

const UserSchema = new mongoose.Schema({
  image: String,
  country: String,
  title: String,
  description: String,
});
const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ error: "Melumat yuklenerken xeta bas verdi" });
  }
});
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "Istifadəçi tapılmadı" });
    }
    res.json(user);
  } catch (err) {
    res.json({ error: "Melumat yuklenerken xeta bas verdi" });
  }
});

app.use(express.json());

app.post("/users", async (req, res) => {
  const { image, country, title, description } = req.body;

  const newUser = new User({
    image,
    country,
    title,
    description,
  });
  try {
    await newUser.save();
    res.send("Melumat  ugurla elave edildi");
  } catch (err) {
    res.send("Melumat elave edilerken xeta bas verdi");
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.send("Melumat tapilmadi");
    }
    res.send("Melumat silindi");
  } catch (err) {
    res.send("Melumat silinerken xeta bas verdi");
  }
});

app.listen(port, () => {
  console.log(`Dinlenilirrr... port:${port}`);
});
