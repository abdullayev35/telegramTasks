function countSpaces(text){
    let space = ' '
    let count = 0
    for(let i = 0; i<text.length; i++){
        if(text.charAt(i) == space){
            count++
        }
    }
    console.log(
        count
    )
}
countSpaces(' sadsad asdas sddsds s')