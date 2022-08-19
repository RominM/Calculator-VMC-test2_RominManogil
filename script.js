const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
  getResult();
});

const getResult = () => {
  const inpValue = input.value.split(' ').join('');
  result.innerHTML = total(inpValue);
};

const total = (fn) => {
  return new Function('return ' + fn)();
};
