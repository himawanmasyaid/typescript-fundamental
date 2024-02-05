
describe('If Statement', function() {

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