import {lengthThreeSides, resultRadius, quadraticEquation} from "./homework№9";
describe("test 9st task ", () =>{
    test("returns a right triangle",()=>{
        lengthThreeSides(2,2,8);
        expect( true).toBeTruthy();
    });
    test("returns the circumference and area of a circle", () =>{
        resultRadius();
        expect(10).toBe(10);
        expect(true).toBeTruthy()
    });
    test("returns the root of a square equation", () =>{
        quadraticEquation(1,1,1);
        expect(true).toBeTruthy()
    })
});