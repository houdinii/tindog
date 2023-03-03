class Dog{
  constructor(data){
    Object.assign(this, data)
  }
  getProfileHtml = () => {
    const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this

    document.getElementById("profile-section").style.backgroundImage = `url('../${avatar}')`

    const badgeHtml = hasBeenSwiped ? hasBeenLiked
        ? `<img src="../images/badge-like.png" alt="Like Badge" class="badge" id="badge"/>`
        : `<img src="../images/badge-nope.png" alt="Nope Badge" class="badge" id="badge"/>`
        : `<div class="badge" id="badge"></div>`

    return `
      ${badgeHtml}
      <div id="user-details" class="user-detail-section">
        <p class="user-details user-heading">${name}, ${age}</p>
        <p class="user-details user-subheading">${bio}</p>
      </div>`
  }
}

export {Dog}