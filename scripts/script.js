const checkBtn = document.querySelector(".check-btn");

checkBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const comment = document.querySelector(".comment").value;
  const phoneNumber = document.querySelector(".phone-number").value;

  if (!comment) {
    document.getElementById("comment").value += "vladiksts@gmail.ru";
  }

  const phoneNumberRegexp = /^\+375\d{9}$/g;

  if (phoneNumber != null && !phoneNumberRegexp.test(phoneNumber)) {
    const invalidPhoneNumber = document.querySelector(".invalid-phone-number");
    invalidPhoneNumber.style.display = "block"

    const validPhoneNumber = document.querySelector(".valid-phone-number");
    validPhoneNumber.style.display = "none"
  } else {
    const validPhoneNumber = document.querySelector(".valid-phone-number");
    validPhoneNumber.style.display = "block"

    const invalidPhoneNumber = document.querySelector(".invalid-phone-number");
    invalidPhoneNumber.style.display = "none"
  }

});
