describe('If Statement', function() {

    it('should support in typescript', function () {

        const examValue = 90;

        if (examValue > 80) {
            console.info("Good");
        } else if (examValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }

    });

    it('should support ternary operator', function () {

        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.info(say);

    });

    it('should support switch statement', function () {

        function sayHello(name: string): string {
            switch (name){
                case "Umar" :
                    return "Hi Umar";
                case "Syaid":
                    return "Hi Syaid";
                default :
                    return "Hello";
            }
        }

        console.info(sayHello("Umar"));
        console.info(sayHello("Syaid"));
        console.info(sayHello("Himawan"));

    })
})