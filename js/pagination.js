let thisPage = 1
let limit = 6
let list = document.querySelectorAll(".cards .card")

function loadItem() {
  let beginGet = limit * (thisPage - 1)
  let endGet = limit * thisPage - 1
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block"
    } else {
      item.style.display = "none"
    }
  })
  listPage()
}

loadItem()

function listPage() {
  let count = Math.ceil(list.length / limit)
  document.querySelector(".listPage").innerHTML = ""

  if (thisPage != 1) {
    let prev = document.createElement("li")
    prev.innerText = "Prev"
    prev.setAttribute("onClick", "changePage(" + (thisPage - 1) + ")")
    prev.classList.add("secondary")
    document.querySelector(".listPage").appendChild(prev)
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li")
    newPage.innerText = i
    if (i == thisPage) {
      newPage.classList.add("primary")
    } else {
      newPage.classList.add("secondary")
    }
    newPage.setAttribute("onClick", "changePage(" + i + ")")
    document.querySelector(".listPage").appendChild(newPage)
  }

  if (thisPage != count) {
    let next = document.createElement("li")
    next.innerText = "Next"
    next.setAttribute("onClick", "changePage(" + (thisPage + 1) + ")")
    next.classList.add("secondary")
    document.querySelector(".listPage").appendChild(next)
  }
}

function changePage(i) {
  thisPage = i
  loadItem()
}
