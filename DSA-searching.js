//Binary search algo example 

    //Brute force
        function binarSearch(arr, target) {
            let n = arr.length;
            if (n === 0) return -1;

            let low = 0;
            let high = n - 1;

            while (low <= high) {
                let mid = Math.floor((low + high) / 2);

                if (arr[mid] === target) return mid;
                else if (arr[mid] > target) high = mid - 1;
                else low = mid + 1;

            }

            return -1;
        }

        console.log(binarSearch([2,5,8,9,10,15,16,20], 4));

