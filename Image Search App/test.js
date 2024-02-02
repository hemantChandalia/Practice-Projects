for(var i = 1; i <= 10; i++)
{
    printTable(i);
    println("");
}

function printTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + " * " + i + " = " + n * i;
        println(row);
    }
}
console.log(5);
console.log("");

// var prod = 1;

// for(var i = 1; i <= 10; i++)
// {
//     prod *= i;
// }

// console.log(prod);