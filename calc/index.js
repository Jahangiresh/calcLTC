// TASK:
// {
//   HER + CLICK-lendiyinde HESABLAMA FUNKSIYASI ELAVE EDIN
// }

let currentDigit = ""; //birinci yazilan reqemi ve operator secildikden sonra yazilan reqemi saxlamaq ucun deyishen
let operator = ""; //operator saxlamaq ucun deyishen
let firstDigit = ""; // operator secildikden sonra ilk secilen reqem firsDigit, operatordan sonra secilen reqem ise currentDigit deyisheninde saxlanir

let numberElements = document.querySelectorAll(".numbers"); //numbers class-inda olan butun button elementleri array sheklinde HTML-den gotururuk mes: ["button.element1","button.element2"]

// birinci reqemi tapan function
for (let i = 0; i < numberElements.length; i++) {
  const element = numberElements[i]; //  Destructuring---for loop-nun qaytardigi i-cisi anlayishini deyishene menimsedirik,yeni her dongude numberElements[index-incisi] artiq element adi ile gotururuk

  element.addEventListener("click", () => {
    alert(
      "numbers buttonuna click etdiniz, deyer artiq currentDigit-e string olaraq menimsedildi"
    );
    //her secilen elemente click event-i veririk
    currentDigit += element.innerHTML; //click-lenen elementin daxili html-ni currentDigit-e + ile menimsedirik ki her defe sonuncu deyer deyil her deyeri gotursun, burada hele ki currentDigit "STRING" type-dir
    // document.querySelector("#input").value = currentDigit;
    updateScreen(currentDigit); // calc screen-e update eden funksiyadir
  });
}

// sifirlama
document.querySelector("#AC").addEventListener("click", () => {
  alert("AC buttonuna click etdiniz, currentDigit 0-landi");
  currentDigit = 0; //currentDigit 0-lanir
  updateScreen(currentDigit); //ve ekrana gosterilir
});

// kalk ekranina deyer gosteren func
const updateScreen = (value) => {
  alert(
    "derhal sonra updateScreen function ishe dushdu ve deyeri ekranda gosterdi"
  );
  document.querySelector("#input").value = value; //input id-li elementi secir ve onu her defe function-da gonderilen parametre beraber edirik
};

// operator tapan function

let operators = document.querySelectorAll(".operators");
for (let index = 0; index < operators.length; index++) {
  const element = operators[index]; //  Destructuring
  element.addEventListener("click", () => {
    alert("operator buttonuna click etdiniz");

    setOperator(element.innerHTML); //click-lenen elementin innerHTML-ni menimsedirik operatora
  });
}

// operator saxlama funksiyasi
const setOperator = (operatorElement) => {
  alert("clicklenen operator deyishene menimsedildi");
  // operator secildikden sonra ashagidaki ardicilliq ile ishlemelidir
  operator = operatorElement; // clicklenen operator yeni "operatorElement", en yuxarida yaratdigimiz 3 deyishenden biri olan "let operator" deyishenine menimsenir
  firstDigit = parseFloat(currentDigit); //operator secildikden sonra bu zamana qeder STRING type-olan currentDigit reqem type-a deyishdirilib 3 deyishenden biri olan "let firstDigit" deyishenine menimsenir
  alert("currentDigit-in hazirki deyeri firsDigit-e menimsedildi");

  currentDigit = ""; // ve artiq bunun deyeri firstDigit-de oldugu ucun currentDigit 2ci reqemi goturmek ucun hazir veziyyete getirilir, "sifirlanir"
  alert("currentDigit 2ci reqemi gozlemek uzre 0-landi");
  updateScreen(currentDigit); //calc ekranina 0-lanmish deyishen verilir
};

// hesablama func
document.querySelector("#calc").addEventListener("click", () => {
  //hesablama button-una click tutulur
  if (operator == "+") {
    //shert yoxlanilir operator + ise bu condition ishleyir
    let result = firstDigit + parseFloat(currentDigit);
    updateScreen(result);
  } else if (operator == "-") {
    //shert yoxlanilir operator - ise bu condition ishleyir
    let result = firstDigit - parseFloat(currentDigit);
    updateScreen(result);
  } else if (operator == "*") {
    //shert yoxlanilir operator * ise bu condition ishleyir
    let result = firstDigit * parseFloat(currentDigit);
    updateScreen(result);
  } else {
    //shert yoxlanilir operator yuxaridakilardan hec biri ise / bu condition
    if (currentDigit != "0") {
      //shert bura dushdukden sonra currentDigit-in 0 olub olmadigi yoxlanilir
      let result = firstDigit / parseFloat(currentDigit);
      updateScreen(result);
    } else {
      updateScreen("0-a bolme yoxdur");
    }
  }
});
