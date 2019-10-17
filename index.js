// Add your Circle class here
const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return (2 * this.radius);
    }

    set diameter(diameter) {
        this.radius = (diameter / 2);
    }

    get circumference() {
        return  (this.radius * 2) * pi ;
    }

    set circumference(circ) {
        this.radius = (circ / (2 * pi));
    }

    get area() {
        return (pi * (this.radius * this.radius) );
    }

    set area(area) {
        this.radius = Math.sqrt( area / pi );
    }

}