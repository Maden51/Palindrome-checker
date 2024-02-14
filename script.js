const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultBox = document.getElementById('result');

checkButton.addEventListener('click', () => {
  if (input.value === '') {
    alert('Please input a value');
  } else {
    resultBox.innerHTML = '';
    if (checkPalindrome(input.value) === true) {
      resultBox.innerHTML = `<p><strong>${input.value}</strong> is a palindrome</p>`;
    } else {
      resultBox.innerHTML = `<p><strong>${input.value}</strong> is not a palindrome</p>`;
    }
    resultBox.style.display = 'block';
  }
})

function checkPalindrome(str) {
  let cleanStr = checkStrInput(str);
  let strReverse = cleanStr.split('').reverse().join('');
  console.log(cleanStr);
  console.log(strReverse);
  return strReverse.toLowerCase() === cleanStr.toLowerCase() ? true : false;
};

function checkStrInput(str) {
  const regex = /[\W\s_]/g;
  return str.replace(regex,'');
}