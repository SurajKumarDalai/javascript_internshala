var getConcatenation = function(nums){
    let ans = new Array(2*nums.length);
    let j = nums.length;

    for(let i=0; i<j; i++){
        ans[i] = nums[i];
        ans[j+i] = nums[i];
    }
    return ans;
};

// alternative method
var getConcatenation = function(nums) {

    let result = [];

    for(let i = 0; i < nums.length; i++){

        result.push(nums[i]);

    }

    for(let i = 0; i < nums.length; i++){

        result.push(nums[i]);

    }

    return result;

};