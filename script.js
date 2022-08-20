const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
  getResult();
});

const getResult = () => {
  // const inpValue = input.value.split(' ').join(''); // From new Fuction
  const inpValue = input.value; // From Native
  getTotal(inpValue)
    ? (result.innerHTML = getTotal(inpValue))
    : (result.innerHTML = 0);
};

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

  let array = inpValue.split('');
  let trash1 = [];
  if (array.includes('*') || array.includes('/')) {
    array.forEach((el, i) => {
      if (el === '*' || el === '/') {
        console.log('array[i] : ' + array[i]);

        let trash = array.splice(i - 1, 3);
        console.log('array[i] : ' + array[i]);
        trash1 = array.splice(i - 2, 1);
        inpValue = array.splice(0, 0, trash);
        inpValue = array.splice(3, 0, trash1);
        console.log(inpValue);
      }
    });
  }

  console.log('print array : ' + array);

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
  // numTest = numTest.split(',');
  let array = numTest.split(',');

  let result = 0;
  let trash = [];
  for (let i = 0; i < sign.length; i++) {
    let temp = sign[i];

    switch (temp) {
      case '+':
        result = add(array[0], array[1]);
        array[0] = result;
        trash = array.splice(1, 1);
        break;
      case '-':
        result = sous(array[0], array[1]);
        array[0] = result;
        trash = array.splice(1, 1);
        break;
      case '*':
        result = mult(array[0], array[1]);
        array[0] = result;
        trash = array.splice(1, 1);
        break;
      case '/':
        result = div(array[0], array[1]);
        array[0] = result;
        trash = array.splice(1, 1);
        break;
    }
  }
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

/*

const getTotal = (value) => {
  return new Function('return ' + value)();
};
*/
