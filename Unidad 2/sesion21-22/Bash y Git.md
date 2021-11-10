# Ayuda memoria bash y git

Comandos más utilizados en **bash**:

 - *pwd*       devuelve la ruta completa de nuestra posición actual
 - *cd* permite moverse entre carpetas. 1) Si está solo (`cd`), nos redirigirá a la carpeta por defecto del usuario. 2) Si va acompañado del nombre de una carpeta que se encuentra en nuestra posición actual (`cd carpeta`), nos mandará a esa carpeta. 3) Si está acompañado de dos puntos (`cd ..`), nos mueve a la carpeta padre de la actual, es decir, nos saca de la carpeta en la que estábamos. 4) No solo podemos acompañarlo del nombre de una carpeta, sino de la ruta relativa de una carpeta (`cd ./carpeta/otra-carpeta`).
 - *ls* permite listar (o ver) los ficheros dentro de una carpeta. OJO: Solo nos muestra el contenido, no nos cambia de posición, no es equivalente a `cd`. 1) Si va solo (`ls`), nos mostrará los ficheros dentro de la ubicación actual. 2) También se puede acompañar del nombre o la ruta relativa de una carpeta en el interior de nuestra ubicación actual (`ls /carpeta/otra-carpeta`). 3) Si va acompañado de -l, nos mostrará más detalles de cada fichero (`ls -l`). 4) Si va acompañado de -a, nos mostrará todos los ficheros, incluyendo los ocultos (`ls -a`). Recordar que se pueden combinar las opciones, por ejemplo `ls -al ./carpeta/otra-carpeta`.
 - *mkdir* crea un nuevo directorio (carpeta). Debe ir siempre acompañado del nombre o ruta relativa de la carpeta a crear (`mkdir ./carpeta/nueva-carpeta`). 
 - *touch* crea un nuevo fichero. Sigue la misma lógica que `mkdir`.
 - *nano* abre un editor de texto dentro de la terminal. Debes especificar el archivo sobre el que quieres escribir, este puede existir o no, es decir, si escribimos `nano archivo.txt` se creará un archivo llamado archivo.txt en nuestra posición actual. Recordar que con `Control + O` se guarda, con `ENTER` confirmamos los cambios y con `Control + X` cerramos el editor.

Comandos de **git**:

 - *git init* crea o inicializa un nuevo repositorio en nuestra ubicación actual. En concreto crea una carpeta llamada `.git`, dentro de la cual se almacenarán todos nuestros commits.
 - *git add* agrega ficheros al área de preparación (más conocida como "cajita"). 1) Si va acompañado de un punto (`git add .`), se agregarán todos los ficheros nuevos, modificados y/o eliminados a la cajita. 2) También podemos agregar ficheros uno a uno (`git add archivo.txt archivo2.txt`).
 - *git commit -m* Guarda los ficheros agregados al área de preparación, es decir, guarda la cajita en la bodega (nuestro repositorio). Al agregar el `-m`, indicamos que le asignaremos un mensaje (`git commit -m "mensaje descriptivo"`).

Comandos para trabajar con **repositorios remotos**:

 - *git remote add* permite agregar un nuevo repositorio remoto a nuestro repositorio local. Debe agregarse además el nombre que con el que se hará referencia al repositorio remoto y su dirección HTTPS, incluyendo además el usuario de github y el personal token correspondiente. Ejemplo: `git remote add origin https://<username>:<personal token>@github.com/<username>/<repositorio>.git`.
 - *git remote* permite revisar los repositorios remotos agregados a nuestro repositorio local. También se puede agregar la opción -v (`git remote -v`) para obtener más información.
 - *git push* sincroniza nuestro repositorio local con el remoto. En caso de tener más de un repositorio remoto conectado al local, es importante que indiques el repositorio que se sincronizará, adicionalmente te recomendamos que especifiques la rama a actualizar (`git push origin master`). Si es la primera vez que realizas un push a un repositorio remoto, es importante que escribas algo como esto: `git push -u origin master`.
 - *git clone* permite clonar o realizar una copia de un repositorio remoto en tu local. Si dicho repositorio remoto es público (sea tuyo o no), no necesitas agregar nada más que su dirección HTTPS.