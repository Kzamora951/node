
//const op=require('./ejercicio1.js')
/*
op.suma(6,10)
op.resta(6,10)
op.multiplicacion(5,5)
op.division(6,10)
op.potenciar(5,2)
op.radicar(4,2)*/
/*
option = 4

switch(option){
    case 1:
        op.suma(6,10)
        break;
    case 2:
        op.resta(6,10)
        break;
    case 3:
        op.multiplicacion(6,10)
        break;
    case 4:
        op.division(6,10)
        break;
    case 5:
        op.potenciar(6,10)
        break;
    case 6:
        op.radicar(4,2)
        break;
    default:
        console.log('Ingrese un valor valido')
}
    console.log*/


    //Servidor con Node JS
    //Requerir modulo HTTP
    const http=require('http')
    //Funcion CallBack para manejar el sevidor
    function handleServer(req,res){
        res.writeHead(404,{"Content-Type":'text-html'})
        res.write('<h1>Respuesta del server</h1>')
        res.end()
    }
    //Crear Server
    const server=http.createServer(handleServer).listen(5000)