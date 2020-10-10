let person = {
    age: 31,
};

const propName = 'age';
person = null;

console.log(person?.[propName]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// obj.val?.prop
// obj.val?.[expr]
// obj.arr?.[index]
// obj.func?.(args)