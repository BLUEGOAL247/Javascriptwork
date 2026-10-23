 // Student Profile card
        const student = {
            name: "Samuel",
            age: 10,
            school: "OICHUB",
            bestsubject: "Mathematics",
            isGraduated: false,
        };

        console.log("My name is" + " " + student.name + " " + "and I am" + " " + student.age)
        student.city = "Abuja",
        delete student.age,

        console.log(student.name + " is " + student.age)

        //Car Object with method

        const car = {
            brand: "Toyota",
            model: "camry",
            year: "2016",
            engineOn: false,
            start() {
                this.engineOn = true;
                return "Engine started";
            },

            getInfo() {
                return "This is a" + " " + this.year + " " + this.brand + " " + this.model;
            }
        };
         
        console.log(car.start())
        console.log(car.getInfo())
        console.log(car.engineOn)

        //Nested object - My laptop

        const laptop = {
            brand: "HP Laptop",
            price: "$700",
            specs: {
                ram: "8GB",
                storage: "512GB SSD",
                processor: "Intel Core i5",
            }

        }

        console.log(laptop.specs.processor);

        laptop.specs.ram = "16GB";
        laptop.specs.color = "White";

        //Object comparison/update

        const user1 = {
            username: "Tunde123",
            password: "1234",
        }
        let result = ("username" in user1)
        console.log(result);
        user1.password = "newpassword123";
        console.log(Object.keys(user1))
        console.log(Object.values(user1))

        //Mini project - Restaurant menu item

        const menuItem = {
            name: "chocolate cake",
            price: "$20",
            isAvailavable: true,
            category: "desserts",
            order() {
                if (this.isAvailavable === true){
                     return this.name + " ordered successfully for " + this.price
                }
                else{
                    return "sorry, is not available";
                }
            }
        }
         
        console.log(menuItem.order());
        menuItem.isAvailavable = false;
        console.log(menuItem.order());

