import {data} from "./data.js"
import {Dog} from "./js/Dog.js"

const profileSection = document.getElementById("profile-section")
const likeBtn = document.getElementById("like-btn")
const nopeBtn = document.getElementById("nope-btn")

const getNewDog = () => {
  const newDog = new Dog(data.shift())
  const noDog = new Dog({
    name: null,
    avatar: "",
    age: 0,
    bio: "0",
    hasBeenSwiped: false,
    hasBeenLiked: false
  })
  return newDog ? newDog : noDog
}
const render = () => {
  if(currentDog.name != null) {
    profileSection.innerHTML = currentDog.getProfileHtml()
    const badge = document.getElementById("badge")

    if (currentDog.hasBeenSwiped) {
      badge.classList.contains('hidden')
          ? badge.classList.remove('hidden')
          : null
    } else {
      badge.classList.add('hidden')
    }
  } else {
    document.getElementById("swipe-btns").style.display = "none"
    profileSection.style.backgroundImage = `url('../images/no-match.png')`
    profileSection.innerHTML = ``
  }
}

let currentDog = new Dog(data.shift())
render()

likeBtn.addEventListener('click', ()=>{swipeHandler(true)})
nopeBtn.addEventListener('click', ()=>{swipeHandler(false)})

const swipeHandler = (liked) => {
  currentDog.hasBeenSwiped = true
  liked ? currentDog.hasBeenLiked = true : currentDog.hasBeenLiked = false
  render()
  setTimeout(() => {
    currentDog = getNewDog();
    render();
    }, 1500)
  }
