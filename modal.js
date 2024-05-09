// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");

const my_close = document.querySelector(".close");

const displayStyles = ['block', 'none'];

const validators = {
  first: first,
  last: last,
  email: email,
  birthdate: birthdate,
  localisation: localisation,
  check: check,
  quantity: quantity
};


function init()
{
  if (modalBtn)
    modalBtn.addEventListener("click", launchModal);
  if (my_close)
    my_close.addEventListener("click", fonct_close);
}

init();


function setErrorDisplay(element, isValid)
{
  const errorDiv = element.parentElement.querySelector(".showmessage");

  errorDiv.style.display = displayStyles[+isValid];
  return isValid;
}


function first(element)
{
  const isValid = element.value.length >= 3;

  return setErrorDisplay(element, isValid);
}

function last(element)
{
  const isValid = element.value.length >= 3;

  return setErrorDisplay(element, isValid);
}

function email(element) 
{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
  const isValid = emailRegex.test(element.value);

  return setErrorDisplay(element, isValid);
}

function quantity(element)
{
  const quantityRegex = /^[0-9]+$/;
  const isValid = quantityRegex.test(element.value);

  return setErrorDisplay(element, isValid);
}

function birthdate(element)
{
  return true;
}

function localisation(element)
{
  return true;
}

function check(element)
{
  return true;
}

function tout_ok()
{
  fonct_close();
}

// en fonction du choix de mon mentor recursif ou pas
/*function validate(event)
{
  event.preventDefault();
  if (validateRecursive(0, true))
    tout_ok();
}

function validateRecursive(index, flag_valid)
{
  if (index >= formData.length)
    return flag_valid;

  const element = formData[index].querySelector('input');
  return validateRecursive(++index, (!element || !validators[element.name] || validators[element.name](element)) && flag_valid);
}*/

function validate(event)
{
  let index;
  let element;
  let flag_valid;

  event.preventDefault();
  flag_valid = true;
  index = 0;
  while (index < formData.length)
  {
    element = formData[index++].querySelector('input');
    if (element && validators[element.name])
      flag_valid = validators[element.name](element) && flag_valid;
  }
  if (flag_valid)
    tout_ok();
}

function launchModal()
{
  modalbg.style.display = "block";
}

function fonct_close()
{
  modalbg.style.display = "none";
}

function editNav()
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav")
  {
    x.className += " responsive";
  } else
  {
    x.className = "topnav";
  }
}


