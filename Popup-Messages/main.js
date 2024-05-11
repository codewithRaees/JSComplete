const getnewsletter = document.querySelector('.news-letter-text')
const newsletter = document.querySelector('.newsletter')
const popup = document.querySelector('.popup')
const closebox = document.querySelector('.icon')
const submit = document.querySelector('.submit-button')
const email = document.querySelector('.email-textbox')
const texterror = document.querySelector('.errortext')
const subscriptionbox = document.querySelector('.subscription-box')

getnewsletter.addEventListener('click', () => {
    newsletter.classList.add('hidebox')
    popup.classList.add('showbox')

})
closebox.addEventListener('click', () => {
    newsletter.classList.remove('hidebox')
    popup.classList.remove('showbox')
    texterror.style.display = "none";
    texterror.classList.remove('shakeText')
    email.value = '';
    
})
// To Subscrition Box Message



//Email validation function
let errorToggle = false
function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if (!sEmail.match(reEmail)) {
        texterror.style.display = "block";
       
        return false;
    }
    errorToggle= true
    return true;
    
}

email.addEventListener("blur", function (e) {
   validateEmail(e.target.value)

});
// TO hide Error Text 
email.addEventListener('focus', () => {
    texterror.style.display = "none";
    texterror.classList.remove('shakeText')
    email.value = '';
})

// Subsribed sucessfully box code

submit.addEventListener('click', () => {
    var inputValueLength = email.value.length;
    if(inputValueLength === 0)
        {
            console.log(inputValueLength)
            texterror.classList.add('shakeText')

        }else{
                texterror.classList.remove('shakeText')
                if (errorToggle ) {
                    console.log("hi")
                    email.value = '';
                    subscriptionbox.classList.add('showsubscriptionbox')
                    setTimeout(()=>{
                        subscriptionbox.classList.remove('showsubscriptionbox')
                        errorToggle = false
                    },2000)
            
                }
                else { texterror.classList.add('shakeText') }
        }
})
// to Remove the sake class
submit.addEventListener('mouseover', () => {
    texterror.classList.remove('shakeText')
})