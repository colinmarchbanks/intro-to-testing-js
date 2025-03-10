"use strict";

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

describe('isVowel',function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if passed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if passed "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed string like "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed no value', function () {
        expect(isVowel()).toBe(false);
    });
    it('should should return false when passed null', function () {
        expect(isVowel(null)).toBe(false);
    });
});

describe('add',function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number', function () {
        expect(typeof add()).toBe('number');
    });
    it('should return 5 when passed 2 and 3', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return 10 when passed 6 and 4', function () {
        expect(add(6,4)).toBe(10);
    });
    it('should return -12 when passed -3 and -9', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when passed "5" and 6', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when pass "10" and "-4"', function () {
        expect(add("10","-4")).toBe(6);
    });
    it('should return NaN when passed "banana" and "split"', function () {
        expect(add("banana","split")).toBeNaN();
    });
    it('should return NaN when passed 2 and "apples"', function () {
        expect(add(2,"apples")).toBeNaN();
    });
    it('should return NaN when passed with no arguments', function () {
        expect(add()).toBeNaN();
    });
});
