const mybutton=document.querySelector('#mybutton')
const mymenu=document.querySelector('#mymenu')
const menucontainer=document.querySelector('#menucontainer')

mybutton.onclick=function(event){
    event.preventDefault()
    console.log("Click button")
    if(mymenu.classList.contains('hidden'))
    {
        mymenu.classList.remove('hidden')
        menucontainer.classList.add('relative')
        mymenu.classList.add('absolute')
        mymenu.classList.add('top-12')
        mymenu.classList.add('left-0')
        mymenu.classList.add('bg-yellow-500')
        mymenu.classList.add('text-gray-700')
    }
    else{
        mymenu.classList.add('hidden')
    }
}