let kick = document.getElementById('kick')
let snare = document.getElementById('snare')
let hat = document.getElementById('hat')
let hihat = document.getElementById('hihat')
let cymbal = document.getElementById('cymbal')
let tom = document.getElementById('tom')

function sound (sd){
    new Audio(sd).play()

}

const drumKick = '/drumpack/kick.wav'
const drumSnare = '/drumpack/snare.wav'
const drumHat = '/drumpack/hat.wav'
const drumHihat = '/drumpack/hihat.wav'
const drumCymbal =  '/drumpack/cymbal.wav'
const drumTom =  '/drumpack/tom.wav'

kick.addEventListener('click' , () => {
   sound(drumKick)
})

snare.addEventListener('click' , () => {
    sound(drumSnare)
 })

hat.addEventListener('click' , () => {
    sound(drumHat)
 })

 hihat.addEventListener('click' , () => {
    sound(drumHihat)
 })

 cymbal.addEventListener('click' , () => {
    sound(drumCymbal)
 })

 tom.addEventListener('click' , () => {
    sound(drumTom)
 })