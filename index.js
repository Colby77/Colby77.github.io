const dndPic = document.getElementById('project-pic')
const pythonBlockchainPic = document.getElementById('python-blockchain-pic')
const swapPicDnd = document.getElementById('swap-pic-dnd')
const aboutCats = document.getElementsByClassName('about-cat')
const projectCategories = document.getElementsByClassName('project-category')

const aboutTablinks = document.getElementsByClassName('about-tablink')
const projectTablinks = document.getElementsByClassName('project-tablink')

let dndImg = 0
let pythonBlockchainImg = 0

dndPictureSources = [
    'dndcreator1.png',
    'dndcreator2.png',
    'dndcreator3.png',
    'dndcreator4.png',
    'dndcreator5.png'
]

pythonBlockchainPictureSources = [
    'fastapi_docs.png',
    'blockchain1.png',
    'blockchain2.png'
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


// swapPicDnd.addEventListener('click', () => {
//     console.log(dndImg)
//     // console.log(value)
//     if(dndImg <= 4){
//         projectPic.src = pictureSources[dndImg]
//         dndImg++
//     }else{
//         dndImg = 0
//         projectPic.src = pictureSources[dndImg]
//         dndImg++
//     }
// })

const changePic = (type) => {
    console.log(type)
    if(type === 'dnd'){
        if(dndImg <= 4){
            dndPic.src = dndPictureSources[dndImg]
            dndImg++
        }else{
            dndImg = 0
            dndPic.src = dndPictureSources[dndImg]
            dndImg++
        }
    }else if(type === 'pythonBlockchain'){
        if(pythonBlockchainImg <= 2){
            pythonBlockchainPic.src = pythonBlockchainPictureSources[pythonBlockchainImg]
            pythonBlockchainImg++
        }else{
            pythonBlockchainImg = 0
            pythonBlockchainPic.src = pythonBlockchainPictureSources[pythonBlockchainImg]
            pythonBlockchainImg++
        }
    }
}