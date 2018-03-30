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
    item.innterHTML = parseInt(item.innterHTML) + 1
  })
}
