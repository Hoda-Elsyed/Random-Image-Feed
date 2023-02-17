const container = document.querySelector('.container')

createRandomImages()

function createRandomImages(){
    for (let index = 0; index < 30; index++) {
        
        const image = document.createElement('img');
        image.src = `https://source.unsplash.com/random/300*30${index}`
        container.appendChild(image)
        
    }
}