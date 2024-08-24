//Binary search algo example 

    //Brute force
    //     function binarSearch1(arr, target) {
    //         let n = arr.length;
    //         if (n === 0) return -1;

    //         let low = 0;
    //         let high = n - 1;

    //         while (low <= high) {
    //             let mid = Math.floor((low + high) / 2);

    //             if (arr[mid] === target) return mid;
    //             else if (arr[mid] > target) high = mid - 1;
    //             else low = mid + 1;

    //         }

    //         return -1;
    //     }

    //     console.log(binarSearch1([2,5,8,9,10,15,16,20], 4));

    // //By recursion

    //     function binarySearch(arr, low, high, target) {
    //         if (low > high) return -1;

    //         let mid = Math.floor((low + high) / 2);

    //         if (arr[mid] === target) return mid;
    //         else if (arr[mid] > target) {
    //            return binarySearch(arr, 0, mid - 1, target);
    //         } else {
    //            return binarySearch(arr, mid + 1, high, target);
    //         }
    //     }

    //     console.log(binarySearch([2,5,8,9,10,15,16,20], 0, 7, 10))

//Lower Bound finding 

    //Optimal solution

    // function binarSearch1(arr, target) {
    //     let n = arr.length;
    //     if (n === 0) return -1;
    
    //     let low = 0;
    //     let high = n - 1;
    //     let lowerBound = n;
    
    //     while (low <= high) {
    //         let mid = Math.floor((low + high) / 2);
    
    //         if (arr[mid] >= target) {
    //             lowerBound = mid;
    //             high = mid - 1;
    //         }
    //         else low = mid + 1;   
    //     }
    
    //         return lowerBound;
    // }
    
    // console.log(binarSearch1([2,5,8,9,10,15,16,20], 9));

//Upper Bound 

    function upperBound(arr, x) {
        let n = arr.length;
        if (n === 0) return -1;

        let low = 0;
        let high = n - 1;
        let upperBound = n;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] > x) {
                upperBound = mid;
                high = mid - 1;
            } else {
                low = mid + 1
            }
        }
        return upperBound;
    }

    console.log(upperBound([1, 4, 7, 8, 10], 7)) 
    console.log(upperBound([1, 4, 7, 8, 10], 10))