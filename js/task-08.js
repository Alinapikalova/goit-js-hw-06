const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password;

  if (mail.length === 0 || password.length === 0) {
    return alert("Plese, all fields must be filled.");
  } else {
    const formData = new FormData(event.currentTarget);
    const formDataObject = {};

    formData.forEach((value, name) => {
      formDataObject[name] = value;
      //console.log("onFormSubmit -> name", name);
      //console.log("onFormSubmit -> value", value);
    });
    console.log(formDataObject);
  }
  form.reset();
}
