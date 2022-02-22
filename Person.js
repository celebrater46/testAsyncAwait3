class Person {
    constructor(name) {
        this.name = name;
    }
    async sayHello() {
        return await this.asyncReturnSomething(`Hello! I'm ${this.name}!`)
    }
    asyncReturnSomething(msg) {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve(msg);
            }, 3000);
        });
    }
}