var nameOne = "Chris McKellar"
var upper = nameOne.toUpperCase();
var careerNow = "Student"
var description = [
    { description1: "A well mannered man of mistery." },
]
var interest = ["Music", "Anime", "Cooking"]

var positionsPast = [
    { position: "Baker", company: "Edgar's", job: "Baked goods. Helped Customers" },
    { position: "Sales Associate", company: "Mall Attractions", job: "Help customers. Handle cash. Drive safely." },
    { position: "Banker", company: "BBVA", job: "Help customers with accounts." },
]

var userSkills = [
    {
        skill: "Programming",
        isCool: true
    },
    {
        skill: "Sales",
        isCool: true
    },
    {
        skill: "Customer Service",
        isCool: false
    }
]

function displayPosition() {
    console.log("Name:" + " " + upper);
    console.log("Career:" + " " + careerNow); 
    console.log("Description:" + " " + description[0].description1);
}

displayPosition();


function displaySkills() {
    console.log("My Skills: ");
    for (let i = 0; i < userSkills.length; i++){
        if (userSkills[i].isCool){
            console.log("BAM: " + userSkills[i].skill)
        } else {
            console.log(userSkills[i].skill)
        }
    }
}

displaySkills()