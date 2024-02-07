/**
 * The Supermarket Queue
 * There is a queue for the self-checkout tills at the supermarket. Your 
 * task is write a function to calculate the total time required for all 
 * the customers to check out! input customers: an array of positive 
 * integers representing the queue. Each integer represents a customer, 
 * and its value is the amount of time they require to check out. n: a 
 * positive integer, the number of checkout tills. output The function 
 * should return an integer, the total time required.
 */

function queueTime(customers, n) {
    //fill queue array with 0
    let queueArr = Array(n).fill(0)

    //use iteration on queueArr 
    customers.array.forEach((customer) => {
        //place customer in queue
        queueArr[0] += customer

        //sort queue so that customer is added to shortest queue
        queueArr.sort((a,b)=> a-b)
    })

    //returns the largest/last number in queueArr
    return queueArr[queueArr.length-1]    
  }