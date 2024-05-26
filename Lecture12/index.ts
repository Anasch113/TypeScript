// Map and filter method in typescript


const numbers:number[] = [12, 5, 12, 89, 89, 23]


const doubleNumber: number[] = numbers.map((value:number)=> value * 3)

console.log(doubleNumber)



// Filter Method


const evenNumbers: number[] = numbers.filter((value:number) => value % 2 === 0)

console.log(evenNumbers)


// Challenge

// Function to find the max value from the array

const findMaxValue = (numbers:any):number =>{
    let maximumValue:number = 0
    for(let i:number=0; i < numbers.length; i++){
        if (maximumValue < numbers[i]){
            maximumValue = numbers[i];
        }
    }
    return maximumValue

}

console.log(findMaxValue([4,2,42,2,3]));


function findMaxUsingFilter(arr: number[]): number | undefined {
    if (arr.length === 0) {
      return undefined;
    }
  
    let max = arr[0];
    arr.filter(value => {
      if (value > max) {
        max = value;
      }
    });
    return max;
  }
  
  function findAverage(arr: number[]): number | undefined {
    if (arr.length === 0) {
      return undefined;
    }
  
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
  }
  
  // Example usage
  const numberss = [10, 20, 30, 40, 50];
  
  const max = findMaxUsingFilter(numberss);
  const averagee = findAverage(numberss);
  
  console.log(`Maximum Value: ${max}`); // Output: Maximum Value: 50
  console.log(`Average Value: ${averagee}`); // Output: Average Value: 30
  




