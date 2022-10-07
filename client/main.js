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