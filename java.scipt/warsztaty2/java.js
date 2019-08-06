console.log(document.getElementById('formularz').lastElementChild)
document.getElementById('formularz').lastElementChild.addEventListener('click', function(e) {
e.preventDefault();
let fname = document.getElementsByTagName("input")[0]
let lname = document.getElementsByTagName("input")[1]
console.log("jego imie to : " + fname.value + "a nazwisko to : " + lname.value)
})