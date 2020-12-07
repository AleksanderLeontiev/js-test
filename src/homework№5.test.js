import {newArray, arrayTwiceAsMuch, minMaxElement} from "./homework№5";
describe("test 5st task ", () => {
    let arr = [1,2,3,4,5,6,7,8,9];
    const spyConsoleLog = jest.spyOn(console, 'log');
    beforeEach(() => {

    });
    it("creates an array", () => {
        newArray(arr);
        expect(arr).toBeDefined();
    });
    it("creates an array two larger than the original", () => {
        arrayTwiceAsMuch(arr);
        expect(arr).toEqual(
            expect.arrayContaining(arr));
    });
    it('does not match without an expected number 2', () => {
        expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
            expect.arrayContaining(arr),
        );
    });
    it("show min and max number", () => {
        minMaxElement(arr);
        expect(arr).toContain(9)

    });
});