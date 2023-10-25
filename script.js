
const fItems = document.querySelectorAll('.faq');
fItems.forEach( item => {
  const fToggle = item.querySelector('.faq-toggle');
  
  fToggle.addEventListener('click', () => {
    item.classList.toggle('active');


    fItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });

    let del =item
    item.remove()

  });
});

let ask= document.getElementById("faq")

let qb= document.getElementById("qbutton")
console.log(qb)
qb.addEventListener("click", () => {
    let question= document.getElementById("question")
    console.log(question)
    let q= question.value;
    let newq= document.createElement("h3")
    newq.append(q)
    console.log(newq)
    
    ask.appendChild(newq)
})

let ab= document.getElementById("abutton")
console.log(ab)
ab.addEventListener("click", () => {
    let answer= document.getElementById("answer")
    console.log(answer)
    let a= answer.value;
    let newa= document.createElement("h3")
    newa.append(a)
    console.log(newa)
    
    ask.appendChild(newa)
})





