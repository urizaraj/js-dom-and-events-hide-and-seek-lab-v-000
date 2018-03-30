function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let items = document.querySelectorAll('ul.ranked-list li')
  items.forEach(item => {
    item.innerHTML = parseInt(item.innerHTML) + n
  })
}



function deepestChild() {
  const qs = document.querySelector
  let element = document.
  while (true) {

  }
}
