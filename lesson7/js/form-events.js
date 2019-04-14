// доступ к форме по значению атрибута name
let form = document.forms.lesson;
//console.log(form);

// получение элементов формы по значению атрибута name
let login = form.elements.login;
//console.log(login);

// получение и установка значений
//console.log(login.value);
login.value = "qwe";


function getCheckedCheckBoxes(name) {
    let checkBoxes = document.getElementsByName(name);
    // массив для выбранных чекбоксов
    let checkBoxChecked = [];

    for (let i = 0; i < checkBoxes.length; i++){
        if (checkBoxes[i].checked) {
            checkBoxChecked.push(checkBoxes[i].value);
            //console.log("значение чекбокса:", checkBoxes[i].value);
        }
    }
    return checkBoxChecked;
}
let langArr = getCheckedCheckBoxes('lang[]');
//console.log(langArr);

let checkBox1 = form.elements['lang[]'];
//console.log(checkBox1);

// выпадающий список
let countries = form.elements.countries;
//console.log(countries);
//console.log(countries.length);
for (let i = 0; i < countries.length; i++){
    // console.log(countries[i]);
    if (countries[i].selected) {
        //console.log("selected country", countries[i].value);
    }
}

form.addEventListener('submit', takeForm);

function takeForm(event) {
    event.preventDefault();// отмена события по умолчанию
    //console.log(this); // form
    let formData = new FormData(this);
    //console.log(formData);
    //console.log(formData.getAll("lang[]"));
    //console.log(formData.get("login"));
}

let info = {
    login: {
        error: "Введите валидный логин",
        success: "Логин введен правильно"
    },
    pwd: {
        error: "Введите валидный пароль",
        success: "Пароль введен правильно"
    }
};


let validateFields = {
   login: form.elements.login,
   pwd: form.elements.pwd
};

let rules = {
    login: 3,
    pwd: 6
};

let formValidator = {
    init: function (info, fields, rules) {
        this.info = info;
        this.fields = fields;
        this.rules = rules;
    },
    addListeners: function () {
        for (let key in this.fields) {
            this.fields[key]
                .addEventListener('blur', this.showResult.bind(this));
        }
    },
    showResult: function () {

    }
};


login.addEventListener('focus', focusOnElem);
function focusOnElem() {
    //console.log("focus on", this);
    //console.log("focus on", login);
};

login.addEventListener('blur', focusOut);
function focusOut() {
    //console.log("login value =", this.value);
};

// ДОМАШНАЯ РАБОТА. НАЧАЛО ТУТ
// ДОБАВЛЕНИЕ КОМЕНТАРИЕВ
let elem = document.getElementById("button");
elem.addEventListener("click", addComment);
function addComment() {
    let commentValue = document.getElementById("newComment").value;
    if (commentValue) {
    let comment = document.createElement("p");
    comment.innerText = commentValue;
    comment.classList.add("commentP");
    let fieldset = document.getElementById("comFieldset");
    let div = document.createElement("div");
    div.classList.add("commentDiv");
    let data = new Date();
    let comDate = document.createElement("p");
    comDate.classList.add("comDate");
    comDate.innerText = data;
    let comName = document.createElement("p");
    comName.classList.add("comName");
    comName.innerText = "By Name";
    let comAva = document.createElement("img");
    comAva.setAttribute("src", "img/ava.jpg");
    fieldset.insertBefore(div, comFieldset.firstChild);
    div.appendChild(comAva);
    div.appendChild(comName);
    div.appendChild(comDate);
    div.appendChild(comment);
  } else {
    console.log("none");
  }
  };

// СМЕНА ЦВЕТА
let colorRadio = form.elements.color;
let checkedValue = colorRadio.value;

//console.log(colorRadio[1].value);
colorRadio[0].addEventListener("change", changeColor);
colorRadio[1].addEventListener("change", changeColor);
function changeColor() {
  if (colorRadio[0].checked) {
    form.elements.checkbox_fieldset.style.background = colorRadio[0].value;
  } else {
    form.elements.checkbox_fieldset.style.background = colorRadio[1].value;
  }
};

// ЗАДАНИЕ НА РАЗБЛАКИРОВКУ ТЕКСТОВОГО ПОЛЯ
let checkbox = document.getElementById("checkbox");
let text = document.getElementById("text")
checkbox.addEventListener("change", disOff);
function disOff (){
  if (checkbox.checked) {
    text.disabled = false;
  } else {
    text.disabled = true;
  }
};
