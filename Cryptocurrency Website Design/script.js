// adding the graph
// adding the video
// make website like coindesk




var btc__ = document.getElementById("bitcoin");
var eth__ = document.getElementById("ethereum");
var doge__ = document.getElementById("dogecoin");

var settings =  {
    "async" : true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr&x_cg_demo_api_key=CG-f5HryTkMcUF2jerwxhY5v6AY",
    "method": "GET",    
    "headers": {}
}
$.ajax(settings).done(function (response){

    // JavaScript code to format the number
const btc = response.bitcoin.inr;
const eth = response.ethereum.inr;
const doge = response.dogecoin.inr; // Your number goes here

// Format the number with commas for thousands separator
btc__.innerHTML = btc.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
eth__.innerHTML = eth.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
doge__.innerHTML = doge.toLocaleString('en-US', { style: 'currency', currency: 'INR' });

console.log( btc.toLocaleString('en-US', { style: 'currency', currency: 'INR' }))

});


// https://api.coingecko.com/api/v3/ping?
