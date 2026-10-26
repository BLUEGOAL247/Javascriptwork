console.log("QUESTION 1")
const student ={
    name: "Ade Toheeb",
    age: 16,
    school: "Molek Schools",
    bestSubject: "Mathematics",
    isGraduated: true
};
console.log("My name is" + " " + student.name + " " + "and I am" + " " + student.age)

// ADDING A PROPERTY(CITY)
student.city="Osogbo";
// DELETING A PROPERTY(is Graduated)
delete student.isGraduated;
// LOG
console.log(student["name"])
console.log(student["age"])

// QUESTION 2
console.log("QUESTION 2");
const car={
    brand:"Toyota",
    model:"Corolla",
    year: 2026,
    engineOn: false,
    start(){
        this.engineOn=true;
        return "Engine Started"
    },
    getInfo(){
        return "This is a " + this.year + " " + this.brand + " " + this.model;
    }
};
console.log(car.start());
console.log(car.getInfo());
// QUESTION 3
console.log("QUESTION 3")
const laptop={
     brand:"HP EliteBook",
     price: "$510",
     specs:{
        RAM:"8GB",
        storage:"512GB SSD",
        processor:"Intel Core i7"
     }
};
// LOG PROCESSOR
console.log(laptop.specs.processor);
laptop.specs.RAM="16GB";
laptop.specs.color="Silver";
// CHECK IF IT WORKS
console.log("Checking if it Works");
console.log(laptop);
// QUESTION FOUR
console.log("QUESTION 4");
const user1={
    username:"Tunde123",
    password: "1234"
};
console.log("username" in user1);
user1.password="newPassword123";
console.log(Object.keys(user1));
console.log(Object.values(user1));

// QUESTION FIVE
console.log("Question 5");
const menuItem={
    name:"Jollof Rice",
    price:"3000",
    isAvailable: true,
    category:"Rice",
    order(){
        if (this.isAvailable === true){
            return this.name + " ordered sucessfully for " + this.price;
        }
        else{
            return "Sorry Its not Available";
        }
    }
};
console.log(menuItem.order());
menuItem.isAvailable= false;
console.log(menuItem.order());
