
import {svg} from './data.js'

const div = document.querySelector(".svg1")
const  child = document.createElement("div")
const arrow = document.querySelector('.arrow')
const title = document.querySelector('.title')
const ul = document.querySelector('.cont')
const menu = document.querySelector('.hamburger')
const section = document.querySelector('.cards')
child.classList.add("styles")
child.innerHTML = `${svg}`

div.appendChild(child)

menu.addEventListener('click', display )

function display() { 
    ul.classList.toggle('show')
    arrow.classList.toggle('hide')
    title.classList.toggle('hide')
}


