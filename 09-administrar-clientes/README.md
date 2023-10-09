## proyecto creado utilizando varias paginas (URL's), empleando la libreria de React Router Dom

        **Loader** 
            Se crea como una funcion exportable que retorna un valor. 
            Es similar al useState y useEffect de React, permite obtener datos de una API. 
            Se define en cada componente donde queremos traer la información y se importa en el archivo donde tenemos definido el route; colocando la key loader y el value de la funcion dentro del objeto de la ruta. para cambiar el nombre lo podemos renombrar con as.

        **useLoader**
            Este hook se utiliza para cargar datos que retorna la funcion loader.  

        **Action**
            React Router Dom tiene definido esta funcionalidad para para procesar la entrada de datos en un Form.
            Se define en el archivo donde tengamos un formulario una funcion exportable async llamada action porque la peticion puede tardar en procesarse, recibe como parametro el objeto request y retorna un valor.
            Se crea una constante dentro de la funcion que le asigna el request.formData()
            Se crea otra constante que guarde los valores del FormData, hay tres maneras de obtener estos valores
                1. <<nombreVariable>>.get(<<'nombre del input'>>)
                2. crear un arreglo y utilizar el spread operation para crear una copia de formData
                3. con un Object y el metodo fromEntries. ejm Object.fromEntries(<<nombre variable recibe peticion formData>>)
            La funcion se importa en el archivo de las rutas, se renombra con as y se pasa la funcion como prop en la ruta del formulario colocando la key action y el valor el nombre de la funcion
    
        **UseAction**
            Se utiliza para obtener los valores que retorna la funcion action.


## Conceptos

        **REST**
                Es una interfaz para conectar varios sistemas basados en el protocolo HTTP.
                REST fue una solucion a la complejidad que añadia SOAP y que esa mas dificil de montar.
                Sirve para obtener datos, generar datos y operaciones.
                Devuelve los datos en formato JSON o XML.
                Rest se apoya en HTTP y permite hacer GET, POST, PUT, PATCH, DELETE.
                Permite almacenar la logica de negocio y servir los datos con una serie de recursos URL y una serie de tados que podemos limitar, es decir es nuestro BACKEND.

                **GET**: obtener
                **POST**: enviar datos al servidor y crear un registro nuevo
                **PUT y PATCH**: actualizar un registro existente
                **DELETE**: eliminar un registro
        
        **REST API** (Representational State Transfer)
                Es una interfaz de programacion de aplicaciones que se ajusta a los limites de la arquitectura REST y permite la interactividad con los servicios web de Restfull.
                Puede ser diseñada en cualquier lenguaje, que consulte los recursos en una base de datos y consumir los resultados.
                Requiere de EndPoints o (URL's) para hacer operaciones de tipo CRUD
        
        **API** 
                Se considera como un contrato entre el proveedor de información y el usuario, donde se establece el contenido que necesita el consumidor y el que requiere el productor.
                Permite interactuar con una computadora o sistema para obtener datos o ejecutar una funcion, de manera que el sistema entienda la solicitud y la cumpla. actua como un mediador entre usuarios y los recursos o servicios web.
                Una ventaja es que no necesita saber como se recibe el recurso ni de donde proviene.
        
        **JSON server**
                Es una aplicacion de Node que permite crear una API Rest falsa a partir de un archivo JSON, es util cuando estamos desarrollando una app y necesitamos de una API para hacer pruebas o tener una version de demostración del proyecto.
                En la pagina web de npm podemos ver el codigo de instalacion, pero antes podemos abrir la terminal de windows o la powershell para verificar si ya esta instalada con json-server --v
                Luego creamos un archivo db.json en la carpeta del proyecto y ejectutamos el comando json-server --watch db.json
                Si queremos podemos tambien definir el puerto desde la linea anterior colocando --port
                 



