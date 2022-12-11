var a = 'Hello'

function hello() {
    let b = 'world'
    const c = 'Hello world!'
    debugger
}

hello()

const fruits = () => { 
    if (true) 
    { 
        var fruit1 = 'apple'; 
        const fruit2 = 'banana'; 
        let fruit3 = 'kiwi';
    } 
    console.log({
        fruit1,
        fruit2,
        fruit3
    });
}

/*
En JavaScript, el ámbito de función es el conjunto de reglas que determinan dónde y cómo se pueden utilizar las variables declaradas en una función. En general, las variables declaradas dentro de una función solo están disponibles dentro de esa función y no pueden ser accedidas desde el ámbito externo. Esto se conoce como ámbito de función porque se aplica a las variables declaradas dentro de una función. Si quieres utilizar una variable declarada dentro de una función en el ámbito externo, puedes hacerlo retornando la variable como parte del resultado de la función. De esta manera, puedes acceder a la variable desde el ámbito externo. Es importante entender el ámbito de función para evitar conflictos de nombres y mejorar la organización del código.
*/