const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
  getResult();
});

const getResult = () => {
  const inpValue = input.value.split(' ').join('');
  total(inpValue)
    ? (result.innerHTML = total(inpValue))
    : (result.innerHTML = 0);
};

const total = (fn) => {
  return new Function('return ' + fn)();
};
