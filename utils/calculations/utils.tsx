export enum Operation {
    Add = "Add",
    Minus = "Substract",
    Multiply = "Multiply",
    Divide = "Divide"
}

interface calcFunc {
    age: (birthYear: number) => number;
    length: (name: string) => number;
    calc: (a: number, b: number, c: Operation) => number | string | undefined;
}

const numberFormatOptions = { maximumFractionDigits: 2, minimumFractionDigits: 0, useGrouping: true };

export const calcFunc: calcFunc = {
    age: (birthYear: number) => {
        const today = new Date().getFullYear();
        const age = today - birthYear;
        return age;
    },
    length: (name: string) => {
        return name.length;
    },
    calc: (a: number, b: number, c: Operation) => {
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("You must only input numbers!")
        }
        switch(c){
            case("Add"):
                return (a + b).toLocaleString("es-ES", numberFormatOptions);
                break;
            case("Substract"):
                return (a - b).toLocaleString("es-ES", numberFormatOptions);
                break;
            case("Multiply"):
                return (a * b).toLocaleString("es-ES", numberFormatOptions);
                break;
            case("Divide"):
                return (a / b).toLocaleString("es-ES", numberFormatOptions);
                break;
        }
    },
}