const database = []



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


    updateTeam: (req, res) => {
        const {newTeam, lookupId} = req.body

        let index = teams.findIndex(team => team.lookupId === +req.params.id)
        if (index === lookupId) {
            teams[index].status === newStatus
            req.status(200).send(teams)
            console.log("New status:")
            console.log(teams)
        }
    }


}