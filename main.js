
let result = 0;

function calcular(val1, operacao, val2){ 
    switch(operacao){
        case '+':
            return result = val1 + val2;
            break;
        case '-':
            return result = val1 - val2;
            break;
        case 'x':
            return result = val1 * val2;
            break;
        case '/':
            return result = val1 / val2;
            break;
        default:
            console.log("Operação inválida!");
            break;
    }
}
