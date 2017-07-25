// 普通对象Object 和 函数对象Function

//函数对象Function
function f1(){};
var  f2 = function(){};
var f3 = new Function();

console.log(
	typeof f1,
	typeof f2,
	typeof f3,
	typeof Object
	);

// 普通对象Object
var o1= {};
var o2 = new Object();
var o3 = new f1();

console.log(
	typeof o1,
	typeof o2,
	typeof o3
	);







// __proto__

// function f(){}
// f.prototype.a = 'abc';
// var obj = new f();


// console.log('obj=>',obj);

// console.log('obj.__proto__=>', obj.__proto__);
// console.log('f.prototype=>', f.prototype);

// console.log('f.prototype.__proto__=>', f.prototype.__proto__);
// console.log('Object.prototype=>', Object.prototype);

// console.log('Object.prototype.__proto__', Object.prototype.__proto__)

//1: obj.__proto__ ->f.prototype,  f.prototype.__proto__ -> Object.prototype, Object.prototype.__proto__ == null 
//2: __proto__但它在普通对象和函数对象中都存在， 它的作用就是保存父类的prototype对象，JS在通过new 表达式创建一个对象的时候，通常会把父类的prototype赋值给新对象的__proto__属性，这样，就形成了一代代传承...
//3: 原型链的形成真正是靠__proto__ 而非prototype,当JS引擎执行对象的方法时，先查找对象本身是否存在该方法，如果不存在，会在原型链上查找，但不会查找自身的prototype。
//4: 一个对象的__proto__记录着自己的原型链，决定了自身的数据类型，改变__proto__就等于改变对象的数据类型。 
//5: 其实prototype的主要作用就是继承。 通俗一点讲，prototype中定义的属性和方法都是留给自己的“后代”用的，因此，子类完全可以访问prototype中的属性和方法
// 函数的prototype不属于自身的原型链，它是子类创建的核心，决定了子类的数据类型，是连接子类原型链的桥梁。
// 在原型对象(prototype)上定义方法和属性的目的是为了被子类继承和使用。