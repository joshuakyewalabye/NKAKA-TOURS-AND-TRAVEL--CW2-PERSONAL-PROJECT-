function sendEmail(){
const templateParams={
name:document.querySelector("#name").value,
email:document.querySelector("#email").value,
phone:document.querySelector("#phone").value,
message:document.querySelector("#TextArea").value,
};

emailjs.send('service_76jeisg', 'template_wh36p6e', templateParams)
  .then(() => alert("Your email has been sent !!"))
  .catch(() => alert("Email not sent !!"));

}