 import{agePrompt, roleName, createNewUser} from "./homework№4"

 const  spyConsoleLog = jest.spyOn(console, 'log');
describe("show enters name", () => {
  it(" ", () => {
    const age = ["23"];
    const prompt = jest.spyOn(window, "prompt").mockImplementation(() =>age );
      agePrompt();
    expect(spyConsoleLog ).toHaveBeenCalledWith(`23`);
    expect(spyConsoleLog ).not.toHaveBeenCalledWith(`24`);
    expect(spyConsoleLog ).not.toBeNull();
  });
    it("returns a copy of the object ", () => {
        const role = ["admin"];
        const prompt = jest.spyOn(window, "prompt").mockImplementation(() =>role );
        roleName();
        expect(spyConsoleLog ).toHaveBeenCalledWith(`admin`);
        expect(spyConsoleLog ).not.toBeNull();
        expect(spyConsoleLog).not.toBeUndefined();
    });
    it( "writes values to new variables", () => {
        createNewUser();
        expect(spyConsoleLog).toHaveBeenCalledWith("admin", 124, null)
    })

});


