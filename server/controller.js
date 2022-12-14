


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
           const fortunes = ["A lifetime of happiness lies ahead of you.", "Dont just think, act!", "Happiness will bring you good luck.", "Feel the fear and do it anyway.", "The harder you work, the luckier you get.", "Your goal will be reached very soon."]

           let randomIndex = Math.floor(Math.random() * fortunes.length);
           let randomFortune = fortunes[randomIndex];
           res.status(200).send(randomFortune);
        },
    getGoal: (req, res) => {
        const goals = ['Short-term goal','Long-term goal','Interpersonal goal','Career goal','Academic goal','Stretch goal','Financial goal']

        let randomIndex = Math.floor(Math.random() * goals.length);
        let randomGoal = goals[randomIndex];
        res.status(200).send(randomGoal);
    },
    getGoalType: (req, res) => {
        res.status(200).send(req.body.selectedValue)

    },
    goalInput: (req, res) => {
        res.status(200).send(req.body.value)
    },

     
}

