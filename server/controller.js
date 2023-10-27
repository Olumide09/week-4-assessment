const database = []

const teams = require('./db.json')

let upcomingTeamID = 4



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["A fresh start would put you on your way", "A friend is a present you give yourself", "A good time to finish up old tasks", "A pleasant surprise is waiting for you", "All your hardwork will soon pay off"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);

        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },


    postTeam: (req, res) => {
        database.push(req.body)

        res.status(200).send(database)
    },


    getTeams: (req, res) => {
        res.status(200).send(teams)
    },


    deleteTeam: (req, res) => {
        console.log("this user wants to delete",+req.params.id)
        console.log("coming soon")
    },

    createTeam: (req, res) => {
        const {teamName, favPlayer} = req.body
        let newTeam = {
            id: upcomingTeamID,
            teamName: teamName,
            favPlayer
        }

        teams.push(newTeam)
        upcomingTeamID = upcomingTeamID + 1
    },


    updateTeam: (req, res) => {
        console.log("this user is trying to update this item")
    }


}