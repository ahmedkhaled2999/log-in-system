// varibales
var enterName = document.getElementById("idNAME");
console.log(enterName);
var enterEmail = document.getElementById("idemail");
console.log(enterEmail);
var enterPassword = document.getElementById("idpassword");
console.log(enterPassword);
var login = document.getElementById("login");
console.log(login);
var sing = document.getElementById("singup");
console.log(sing);
var rong = document.getElementById("rong");
var username = document.getElementById("username");

var valusesArray = [];
var rightVALD = document.querySelectorAll(".valdation");

// to show name input and reblace
sing.addEventListener("click", function () {
  if (sing.innerText == "SIGN UP") {
    enterName.classList.replace("d-none", "d-block");
    sing.innerText = "SING IN";
    login.innerText = "sign up";
  } else if (sing.innerText == "SING IN") {
    login.innerText = "Login";
    enterName.classList.replace("d-block", "d-none");
    sing.innerText = "SIGN UP";
    console.log(sing.innerText == "SIGN UP");
  }
});

console.log(sing.innerText == "SIGN UP");
console.log(sing.innerText);
//for check inputs is empty or not
function isEmpty() {
  if (
    enterName.value == "" ||
    enterEmail.value == "" ||
    enterPassword.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

// for check email is exist
function isEmailExist() {
  for (var i = 0; i < valusesArray.length; i++) {
    if (valusesArray[i].Eemail == enterEmail.value) {
      return false;
    }
  }
}
console.log(login.innerText);
// about sing in
login.addEventListener("click", function () {
  if (login.innerText == "sign up") {
    if (isEmpty() == false) {
      for (var i = 0; i < rightVALD.length; i++) {
        rightVALD[i].classList.add("border-danger");
        rong.innerHTML =
          '<span class="text-danger m-3">All inputs is required</span>';
      }
    } else {
      for (var i = 0; i < rightVALD.length; i++) {
        rightVALD[i].classList.remove("border-danger");
        rong.innerHTML = '<span class="text-success m-3">success</span>';
      }
    }
  } else {
    rong.innerHTML =
      '<span class="text-success m-3">please enter your email and password</span>';
  }
});
if (localStorage.getItem("inputsvalues") == null) {
  valusesArray = [];
} else {
  valusesArray = JSON.parse(localStorage.getItem("inputsvalues"));
}
login.addEventListener("click", function () {
  if (login.innerText == "sign up") {
    var logArraY = {
      Nname: enterName.value,
      Eemail: enterEmail.value,
      Ppass: enterPassword.value,
    };
    if (isEmailExist() == false) {
      console.log("hi");
      rong.innerHTML =
        '<span class="text-danger m-3">email already exists</span>';
    } else {
      valusesArray.push(logArraY);
      localStorage.setItem("inputsvalues", JSON.stringify(valusesArray));
      rong.innerHTML = '<span class="text-success m-3">Success</span>';
    }
  }
});
if (localStorage.getItem("inputsvalues") == null) {
  valusesArray = [];
} else {
  valusesArray = JSON.parse(localStorage.getItem("inputsvalues"));
}
// about log in
login.addEventListener("click", function () {
  if (login.innerText == "Login") {
    for (var i = 0; i < valusesArray.length; i++) {
      if (
        valusesArray[i].Eemail == enterEmail.value &&
        valusesArray[i].Ppass == enterPassword.value
      ) {
        rong.innerHTML = '<span class="text-success m-3">succesd</span>';
        usernaME.innerHTML = `<span class="text-white bg-black p-5 m-3">welcome ${valusesArray[i].Nname}</span>`;
      } else {
        rong.innerHTML =
          '<span class="p-2 text-danger">incorrect email or password</span>';
      }
    }
  }
});

// valdition
for (var v = 0; v < rightVALD.length; v++) {
  rightVALD[v].addEventListener("input", function (e) {
    show.style.right = "32px";
    var inputvalueid = e.target.id;

    var inputvalue = e.target.value;

    valdation(inputvalueid, inputvalue);
  });
}

function valdation(inputvalueid, inputvalue) {
  var regex = {
    idemail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    idpassword:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };
  var valueid = document.getElementById(inputvalueid);
  var corrcet = valueid.nextElementSibling;

  if (regex[inputvalueid].test(inputvalue) == true) {
    valueid.classList.add("is-valid");
    valueid.classList.remove("is-invalid");
    corrcet.classList.replace("d-block", "d-none");
  } else {
    valueid.classList.add("is-invalid");
    valueid.classList.remove("is-valid");
    corrcet.classList.replace("d-none", "d-block");
  }
}
// to show passworld
var show = document.getElementById("show");
var sow = show.addEventListener("click", function () {
  if (enterPassword.type == "password") {
    enterPassword.type = "text";
  } else if (enterPassword.type == "text") enterPassword.type = "password";
});

var usernaME = document.getElementById("home");

// login.addEventListener( "click", function ()
// {
//   if ()
//   {

//   }
//   usernaME.innerHTML =
//     '<span class="text-danger m-3">All inputs is required</span>';
// });
