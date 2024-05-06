function H (key)
{
    x = ( key + 5 ) * ( key - 3 );
    x = Math.floor( x / 7 ) + key;
    x = x % 13;
    return x;
}

const arr = [17, 22, 73, 56, 310, 100, 230, 12, 42, 18, 19, 24, 49];
for (var i = 0; i < 13; i++){
    var h = H(arr[i]);
    console.log(arr[i]+": "+h);
}