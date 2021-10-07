const factorial = (x, y) => {
    if(x===y){
        return 1;
    }
    else{
        return x*factorial(x-1 , y);
    }
};

const permutation = (n,r) => factorial(n ,n-r);

const combination = (n,r) =>factorial(n, n-r)/factorial(r, 1);

const multiPermutation = (n,r) => Math.pow(n,r);

const multiCombination = (n,r) => factorial(n+r-1, n-1)/factorial(r, 1);

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};