"use strict";

(async ()=> {
    const greeting = await new Person('Sally').sayHello();
    console.log(greeting);
    console.log('Done!');
})();