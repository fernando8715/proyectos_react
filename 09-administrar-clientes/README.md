## proyecto creado utilizando varias paginas (URL's), empleando la libreria de React Router Dom

        **createBrowserRouter**
            Esta funcionalidad de react router dom, permite crear rutas a diferentes paginas, se puede crear el router desde el archivo main.jsx o colocarlo en un archivo aparte.
            se crea una constante route que recibe la funcion createBrowserRouter, dentro de esta se configura un array de objetos donde se colocan las propiedades de path, element, children
            El children me permite crear dentro de un array diferentes rutas hijas
            Tambien puedo crear en el padre un elemento que contenga un componente a compartir entre sus rutas hijas
        
        **Outlet**
            Este componente permite que todo lo que esta definido antes de el se utilice como plantilla en las rutas hijas y a partir de ahi se inyecta la informacion de cada URL
        
        **link**
            En react router se utiliza el componente Link que reemplaza a la etiqueta <a> de HTML para manejar los enlaces, se puede definir clases de css y la ruta se define con to='<<URL>>'
            Este componente se coloca <Link> <<nombre del enlace>> </Link>

        **navlink*


        *useLocation**
            Este hook de react router permite obtener la informacion de la pagina (URL) actual. la puedo usar para agregar clases a un determinado link que indique en que pagina esta actualmente el usuario.
            Se asigna a una constante la funcion useLocation, que nos devuelve un objeto con bastante información que podemos utilizar de la URL.

        **useNavigate**
            Este hook de react router dom se utiliza para crear navegaciones dinamicas que son utilizadas cuando se hacen click en un boton para llevarme a una ruta especifica.
            Se importa en el archivo del componente a utilizar, se crea una constante y se asigna la funcion useNavigate
            En el evento se llama la variable para que se ejecute cuando se ejecute el evento, pasandole la URL.

        **useLoader**
            Este hook se utiliza para cargar datos que retorna la funcion loader. 
            
        **Loader** 
            Se crea como una funcion exportable que retorna un valor. 
            Es similar al useState y useEffect de React, permite obtener datos de una API. 
            Se define en cada componente donde queremos traer la información y se importa en el archivo donde tenemos definido el route; colocando la key loader y el value de la funcion dentro del objeto de la ruta. para cambiar el nombre lo podemos renombrar con as.
            En esta funcion tambien podemos hacer validaciones para comprobar que se este retornando algo, si es un objeto lo que retorna podemos utilizar Object.values(<<variable>>).length === 0 y utilizar el throw new Response('', { status: <<codigo>>, statusText: '<<definir un texto>>' }), de esta manera creamos nuestros propios mensajes de error.

        **Action**
            React Router Dom tiene definido esta funcionalidad para para procesar la entrada de datos en un componente Form de react router dom.
            Se define una funcion exportable async llamada action en el archivo donde tengamos un formulario con el componente Form  porque la peticion puede tardar en procesarse, la funcion recibe como parametro el objeto request y retorna un valor.
            Se crea una constante dentro de la funcion que le asigna el request.formData()
            Se crea otra constante que guarde los valores del FormData, hay tres maneras de obtener estos valores
                1. <<nombreVariable>>.get(<<'nombre del input'>>)
                2. crear un arreglo y utilizar el spread operation para crear una copia de formData
                3. con un Object y el metodo fromEntries. ejm Object.fromEntries(<<nombre variable recibe peticion formData>>)
            La funcion se importa en el archivo de las rutas, se renombra con as y se pasa la funcion como prop en la ruta del formulario colocando la key action y el valor el nombre de la funcion
    
        **UseActionData**
            Se utiliza para obtener los valores que retorna la funcion action.
            Se crea una constante dentro del componente que contiene el formulario y se le asigna la funcion del hook
        
        **redirect*
            Esta funcionalidad de react router dom me permite usarla en action y loaders para utilizarlos como return de esas funciones y eso va a hacer que una vez se ejute la funcion el return me va a llevar a una ruta que le especifiquemos. redirect('/').
            Hay que importarla donde la vaya a utilizar.

        **useRouteError**
            se utiliza para capturar los errores y mostrar mensajes que mejoren la UI/UX.
            Creamos un componente y asignamos a una constante la funcion useRouterError.
            Luego importamos el componente en el archivo route y en la ruta donde lo necesitemos colocamos la key errorElement:<Nombre del componente del error>
            Si utilizamos la propiedad message tendremos un mensaje del error.
            Si utilizamos la propiedad statusText tendremos el mensaje definido en el status, este lo podemos editar con el throw new Response('', status:<<numero>>, statusText:'<<texto del error>>')


        **variables de entorno**
            Una variable de entorno es una variable que en el entorno de desarrollo puede tener un valor de una url y en el entorno de produccion uno diferente. usualmente en lugar de tener una constante de la url en la funcion, esta se puede ocultar con una variable de entorno.
            Cada framework o tecnologia que utilicemos para crear proyectos en react tienen diferentes formas de manejar las variables de entorno, para el caso de vite se coloca en mayuscula VITE seguido de guion bajo_ y seguido del nombre = el valor. VITE_API_URL = http://localhost3000
            Usualmente el usuario de una base de datos es root.  VITE_DB_USUARIO = root
            Para leer los valores de este archivo se debe arrancar nuevamente la aplicacion para que lo reconozca y se debe importar el archivo en la funcion que definimos como loader que es donde se cargan los datos.


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
                 



