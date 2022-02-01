const projectPic = document.getElementById('project-pic')
const swapPic = document.getElementById('swap-pic')
const aboutCats = document.getElementsByClassName('about-cat')
const projectCategories = document.getElementsByClassName('project-category')

const aboutTablinks = document.getElementsByClassName('about-tablink')
const projectTablinks = document.getElementsByClassName('project-tablink')

let currentImg = 0

pictureSources = [
    'dndcreator1.png',
    'dndcreator2.png',
    'dndcreator3.png',
    'dndcreator4.png',
    'dndcreator5.png'
]

const changeAboutContent = (evt, contentName) => {
    console.log(aboutCats)
    for(let i = 0; i < aboutCats.length; i++){
        aboutCats[i].style.display = "none"
    }
    for(let i = 0; i < aboutTablinks.length; i++){
        aboutTablinks[i].className = aboutTablinks[i].className.replace('active', '')
    }
    document.getElementById(contentName).style.display = 'flex'
    evt.currentTarget.className += ' active';
    return
}


const changeProjectContent = (event, projectId) => {
    console.log(projectCategories)
    for(let i = 0; i < projectCategories.length; i++){
        projectCategories[i].style.display = 'none'
    }
    for(let i = 0; i < projectTablinks.length; i ++){
        projectTablinks[i].className = projectTablinks[i].className.replace('active', '')
    }
    document.getElementById(projectId).style.display = 'flex'
    event.currentTarget.className += ' active';
    return
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