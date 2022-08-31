

// const links = document.querySelectorAll('.head-link')

// links.forEach((value, index) => {
//     value.addEventListener('click', () => {
//         links.forEach(val => {
//             val.classList.remove('active')
//         })
//         links[index].classList.add('active')
//     })
// })

const icon = document.querySelector('#ham-burger')
const list =  document.querySelector('.flex-drop')

icon.addEventListener('click',() =>{
    list.classList.add('active')
    // if(icon.classList.contains('fa-bars')){
    //     icon.classList.replace('fa-bars','fa-times')
    // }else{
    //     icon.classList.replace('fa-times', 'fa-bars')
    // }
})

const times = document.querySelector('#cancel')

times.addEventListener('click', () =>{
    list.classList.remove('active')
})