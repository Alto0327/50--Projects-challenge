const Stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-face");
const colors = ["red", "orange", "lightblue", "green", "lightgreen"]


Stars.forEach((star, index) => {
    star.addEventListener("click", () => changeRating(index))
})

changeRating(0);


function changeRating(index){
    Stars.forEach((star,idx) => {
        if(idx < index + 1){
            star.classList.add("active")
        }else{
            star.classList.remove("active")
        }
    })
    emojis.forEach(emoji => {
        emoji.style.transform= `translateX(-${index * 48}px)`
        emoji.style.color= colors[index]
    })

}