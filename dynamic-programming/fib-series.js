//Memoized version using recursion
function fibMemoized(n) {
  let memo = [0, 1, 1];
  if (memo[n] !== undefined) return memo[n];
  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;

  return res;
}

//Bottoms up approach using arrays
function fib(n) {
  let nums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  return nums[n];
}

//Bottoms up approach using objects
function fib2(n) {
  if (n <= 2) return 1;
  const memo = {};
  memo[1] = 1;
  memo[2] = 1;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

const res = fib2(1000);
console.log(res);
