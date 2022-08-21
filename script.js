const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
  getResult();
});

/*
Use the same function (getResult) fro both algorythm.
Just change the value of "inpValue" 
*/
const getResult = () => {
  // Use for NEW FUNCTION
  const inpValue = input.value.split(' ').join('');

  // Use this for NATIVE ALGORYTHM
  // const inpValue = input.value;

  // Get total
  getTotal(inpValue)
    ? (result.innerHTML = getTotal(inpValue))
    : (result.innerHTML = 0);
};

/*
  NATIVE ALGORYTHM
This algorythm use native methods from JavaScript.
  Not completly working yet.
  You can make simples calculs.
  Writing is from left to right.
    no priority
    no parentheses
*/
// Comment below to toggle
/*
let sign = [];
let numTest = '';

const getTotal = (inpValue) => {
  getSign(inpValue);
  operate();
  sign = [];
  numTest = '';
};

const getSign = (inpValue) => {
  inpValue = inpValue.replaceAll(' ', '');

  let InpValArray = inpValue.split('');
  let rubbish = [];
  if (InpValArray.includes('*') || InpValArray.includes('/')) {
    InpValArray.forEach((el, i) => {
      if (el === '*' || el === '/') {
        let spliceArray = InpValArray.splice(i - 1, 3);
        console.log('spliceArray : ', spliceArray);
        rubbish = InpValArray.splice(i - 2, 1);
        console.log('rubbish ', rubbish);
        inpValue = InpValArray.splice(0, 0, spliceArray);
        inpValue = InpValArray.splice(3, 0, rubbish);
      }
    });
  }

  if (inpValue[0] === '-') numTest += 0;
  [...inpValue].forEach((el, i) => {
    if (isNaN(el)) {
      sign.push(el);
      numTest += ',';
    } else {
      numTest += el;
    }
  });
};

const operate = () => {
  let InpValArray = numTest.split(',');

  let result = 0;
  let spliceArray = [];
  for (let i = 0; i < sign.length; i++) {
    let temp = sign[i];

    switch (temp) {
      case '+':
        result = add(InpValArray[0], InpValArray[1]);
        InpValArray[0] = result;
        spliceArray = InpValArray.splice(1, 1);
        break;
      case '-':
        result = sous(InpValArray[0], InpValArray[1]);
        InpValArray[0] = result;
        spliceArray = InpValArray.splice(1, 1);
        break;
      case '*':
        result = mult(InpValArray[0], InpValArray[1]);
        InpValArray[0] = result;
        spliceArray = InpValArray.splice(1, 1);
        break;
      case '/':
        result = div(InpValArray[0], InpValArray[1]);
        InpValArray[0] = result;
        spliceArray = InpValArray.splice(1, 1);
        break;
    }
  }
  console.log(result);

  return result;
};

const add = (a, b) => {
  return parseInt(a) + parseInt(b);
};
const sous = (a, b) => {
  return parseInt(a) - parseInt(b);
};
const mult = (a, b) => {
  return parseInt(a) * parseInt(b);
};
const div = (a, b) => {
  return parseInt(a) / parseInt(b);
};
*/

/*
  NEW FUNCTION
This function use the Function Creator. Implemented by JavaScript to get imediatly result.
Not allowed for this exercise but functional
*/

// Uncomment below to toggle

const getTotal = (value) => {
  return new Function('return ' + value)();
};
