import {B} from "../b";

export class A {
    doSomething() {
        const b = new B();
        return "A" + b.doSomething();
    }
}