function changeButtonSize(){
    // document.getElementsByTagName('body')[0].style.backgroundColor = 'pink'

    let divTag = document.getElementsByTagName('body')[0];

    if(divTag.style.backgroundColor == 'pink'){

        divTag.style.backgroundColor = 'white'

    } else {

        divTag.style.background = 'pink'
    }


}