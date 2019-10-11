// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello',function () {
    it('should be a defined function',function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, C-dog!" when input is C-dog', function () {
        expect(sayHello("C-dog")).toBe("Hello, C-dog!");
    });
    it('should return the string "Hello, Pat!" when input is Pat', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});
