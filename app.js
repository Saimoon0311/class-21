// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
// }

// var student1 = new Student("saimoon",123);
// var student2 = new Student("ahmed",1234);

// Student.prototype.getName =function(){
//     return this.name
// }



var student = {
    name:"saimoon",
    roll : 123,
}

// console.log("roll" in student)
console.log(student.hasOwnProperty("roll"))


// for(var prop in student){
//     console.log(prop)
// }

// for(var prop in student){
//     console.log(student[prop])
// }

// for(var prop in student){
//     console.log(prop,student[prop])
// }

// Firebase databse

function savedata(){
    var name = document.getElementById("name")
    var roll = document.getElementById("roll")

    var student = {
        name : name.value,
        roll : roll.value,
        key :key
    }
// IF WE TAKE OUT KEY FROM FIREBASE DATABASE

 firebase.database().ref('student/' + key).set(student)


    // IF WE MAKE A KEY
//     var key =Math.random() * 341341341;
//     console.log(key)

//  firebase.database().ref('student/'+ key.toFixed()).set(student)

// ----XXX---XXX---

// IF FIREBASE MAKE A KEY

var key =  firebase.database().ref('student').set(student).key

// ----XXX---XXXX---
//  firebase.database().ref('student').set(student)

//  firebase.database().ref('student').push(student)



//  firebase.database().ref('student').child("student1").set(student)

//  firebase.database().ref('student/student1').set(student)


}

// function getfirebasedata(){
//     firebase.database().ref('student/-MEVmPsabmslF6I3EME5').once("value",function(data){
//         console.log(data.val())
//     })

// }

// getfirebasedata()




// function getfirebasedata(){
//     firebase.database().ref('student/-MEVmPsabmslF6I3EME5').on("child_added",function(data){
//         console.log(data.val())
//     })

// }

// getfirebasedata()


// function firebasedataremove(){
//     firebase.database().ref('student/-MEVmPsabmslF6I3EME5').remove()
    
// }

// firebasedataremove()


function editfirebasedata(){
    firebase.database().ref('student/-MEVmPsabmslF6I3EME5').set({
        key : "-MEVmPsabmslF6I3EME5",
        name : "nabeel",
        roll : "123"
    
    })

}

editfirebasedata()

