const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postTeam, updateTeam} = require('./controller')



app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/team", postTeam);

app.put("/api/team/:id", updateTeam)

app.listen(4000, () => console.log("Server running on 4000"));
