// Iterative Solution
var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
};

// Recursive solution (Tail recursion not used as it is not space optimised in javascript)
var sum_to_n_b = function(n) {
    if (n <= 1) return n;
    return n + sum_to_n_b(n - 1);
};

// Gauss Summation
var sum_to_n_c = function(n) {
    return n * (n + 1) / 2;
};

var test = function() {
    console.log(sum_to_n_a(100));
    console.log(sum_to_n_b(100));
    console.log(sum_to_n_c(Math.sqrt(Number.MAX_SAFE_INTEGER) / 2));
}

test();