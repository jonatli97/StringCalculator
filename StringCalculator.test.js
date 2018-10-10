const add = require("./calcluator");
it("should return zero on an empty string", ()=>{
    expect("").toBe(0);
});

it("should return number when only one number is in the string", ()=>{
    expect("5").toBe(5);
});

it("should return sum of two given numbers", ()=>{
    expect(add("1,2")).toBe(3);
});