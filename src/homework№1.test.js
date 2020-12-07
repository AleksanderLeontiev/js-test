import { sumNumber, multiNumber, showLengthString, checkCurrentData } from "./homework№1.js";
const  spyConsoleLog = jest.spyOn(console, 'log');
describe("test 1st task ", () => {

  it("test the sum of two numbers", () => {
    sumNumber(1,2);

    expect(spyConsoleLog).toHaveBeenCalledWith(3);
  });

  it("test multiplication of two numbers", () => {
    multiNumber(1, 2);
    expect(spyConsoleLog).toHaveBeenCalledWith(2);
  });

  it ("it should show a total length of string", () => {
    showLengthString("one", "two");
    expect (spyConsoleLog).toHaveBeenCalledWith(6)
  });

  it( "it should get sum of 3 numbers", () =>{
    checkCurrentData("100");
    expect(spyConsoleLog).toHaveBeenCalledWith(3)
  });

});

