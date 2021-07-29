const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const auttemp = "630610738 THANISORN CHAIWUT"
const btn_search = document.querySelector('search')
const paragraph = document.querySelector('text')
var change = 0;
// define more constants and variables here

btn_toggle.onclick = () => {
  var str = author.innerHTML
  var res = str.replace(/\D/g, "");
  if(change == 0){
    author.innerHTML = Number(res)+Number(length.value);
    console.log(res)
    change = 1;
  }
  else{
    author.innerHTML = auttemp;
    console.log(auttemp)
    change = 0;
  }
  
}

btn_search.onclick = () => {
  const len = input.value;
  const markup = paragraph.innerHTML.split(" ").map((word) => {
    if (words.length == word.length) {
      return '<span class="highlight">' + word + '</span>';
    } else {
      return word;
    }
  }).join(" ");

  el.innerHTML = markup;
}

// more codes for Search and Reset buttons here
