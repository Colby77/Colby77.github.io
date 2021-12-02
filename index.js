const projectPic = document.getElementById('project-pic')
const swapPic = document.getElementById('swap-pic')
const aboutCats = document.getElementsByClassName('about-cat')
const tablinks = document.getElementsByClassName('tablink')

let currentImg = 0

pictureSources = [
    'dndcreator1.png',
    'dndcreator2.png',
    'dndcreator3.png',
    'dndcreator4.png',
    'dndcreator5.png'
]

const changeContent = (evt, contentName) => {
    // var aboutCats, tablinks;
    console.log(aboutCats)
    // aboutCats = document.getElementsByClassName('about-cat')
    for(let i = 0; i < aboutCats.length; i++){
        aboutCats[i].style.display = "none"
    }
    // tablinks = document.getElementsByClassName('tablink')
    for(let i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(' active', '')
    }
    document.getElementById(contentName).style.display = 'flex'
    evt.currentTarget.className += ' active';
}

swapPic.addEventListener('click', () => {
    console.log(currentImg)
    if(currentImg <= 4){
        projectPic.src = pictureSources[currentImg]
        currentImg++
    }else{
        currentImg = 0
        projectPic.src = pictureSources[currentImg]
        currentImg++
    }
})