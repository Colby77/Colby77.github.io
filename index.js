const projectPic = document.getElementById('project-pic')
const swapPic = document.getElementById('swap-pic')

let currentImg = 0

pictureSources = [
    'dndcreator1.png',
    'dndcreator2.png',
    'dndcreator3.png',
    'dndcreator4.png',
    'dndcreator5.png'
]

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