//complete this code
class Person {
	let name;
	let age;
	constructor(name, age){
		this.name=name;
		this.age=age;
	}
	get_name(){
		return this.name;
	}
	set_name(age){
		this.age=age;
	}
}

class Student extends Person {
	study(){
		console(this.name+" is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
