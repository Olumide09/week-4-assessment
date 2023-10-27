const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postTeam, getTeams, createTeam, deleteTeam, updateTeam} = require('./controller')



app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/team", postTeam);

app.get("/api/teams", getTeams)

app.post("/api/teams", createTeam)

app.put("/api/teams/:id", updateTeam)

app.delete('/api/teams/:id', deleteTeam)


app.listen(4000, () => console.log("Server running on 4000"));



