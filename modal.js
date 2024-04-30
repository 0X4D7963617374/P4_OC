// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");

const my_close = document.querySelector(".close");


function first()
{
  return true;
}

function last()
{
  return true;
}

function email() 
{
  return true;
}

function quantity() 
{
  return true;
}

function birthdate()
{
  return true;
}

function localisation()
{
  return true;
}

function check()
{
  return true;
}

function tout_ok()
{

}

const validators = {
  first: first,
  last: last,
  email: email,
  birthdate: birthdate,
  localisation: localisation,
  check: check,
  quantity: quantity
};

/*
// en fonction du choix de mon mentor
function validate()
{
  if (validateRecursive(0, true))
    tout_ok();
}

function validateRecursive(index, flag_valid)
{
  if (index >= formData.length)
    return flag_valid;

  const element = formData[index].querySelector('input');
  return validateRecursive(++index, flag_valid && (!element || !validators[element.name] || validators[element.name]()));
}*/


function validate()
{
  let index;
  let element;
  let flag_valid;

  flag_valid = true;
  index = 0;
  while (index < formData.length)
  {
    element = formData[index++].querySelector('input');
    if (element && validators[element.name])
      flag_valid = flag_valid && validators[element.name]();
  }
  if (flag_valid)
    tout_ok();
}



// launch modal form
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

function init()
{
  if (modalBtn)
    modalBtn.addEventListener("click", launchModal);
  if (my_close)
    my_close.addEventListener("click", fonct_close);
}

init();