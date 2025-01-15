
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())

app.use(cors())
let fakeDb = [
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
    },
    {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
    },
    {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
    },
    {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
    },
    {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
    },
    {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
    }
]

app.get('/users', (req, res) => {
    res.send(fakeDb)
})
app.get('/users/:id', (req, res) => {
    const { id } = req.params
    const element = fakeDb.find(x => x.id == +id)
    res.send(element)
})

app.post('/users', (req, res) => {
    fakeDb.push(req.body)
    res.send("post olundu🥰")
})

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const element = fakeDb.find(x => x.id === +id);
    if (!element) {
        return res.send("not found");
    }
    Object.assign(element, req.body);
    res.send("melumatlar yenilendi");
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    fakeDb = fakeDb.filter(x => x.id !== +id);
    res.send("deleted succesfully")
});

app.listen(port, () => {
    console.log(`dinlenilir...`)
})