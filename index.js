
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entery) => {
        console.log(entery)

        if (entery.isIntersecting) {
            entery.target.classList.add('show')
        } else {
            entery.target.classList.add('show')
        }
    })
});
console.log(observer)


const hiddenClassElement = document.querySelectorAll('.hidden')

hiddenClassElement.forEach((ele) => {
    observer.observe(ele)
})
