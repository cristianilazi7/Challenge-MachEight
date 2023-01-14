/**
 * 
 * Thank you for taking the time to complete this sample project. We're a tech
 * first company and we value our engineers tremendously. We're are looking for
 * hard working, smart engineers with either excellent experience or lots of potential.
 * Sample output is shown below.
```
> app 1,9,5,0,20,-4,12,16,7 12
​
+ 12,0
+ 5,7
+ 16,-4
​
```
 */


/** 
 * This solution has a time complexity of O(n^2) as we are iterating twice over the numbers list. 
*/
 function sumNombuerInArray(numbers,target) {
    let pairs = [];
      for (let number of numbers ) {
        for (let index = 1; index < numbers.length; index++) {
                if (number + numbers[index] === target) {
                    if (!pairs.some((data)=> data.a === number || data.b === number)) {
                        pairs.push({a:number,b:numbers[index]});
                    }
                } 
        }
      }

      return pairs;
    
  }


  /**
   * In this solution, we are using an Array to keep track of the numbers that have been seen so far. By using a set, 
   * we can check if the complement of a number has been seen so far in O(1) time, 
   * which improves the overall time complexity of the function to O(n).
   */
  function app(numbers,target) {
    let pairs = [];
    let allreadyNumbers = new Set();
      for (let number of numbers ) {
        
        let otherNumberToSum = target - number;
  
        if (allreadyNumbers.has(otherNumberToSum)) {
            pairs.push([otherNumberToSum, number]);
        }
        allreadyNumbers.add(number);
        
      }
  
      return pairs;
    
  }

  console.log('iterating twice over the numbers list');
  console.log(sumNombuerInArray([1,9,5,0,20,-4,12,16,7],0));
  console.log('in O(1) time');
  console.log(app([1,9,5,0,20,-4,12,16,7],0));