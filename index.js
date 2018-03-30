function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node ')
}

function increaseRankBy(n) {
  let items = document.querySelectorAll('ul.ranked-list li')
  items.forEach(item => {
    item.innerHTML = parseInt(item.innerHTML) + 1
  })
}
