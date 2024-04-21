const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {// n - maxSum
	//list of subarrays, sum of each subarray <= n
	let ans = [];
	let tempAns = [];
	let sum = 0;
	for(let elem of arr){
		sum += elem;
		if(sum > n){
			ans.push(tempAns);
			tempAns = [];
			sum = elem;
		}
		tempAns.push(elem);
	}
	if(tempAns.length > 0) { // push the last subarray if it's not empty
		ans.push(tempAns);
	}
	return ans;
};   
// console.log(divide(arr, 5)); // replace prompt with a fixed value for testing
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
// module.exports = divide;







