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
  let element = document.querySelector('#grand-node')
  while (true) {
    let child =
  }
}
