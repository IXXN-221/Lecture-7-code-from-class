let pageStats = {
    firstExit: true,
    mouseOverBox: 0
}

function changeColor(){
    let button = document.getElementById('heyo');
    pageStats.mouseOverBox++

    if(button.style.backgroundColor==='blue'){
        button.style.backgroundColor = 'green'
    } else {
        button.style.backgroundColor = 'blue'
    }
}

function subToEmail(){


    if(pageStats.firstExit){
        alert('where are you going?')
        pageStats.firstExit = false
        console.log(pageStats.firstExit)
    }
}