const passwordInput = document.getElementById("password-input");
const strengthBox = document.getElementById("strength-box");
const strengthText = document.getElementById("strength-text");
const strengthBar = document.getElementById("strength-bar");
const confirmPassword = document.getElementById("confirm-password")
let text = document.getElementById("demo-text");
const submitBtn = document.getElementById("submit");
//const form1 = document.getElementById("form1");
const eyeIcon = document.getElementById("eye-icon");


passwordInput.addEventListener("focus", e=>{
    strengthBox.style.display = "block";
});


passwordInput.addEventListener("blur", e=>{
    strengthBox.style.display = "none";
});

function setStrength(value){
    strengthBar.style.width = value + '%';
}

function setColorAndText(color, text){
    strengthBar.style.background = color;
    strengthText.innerText = text;
    strengthText.style.color = color;
}

function clearStrength(){
    strengthBar.style.width = 0;
    strengthText.innerText = ""
    strengthBar.style.background = 0
}

passwordInput.addEventListener("keyup", checkPasswordStrength);

function checkPasswordStrength(){
    let strength = 0;
    if(passwordInput.value === ""){
        clearStrength()
        return false;
    }
    else
    if(passwordInput.value.match(/\s+/)){
        //alert("not allowed")
            setColorAndText("red", "white space is not allowed")
        }
        else
        if(passwordInput.value.match(/<|>/)){
            setColorAndText("red", "<> are not allowed");
        }
        else
    if(passwordInput.value.length > 12){
        setColorAndText("red", "password should not be more than 12 characters")
    } 
    else
        if(passwordInput.value.length < 7){
            strength = 20
            setColorAndText("red", "Too short");
            
        } else{

            let upperCase = passwordInput.value.match(/[A-Z]/);
            let lowerCase = passwordInput.value.match(/[a-z]/);
            let numbers = passwordInput.value.match(/[0-9]/);
            let specialCharacters = passwordInput.value.match(/[!/@/#/$/%/^/&/*/(|)/_/+/=/{|}/"/'/|/,/./?/]/);
             
            if(upperCase || lowerCase || numbers || specialCharacters){
                strength = 30;
                setColorAndText("red", "weak")
            }
            if(
                (upperCase && lowerCase) || (numbers && specialCharacters) || (upperCase && numbers) || (upperCase && specialCharacters) || (lowerCase && numbers) || (lowerCase && specialCharacters)
            ){
                strength = 50;
                setColorAndText("orange", "meduim");
            }

            if(
                (upperCase && lowerCase && numbers) || (numbers && specialCharacters && lowerCase) || (upperCase && numbers && specialCharacters) || (upperCase && specialCharacters && lowerCase) 
            ){
                strength = 80;
                setColorAndText("#90ee90", "strong");
            }

            if (upperCase && lowerCase && specialCharacters && numbers){
                strength = 100;
                setColorAndText("green", "Very strong");
            }

        }
        setStrength(strength)
}

submitBtn.addEventListener("click", checkPassword)


function checkPassword (){
    if (passwordInput.value.length > 0){
        if(confirmPassword.value !== passwordInput.value){
          /*  text.textContent = "passwords match";
            text.style.color = "green"*/
            text.textContent = "passwords don't match"
            text.style.color = "red";           
            return;
        }       
    }
    else {
        alert("password can't be empty");
        text.textContent = ""
        return ;
        //preventDefault()
    }
    location.href = "profile.html" //pword="+passwordInput.value + "&cpword="+confirmPassword.value;
}

eyeIcon.addEventListener("click", e=>{
    const passwordInput = eyeIcon.parentElement.querySelector("input")
    if(passwordInput.type === "password"){
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
        return(passwordInput.type = "text")
    }else eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    passwordInput.type = "password"
})






































