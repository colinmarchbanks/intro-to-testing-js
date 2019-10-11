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

describe('isFive',function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true if value is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if value is "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven',function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean value', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with strings like "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when executed with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with false',function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed with true',function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed with no argument', function () {
        expect(isEven()).toBe(false);
    });

});
