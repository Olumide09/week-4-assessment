module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["A fresh start would put you on your way", "A friend is a present you give yourself", "A good time to finish up old tasks", "A plesant surprise is waiting for you", "All your hardwork will soon pay off"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);

        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    }

}