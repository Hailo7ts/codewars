/**
 * Bubble Sort
 * #Bubbleing around
 * Since everybody hates chaos and loves sorted lists we should implement 
 * some more sorting algorithms. Your task is to implement a Bubble sort 
 * (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and 
 * return a list of snapshots after each change of the initial list.e.g.
 * If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and 
 * l[3] and after that it adds [1,2,3,4] to the result, which is a list of
 * snapshots.
 */

function bubble(arr) {
    let solArr = []
    let swap = false
    
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-1; j++){
        let left = arr[j]
        let right = arr[j+1]
        
        //compare left and right value and swap if left value is
        //larger than right
        if(left > right){
          let temp = left
          arr[j] = right
          arr[j+1] = temp
          
          swap = true
          //each swap push to solution array
          solArr.push([...arr])
        }      
      }
    }
    
    return solArr
  }