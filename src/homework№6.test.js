import {diff, isWord, pow} from "./homework№6";
describe("test 6st task ", () => {
    const spyConsoleLog = jest.spyOn(console, 'log');
   test("returns the difference between numbers", () => {
       expect(diff(5,10 )).toEqual(5)
   });
    test("accepts a text string",() =>{

        expect(isWord("dfgsgdsd")).toBeTruthy();
        expect(isWord("dfgs gdsd")).toBeFalsy();
        expect(isWord(" ")).toBeFalsy();
    });
    test("return the raised number to the power", () =>{
        expect(pow(1,2)).toBe(1)
        expect(pow(1,2)).not.toBeNull();
    })
});