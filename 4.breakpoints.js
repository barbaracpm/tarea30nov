//Los Breakpoints son lugares del código donde nos interesará detenerlo para resolver errores en nuestro programa.

//Cómo depurar nuestro código 

//1. Abrimos DevTools in Chrome.

//2. Seleccionamos la sección “sources” y elegir el fichero que queremos debuggear

//3. Marcamos como breakpoints las líneas donde queramos detenernos pinchando en la línea.

/*4. Movernos por nuestro código línea a línea. Una vez que la ejecución se ha parado en el breakpoint 
podemos reanudar la ejecución haciendo clic en el botón azul de play. Ahora la ejecución avanzará línea por línea.
Aquí podemos inspeccionar cada línea de código junto con los valores contenidos en las variables.*/

//OTRA FORMA DE AÑADIR BREAKPOINTS es añadir la palabra debugger en nuestro código de javascript.

function func(){

    const a = 10;
    const b = 15;
    const result = a + b; 
    debugger;  //Debugging is automatically started from here
    //Some stuff
    return result;
}
console.log(func());
