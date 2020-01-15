var nameOne = [
    {firstName: "Chris"},
    {lastName: "McKellar"},
]
var careerNow = [
    {career1: "Student"},
]
var description = [
    {desciption1: "A well mannered man of mistery"},
]
var interest = [
    {interest: "Music"},
    {interest: "Anime"},
    {interest: "Cooking"},
]
var positionsPast = [
    {position: "Baker", company: "Edgar's", job: "Baked goods. Helped Customers"},
    {position: "Sales Associate", company: "Mall Attractions", job: "Help customers. Handle cash. Drive safely."},
    {position: "Banker", company: "BBVA", job: "Help customers with accounts."},
]
var userSkills = [
    {BAM: "Programming"},
    {skill: "Sales"},
    {skill: "Customer Service"},
]

function displayPosition () {
    console.log("Name" + toUpperCase(nameOne));
    console.log("Career" + careerNow);
    console.log("Description" + description);
}

displayPosition ()