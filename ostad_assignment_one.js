// Write a function to calculate the sum of the first N natural numbers.

// In this problem, you need to implement the sum_of_natural_numbers function and calculate the sum of the first N natural numbers. The function should take an integer n as input and return the sum of the numbers from 1 to N.

// Make sure to consider both the time complexity (how long it takes to run the function) and the space complexity (how much memory is used) in your solution.

const calcSum = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};

// Time Complexity for the above solution is O(N) and space complexity is O(1)

console.log(calcSum(101));
