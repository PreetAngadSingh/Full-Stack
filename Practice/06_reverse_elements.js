let arr = [10,20,30,40,50,60]
console.log("Old array",arr);

for(let i=0;i<arr.length/2;i++){
    let temp = arr[i];
    arr[i]=arr[arr.length-i-1];
    arr[arr.length-i-1]=temp;
}
console.log("Reveresed Array" + arr)