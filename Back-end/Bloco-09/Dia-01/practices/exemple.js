var Person = /** @class */ (function () {
    function Person(n, h, w) {
        console.log("Creating person " + n);
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    Person.prototype.sleep = function () {
        console.log(this.name + ": zzzzzzz");
    };
    return Person;
}());
var p1 = new Person('Maria', 171, 58);
var p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
var TV = /** @class */ (function () {
    function TV(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    TV.prototype.turnOn = function () {
        console.log(this.brand + ", " + this.size + ", " + this.resolution + ", " + this.connections);
    };
    ;
    return TV;
}());
var TV1 = new TV('samsung', 52, 'Full HD', ['HDMI', 'Ethernet']);
console.log(TV1.turnOn());
