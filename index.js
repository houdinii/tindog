import {data} from "./data.js"
import {Dog} from "./js/Dog.js"

const profileSection = document.getElementById("profile-section")
const likeBtn = document.getElementById("like-btn")
const nopeBtn = document.getElementById("nope-btn")

const getNewDog = () => new Dog(data.shift())
const render = () => {
  profileSection.innerHTML = currentDog.getProfileHtml()
  const badge = document.getElementById("badge")

  if(currentDog.hasBeenSwiped){
    badge.classList.contains('hidden')
        ? badge.classList.remove('hidden')
        : null
  } else {
    badge.classList.add('hidden')
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
