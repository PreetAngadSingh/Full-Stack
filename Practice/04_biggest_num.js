let arr = [10,20,40,50,33];
let max=-999;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("The Largest Number is " + max);