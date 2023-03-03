    var arr=[1,2,3,'3a',1,2];
    function sumArr(arr){
        var sum=0;
        for(var i=0;i<arr.length;i++){
            sum+=arr[i];

        }
        return sum;
    }
    console.log(sumArr(arr));