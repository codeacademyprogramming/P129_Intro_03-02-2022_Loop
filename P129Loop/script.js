// let a = parseInt(prompt("Ededi Daxil Et"));

// if (a >= 0 && a <= 5) 
// {
//     if (a == 5) {
//         console.log("Ededn 5-dir")
//     }else{
//         a++
//     }

//     if (a == 5) {
//         console.log("Ededn 5-dir")
//     }else{
//         a++
//     }

//     if (a == 5) {
//         console.log("Ededn 5-dir")
//     }else{
//         a++
//     }

//     if (a == 5) {
//         console.log("Ededn 5-dir")
//     }else{
//         a++
//     }

//     if (a == 5) {
//         console.log("Ededn 5-dir")
//     }else{
//         a++
//     }

//     if (a == 5) {
//         console.log("Ededn 5-dir")
//     }else{
//         a++
//     }
// }else
// {
//     console.log("Duzgun Deyer Daxil Et")
// }

//Loop
// let a = parseInt(prompt("Ededi Daxil Et"));


// let check = true

// while (a <= 5) 
// {
//     if (a == 5) 
//     {
//         console.log("Ededn 5-dir");
//     }
//     a++;
// }
// a = 100;
// a=500;
// while (a >= 5) 
// {
//     if (a == 5) 
//     {
//         console.log("Ededn 5-dir");
//     }
//     a--;
// }

// do 
// {
//     console.log("Ededn 5-dir")
//     a++
// } while (a<=5);

// for (let i = a; i <= 5; i++) 
// {
//     if (i == 5) 
//     {
//         console.log("Ededn 5-dir")
//     }
// }

//Task -1 v1
// let i = 0;
// let word = "Hello World";

// while (i < 10) 
// {
//     console.log(i+" "+word);
//     i++;
//     console.log(i);
// }

//Task -1 v2
// let i = 1;

// while (i <= 10) 
// {
//     console.log(i+" Hello World");
//     i++;
//     console.log(i);
// }

//Task -1 v3
// let i = 0;

// do 
// {
//     console.log(i+" Hello World");
//     i++;
//     console.log(i);
// } while (i < 10);

//Task -1 v4
// for (let i = 0; i <= 10; i++) {
//     console.log(i+" Hello World");
//     console.log(i);
    
// }

let i = 0;
let evenSum = 0;

while (i<=50) 
{
    if (i % 2 == 0) 
    {
        console.log(true)
        evenSum+=i//evenSum = evenSum + i
        console.log(i);
        console.log(evenSum);
    }else{
        console.log(false)
    }

    i++
}

console.log(evenSum);