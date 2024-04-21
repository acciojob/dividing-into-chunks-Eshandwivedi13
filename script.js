const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {// n - maxSum
	//list of subarrays, sum of each subarray <= n
	let ans = [];
	let tempAns = [];
	int sum = 0;
	for(let elem of arr){
		sum += elem;
		if(sum > n){
			ans.push(tempAns);
			tempAns = [];
			tempAns.push(elem);
			continue;
		}
		tempAns.push(elem);
	}
	return ans;
};    

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
