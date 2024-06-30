let input = document.querySelector(".in")
let btn = document.querySelector(".btn")
let copyImg = document.querySelector(".copyImg")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXUZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const spcchar = "~`!@#$%^&*()_+};.,/[]"
const allChar = upperCase + lowerCase + number + spcchar;
console.log(allChar)

function getPassword() {
    let length = 12;
    let password = ""

    while (length > password.length) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += spcchar[Math.floor(Math.random() * spcchar.length)];
    }
    input.value = password
}
btn.addEventListener("click", () => {
    getPassword()
})


copyImg.addEventListener("click", () => {
    input.select();
    document.execCommand("copy");
})