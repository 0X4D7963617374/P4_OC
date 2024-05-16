// DOM Elements
const modalbg = document.querySelector(".bground");
const modalgood = document.querySelector(".popup");

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const my_close = document.querySelector(".close");
const my_close_popup = document.querySelectorAll('.close-popup');

const displayStyles = ['block', 'none'];

const validators =
{
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
  let index = 0;


  if (modalBtn)
  while (index <modalBtn.length)
    modalBtn[index++].addEventListener("click",launchModal);


  if (my_close)
    my_close.addEventListener("click", fonct_close);

  index = 0;
  while (index < my_close_popup.length)
    my_close_popup[index++].addEventListener("click", fonct_close_popup);
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
  const isValid = quantityRegex.test(element.value) && element.value < 100;

  return setErrorDisplay(element, isValid);
}

function birthdate(element)
{
  const birthdateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const today = new Date();
  let isValid = birthdateRegex.test(element.value);
  let day;
  let month;
  let year;
  let date;

  if (isValid)
  {
    [day, month, year] = element.value.split('/');
    date = new Date(`${year}-${month}-${day}`);
    isValid = date <= today;
  }

  return setErrorDisplay(element, isValid);
}

function localisation(element)
{
  const tab_localisation = document.getElementsByName(element.name);
  const index = Array.from(tab_localisation).findIndex((loc) => loc.checked);

  return setErrorDisplay(element, index !== -1);
}

function check(element)
{
  const tab_check = document.getElementsByName(element.name);
  const index = Array.from(tab_check).findIndex((chk) => chk.checked);

  return setErrorDisplay(element, index === 0);
}

function tout_ok()
{
  fonct_close();
  modalgood.style.display = 'block';
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
 
  let i = 0;
  let form;
  let inputs;
  let j;
  let input;

  modalbg.style.display = "block";
  while (i < formData.length)
  {
    form = formData[i++];
    inputs = form.querySelectorAll('input');
    j = 0;
    while (j < inputs.length)
    {
      input = inputs[j++];
      input.value = '';
      if (input.type === 'checkbox' || input.type === 'radio')
        input.checked = false;
      setErrorDisplay(input, true);
    }
  }
}

function fonct_close_popup()
{
  modalgood.style.display = "none";
  modalbg.style.display = "none";
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


