// Array Methods --> MRF Methods --> ES6

    // Map

        // let nums = [2, 5, 81, 76, 55, 22, 36, 93, 98, 3]

        // for(let i = 0; i < nums.length; i++){
        //     console.log(nums[i]);
        // }

            // let result = nums.map((item, index) => {
            //     return item * 2
            // })

            // console.log(result);

    // Reduce

        // let nums = [2, 5, 81, 76, 55, 22, 36, 93, 98, 3]
            
        // let result = nums.reduce((prev, curr) => (prev + curr) / nums.length)

        // console.log(result);

    // Filter

        // let nums = [2, 5, 81, 76, 55, 22, 36, 93, 98, 3]

        // let result = nums.filter((item) => item % 2 == 0)

        // console.log(result);

    // Example: Old

        // let temp = []

        // for(let i = 0; i < nums.length; i++){
        //     if(nums[i] % 2 == 0){
        //         temp.push(nums[i])
        //     }
        // }

        // console.log(temp);

// Event Listeners:

let bankBalance = 0
let amt = 0

function handle(event){
    amt = Number(event.target.name ,event.target.value)

    console.log(event.target.name, event.target.value);
    
}

function Deposite(){

    bankBalance += amt

    console.log("Deposite: ", bankBalance);
}

function Withdraw(){
    bankBalance -= amt

    console.log("Withdraw: ", bankBalance);
    
}