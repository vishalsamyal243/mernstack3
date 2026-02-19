// const heading = document.getElementById("heading")
// const button = document.getElementById("button")

// button.onclick = function(){
//      heading.textContent = "learn javascript"
// }

// function changeContent(){
//     heading.textContent = "learn javascript"
// }

// button.addEventListener("click",function(){
//      heading.textContent = "learn javascript"
// })

// function changeContent(){
//     heading.textContent = "learn javascript"
// }
// button.addEventListener("click",changeContent)

// button.addEventListener("mouseover",function(){
//      heading.textContent = "learn javascript"
//      heading.style.backgroundColor = "green"
//      heading.style.color = "orange"
// })

// const form = document.getElementById("frm")

// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     console.log(e)
//     alert("form is submit successfully")
// })

// const inp = document.getElementById("abc")

// inp.addEventListener("input",function(){
//     console.log(inp.value)
// })

// const img = document.getElementById("image")

// img.addEventListener("load",function(){
//     alert("resource has been loaded successfully")
// })

const blue = document.getElementById("blue")
const result = document.getElementById("result")

blue.addEventListener("change",function(){
    result.innerHTML = blue.value
   alert("element  focus")
})

// blue.addEventListener("keypress",function(e){
//     // alert("keypress event is perform ")
//     console.log(e.key)
// })

// const parent = document.getElementById("parent")
// const child = document.getElementById("child")

// parent.addEventListener("click",function(){
//     alert("parent container is clicked")
// })

// child.addEventListener("click",function(e){
//     e.stopPropagation()
//     alert("child container is clicked")
// })