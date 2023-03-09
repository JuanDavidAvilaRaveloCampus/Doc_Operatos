let operadores = {
    "NOMBRE" : "ABREVIACIÓN",
    "AND": " x && y",
    "OR": "x | y",
    "NOT": "!x"
};
let description = {
    "NOMBRE" : "DESCRIPCIÓN",
    "AND": "Solo devuelve true si ambas condiciones son true, de otra forma será false",
    "OR": "Devuelve true si una de las dos condiciones es true, o ambas lo son. En caso de no cumplir lo anterior, será false",
    "NOT": "Devuele lo contrario: true = fase; false = true"
}
console.table(operadores)
console.table(description)
