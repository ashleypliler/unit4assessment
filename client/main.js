const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.querySelector("#fortuneButton");


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then((res) => {
        const data = res.data;
        alert(data);
        console.log(data)
    })
}

fortuneBtn.addEventListener('click', getFortune);

const goalBtn = document.querySelector("#goalButton");

const getGoal = () => {
    axios.get("http://localhost:4000/api/goals/").then((res) => {
        const data = res.data;
        alert(data);
        console.log(data)
    })
}

goalBtn.addEventListener('click', getGoal);


const goalType = document.querySelector('#goal');
const goalOutput = document.querySelector('#goalOutput');

const getGoalType = () => {
    
    const goalValue = goalType.options[goalType.selectedIndex].value;
    const postObject = {
        selectedValue: goalValue
    }
    axios.post("http://localhost:4000/api/goal-type/", postObject).then((res) => {
        console.log(res.data);
        goalOutput.innerHTML = res.data;
    }).catch((error) => {
        console.log(error);
    })
}

goalType.addEventListener('change', getGoalType);

const submitButton = document.querySelector('#submitButton')

const goalInput = () => {
    const textBox = document.querySelector('#goalsInput').value
    const postObject = {
        value: textBox
    }
    axios.post("http://localhost:4000/api/goalText/", postObject).then((res) => {
        console.log(res.data);
        goalText.innerHTML = res.data;
    }).catch((error) => {
        console.log(error);
    })
}
submitButton.addEventListener('click', goalInput);