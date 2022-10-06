


        const sumar=(num1,num2)=>{
            let suma = num1 +num2
        console.log(`la suma entre ${num1} y ${num2} es ${suma}`);
        }
        //exports.suma=sumar
     
    
        function restar(num1,num2){
            let resta=num1-num2
            console.log(`la resta entre ${num1} y ${num2} es ${resta}`)
        }
        //exports.resta=restar


        function multiplicar(num1,num2){
            let mult=num1*num2
            console.log(`la multiplicacion entre ${num1} y ${num2} es ${mult}`)
        }
        //exports.multiplicacion=multiplicar


        function dividir(num1,num2){
            let div=num1/num2
            console.log(`la division entre ${num1} y ${num2} es ${div}`)
        }
        //exports.division=dividir    


        function potencia(num1,num2){
            let pot= Math.pow(num1,num2)
            console.log(`la potenciacion entre ${num1} y ${num2} es ${pot}`)
        }
        //exports.potenciar=potencia

        function potencia(num1,num2){
            let pot= Math.pow(num1,num2)
            console.log(`la potenciacion entre ${num1} y ${num2} es ${pot}`)
        }
        //exports.potenciar=potencia


        function radicacion(num1,num2){
            let rad= Math.sqrt(num1,num2)
            console.log(`la radicacion entre ${num1} y ${num2} es ${rad}`)
        }
        //exports.radicar=radicacion

        const operaciones={}
        operaciones.suma=sumar
        operaciones.resta=restar
        operaciones.multiplicacion=multiplicar
        operaciones.division=dividir
        operaciones.potenciar=potencia
        operaciones.radicar=radicacion

        module.exports=operaciones
      
  