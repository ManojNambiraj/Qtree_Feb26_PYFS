// Operators:
    // Arithmetic op
    // Assignment op
    // Comparison op --> Boolean
        // (==, ===, !=, !==, <, <=, >, >=)

        // let age = 18
        // let result

        // result = (age == 18)
        // result = (age === 18)
        // result = (age != 18)
        // result = (age !== 18)
        // result = (age < 18)
        // result = (age <= 18)
        // result = (age >= 18)

        // console.log(result);

    // Logical op
        // (&&, ||, !)

        // &&

            // (true)  && (true)  --> true
            // (true)  && (false) --> false
            // (false) && (true)  --> false
            // (false) && (false) --> false

        // ||

            // (true)  || (true)  --> true
            // (true)  || (false) --> true
            // (false) || (true)  --> true
            // (false) || (false) --> false

        // !

            // (true)  -->  false
            // (false) --> true

                // let age = 35

                // let result = (age > 18) && (age < 30)
                // let result = (age > 18) || (age < 30)

                // console.log(!result);
        
    // Ternary op ---> ES6

        // let age = 16
        // let result

        // result = (age > 18) ? "Eligible for voting" : "Not Eiligible for voting"

        // console.log(result);

    // Type op

        // let a = 10

        // console.log(a, typeof(a))
    
// Arrays:

    // let a = [10, 20, 30, 40, 50, 60, 70]
    // // index  0   1   2   3   4   5.....
    // console.log(a);
    // console.log(a[0]);
    // console.log(a[3]);

    // a[3] = 500

    // console.log(a.length);

    // a.push(800)
    // a.pop()
    // a.shift()
    // a.unshift(800)

    // console.log(a);

// Objects: {key: value}

    // let student = {name: "Raj", age: 21, dept: "IT", mobile: 9872112121}

    // console.log(student);
    // console.log(student.name)
    // // console.log(student["name"]);

    // student.name = "Raj Kumar"
    // student.email = "raj@gmail.com"

    // console.log(student);

// DRY -> Don't repeat your code

// Destructuring:

    // let fruits = ["apple", "banana", "orange", "grapes", "watermelon"]

    // let [red, yellow, orange, violet, green] = fruits

    // console.log(red);
    // console.log(yellow);

        // let student = {
        //     name: "Raj", 
        //     age: 21, 
        //     dept: "IT", 
        //     mobile: 9872112121
        // }

        // let {name, age, mobile} = student

        // console.log(name);
        // console.log(age);
        // console.log(student.mobile);

