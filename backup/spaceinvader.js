const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

class player{
    constructor(){
        this.position ={
            x: 200,
            y: 200
        }
        this.velocity = {
            x: 0,
            y: 0
        }
const image = new image()
image.src = 'ship1.png'
        this.width
        this.height
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        C.drawImage()
    }
}