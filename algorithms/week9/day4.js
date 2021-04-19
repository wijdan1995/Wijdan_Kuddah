function hash(key) {
    var res = 0;
    for (var i = 0; i < key.length; i++) {
        res += key.charCodeAt(i);
        res *= 7; // add in some random-noise
    }
    return res;
}
class HashMap {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this.map = Array[capacity];
    }

    put(key, value) {
        // add the key value pair to the map!
    }

    get(key) {
        // return the value stored at `key`
    }

}