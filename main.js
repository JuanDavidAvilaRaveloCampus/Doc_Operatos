let operadores = {
    "NOMBRE" : "ABREVIACIÓN",
    "Asignación": "x = y",
    "Adición": "x += y",
    "Sustracción": "x -= y",
    "Multiplicación": "x *= y",
    "División": "x /= y",
    "Resto": "x %= y",
    "Exponenciación": "x **= y",
    "Desplazamiento a la izquierda": "x <<= y",
    "Desplazamiento a la derecha": "x >>= y",
    "Sin signo de desplazamiento": "x >>>= y",
    "And": "x &= y",
    "XOR": "x ^= y",
    "Or": "x |= y"
};

let description = {
    "NOMBRE" : "SIGNIFICADO",
    "Asignación": "x = y",
    "Adición": "x = x + y",
    "Sustracción": "x = x - y",
    "Multiplicación": "x = x * y",
    "División": "x = x/y",
    "Resto": "x = x % y",
    "Exponenciación": "x = x ** y",
    "Desplazamiento a la izquierda": "x = x << y",
    "Desplazamiento a la derecha": "x = x >> y",
    "Sin signo de desplazamiento": "x = x >>> y",
    "And": "x = x & y",
    "XOR": "x = x ^ y",
    "Or": "x = x | y"
};

console.table(operadores)
console.log("\n")
console.table(description)