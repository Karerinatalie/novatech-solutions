console.log("Welcome to NovaTech Solutions!");
const currentYear=new Date().getFullYear();
console.log("Current year:",currentYear);
console.log("NovaTech website is running successfully!");
console.log("NovaTech is getting better!");
const yearElement=document.getElementById("year");
yearElement.textContent=new Date().getFullYear();
const contactForm=document.querySelector(".contact-form");
const formMessage=document.getElementById("form-message");

contactForm.addEventListener("submit",async function(event){
    event.preventDefault();
    formMessage.textContent="Sending your Message...";
    const formData=new FormData(contactForm);
    try{
        const response=await fetch(contactForm.action,{
        method: "POST",
        body: formData,
        headers:{
            "Accept":"application/json"
        }
    });

if(response.ok){
    formMessage.textContent="Thank you! Your message was sent successfully.";
    contactForm.reset();
}else{
    formMessage.textContent="Oops! Something went wrong. Please try again.";
}
}catch(error){
    formMessage.textContent="Network error. Please try again.";
}
});
const menuToggle=document.getElementById("menu-toggle");
const navigation=document.querySelector("nav");

menuToggle.addEventListener("click",function(){
    navigation.classList.toggle("active");
});