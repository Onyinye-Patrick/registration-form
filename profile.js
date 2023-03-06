const countryInput = document.getElementById("countries");
const autoList = document.getElementById("auto-complete-result");
 let countries = [];
 countryInput.addEventListener("input", valueChange);

 


getAllData();

async function getAllData(){
    const countryData = await fetch ("https://restcountries.com/v3.1/all")
    const data = await countryData.json();

    countries = data.map((country) =>{
        return country.name.common;
        
    })
    
}

function valueChange(){
    let value = countryInput.value.toLowerCase();
    let matchList = [];

    countries.forEach((countryName) =>{
        if (countryName.substr(0, value.length).toLowerCase() === value){
            matchList.push(countryName);
        }
        

    })
    createUnOrderedList(matchList);

}


function createUnOrderedList(list){
    let countryList = document.createElement("ul");
    countryList.className = "lists";
    countryList.id = "listss"
    list.forEach((country) =>{
        const listItem = document.createElement("li");
        listItem.innerHTML = country;

        countryList.appendChild(listItem);

    })

    document.getElementById("box").appendChild(countryList);
}

function removeUnOrderedList(){
    let countryList = document.getElementById("lists");
    if(countryList)countryList.remove()
    
}








