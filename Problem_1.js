// Intersection of Two Arrays II (https://leetcode.com/problems/intersection-of-two-arrays-ii/)

// HashMap
// Time Complexity : O(m+n)
// Space Complexity : O(n)

// Binary Search
// Time Complexity : O(nlog(m))
// Space Complexity : O(1)

// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
// Hashmap
//     if(nums2.length < nums1.length)
//         return intersect(nums2, nums1);

//     let map = new Map();
//     nums1.forEach( n => {
//         if(map.has(n)){
//             map.set(n, map.get(n)+1);
//         } else 
//             map.set(n,1);
//     });
//     let result = [];
//     nums2.forEach(n => {
//         if(map.has(n) && map.get(n)>0){
//             result.push(n);
//             map.set(n, map.get(n)-1);
//         }
//     })
//     return result;
// };

var binarySearch = (nums, low, high, target) => {
    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));
        if (nums[mid] === target) {
            if (mid === low || nums[mid - 1] < nums[mid])
                return mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
var intersect = function (nums1, nums2) {
    if (nums1 === null || nums1.length === 0 || nums2 === null || nums2.length === 0)
        return [];

    // nums1 is always smaller
    if (nums2.length < nums1.length)
        return intersect(nums2, nums1);

    // BinarySearch

    // Sorting the arrays
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let result = [];
    let low = 0;
    let high = nums2.length - 1;
    // Iterate over smaller array
    for (let i = 0; i < nums1.length; i++) {
        // 1st occurence index
        let bsIndex = binarySearch(nums2, low, high, nums1[i]);
        if (bsIndex > -1) {
            // Exists
            result.push(nums1[i]);
            low = bsIndex + 1;
        }
    }
    return result;

};