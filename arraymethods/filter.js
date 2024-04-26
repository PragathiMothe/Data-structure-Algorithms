let arr = ['a', 'b', 'b', 'c', 'a', 'd'];

function removeDuplicateArr(arr) {
    let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log("Original Array:", arr);
    console.log("Array without Duplicates:", uniqueArr);
    return uniqueArr;
}