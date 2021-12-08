function magic_square(game){
    var magic=15;
    var i=0;
    var sum=0;
    while(i<game.length){
        var colomn=0;
        while(colomn<game.length){
            sum=sum+game[i][colomn]
            colomn++   
        i++   
        }
        console.log(sum)
    }
    var j=0;
    var sum1=0;
    while(j<game.length){
        var row=0;
        while(row<game.length){
            sum1=sum1+game[j][row]
            row++
        j++
        }
        console.log(sum1)
    }
    var k=0;
    var sum2=0;
    while(k<game.length){
        let digonal=0;
        while(digonal<game.length){
            sum2=sum2+game[digonal][k]
            digonal++
        k++
        }
        console.log(sum2)
    }
    if(sum==magic && sum1==magic && sum2===magic){
        console.log("oooo wow! this is magic square game")
    }
    else{
        console.log("oooo! this is not magic square")
    }
}
magic_square(game=[[8,3,4],[1,5,9],[6,7,2]])