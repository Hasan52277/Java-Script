// Immediately invoked function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);

})();

( (name) => {
    console.log(`DB CONNNECTED TWO ${name}`);
})("Hasan")
