const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultBox = document.getElementById('result');
const form = document.getElementById('palindrome-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value === '') {
    alert('Please input a value');
  } else {
    resultBox.innerHTML = '';
    if (checkPalindrome(input.value) === true) {
      resultBox.innerHTML = `<p><strong>${input.value}</strong> is a palindrome</p>`;
      input.value = '';
    } else {
      resultBox.innerHTML = `<p><strong>${input.value}</strong> is not a palindrome</p>`;
      input.value = '';
    }
    resultBox.style.display = 'block';
  }
})

function checkPalindrome(str) {
  let cleanStr = checkStrInput(str);
  let strReverse = cleanStr.split('').reverse().join('');
  return strReverse.toLowerCase() === cleanStr.toLowerCase() ? true : false;
};

function checkStrInput(str) {
  const regex = /[,.\-\\\/:+_?!\s]/g;
  return str.replace(regex,'');
}