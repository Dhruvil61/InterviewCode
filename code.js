console.log("Painter's Partition Problem-II");
var a=[5,10,30,20,15], n=5, k=3
var left = 0, right = 0;
for (var i = 0; i < n; i++) {
left = Math.max(left, a[i]);
right += a[i];
}
var result = -1;
while (left <= right) {
var mid = parseInt((left + right) / 2);
if (getPainters(a, n, mid) <= k) {
  result = mid;
  right = mid - 1;
} else {
  left = mid + 1;
}
}
console.log("Answer : " +result);

function getPainters(a,n,k) {
  var sum = 0, numberOfPainters = 1;
  for (var i = 0; i < n; i++) {
    var x = a[i];
    sum += x;
    if (sum > k) {
      sum = x;
      numberOfPainters++;
    }
  }
  return numberOfPainters;
}


// solve sudoku
console.log("---solve sudoku---");
var grid = [[3,0,6,5,0,8,4,0,0], [5,2,0,0,0,0,0,0,0], [0,8,7,0,0,0,0,3,1], [0,0,3,0,1,0,0,8,0], [9,0,0,8,6,3,0,0,5], [0,5,0,0,9,0,6,0,0], [1,3,0,0,0,0,2,5,6], [0,0,0,0,0,0,0,7,4], [0,0,5,2,0,6,3,0,4]]
// checking invalid scenarios
var flag=false;
for(var i=0;i<9; i++){
    var rowObj={};
    var colObj={};
    for(j=0;j<9;j++){
        if(grid[j][i] != 0 && colObj[grid[j][i]]){
            flag= true;
        }
        if(grid[i][j] != 0 && rowObj[grid[i][j]]){
            flag=true
        }
        if(flag){
            break;
        }
        rowObj[grid[i][j]] = 1;
        colObj[grid[j][i]] = 1;
    }
    if(flag){
         break;
    }
}
if(flag){
    console.log("Invalid Sudoku False")
}



// Happy number 
console.log("---Happy Number Problem---");
var num = 10;
for(var j=num+2; j<20; j++){
    var flag = false;
    var temp = j;
    for(var i=0; i<10; i++){
        if(flag){
            break;
        }
        var num1 = parseInt(temp/10);
        var num2 = temp % 10;
        temp = num1*num1 + num2*num2;
        if(temp == 1)
            flag = true;
    }
    if(flag){
        console.log("Next Happy number is : "+j);
        break;
    }
}

//palindrome
console.log("---Palidrome Problem---");
var str = "aacecaaa",palindromeStr, flag=true, count=0;
var temp = "";
while(flag){
    var ind = parseInt(str.length-1)-count;
    temp = temp + str[ind];
    palindromeStr = temp + str;
    count++;
    if(palindromeStr.split('').reverse().join('') == palindromeStr){
        flag=false;
    }
}
console.log("minimum letters added : "+ count);