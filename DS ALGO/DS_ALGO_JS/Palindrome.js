//Check Palindrome number
function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return `${str} is not palindrome`;
        }
    }
    return `${str} is palindrome`;
}
const str = "madam";
const value = checkPalindrome(str);
console.log(value);
