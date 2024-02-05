import { sayHello } from "../src/sayhello";

describe('sayHello', function () : void{
    it('should return hello himawan', function() {
        expect(sayHello('himawan')).toBe('Hello himawan');
    });
});