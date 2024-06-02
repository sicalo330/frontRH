Implementación de un CRUD de estudiantes hecho en JavaScript, el framework angular, node js, y postgresql

## **Integrantes**
Noah Esteban Narváez Jung, Cristián Camilo Mejía, Santiago Gallego

# **Marco teórico**

### **¿Qué es JavaScript?**

JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). 

**Características**

-Simplicidad. Posee una estructura sencilla que lo vuelve más fácil de aprender e implementar. 
-Velocidad. Se ejecuta más rápido que otros lenguajes y favorece la detección de los errores.
-Versatilidad. Es compatible con otros lenguajes, como: PHP y Java. Además, hace que la ciencia de datos y el aprendizaje automático sean accesibles.
-Popularidad. Existen numerosos recursos y foros disponibles para ayudar a los principiantes con habilidades y conocimientos limitados.
-Carga del servidor. La validación de datos puede realizarse a través del navegador web y las actualizaciones solo se aplican a ciertas secciones de la página web.
-Actualizaciones. Se actualiza de forma continua con nuevos frameworks y librerías, esto le asegura relevancia dentro del sector.

**Ventajas**

Velocidad -  JavaScript tiende a  ser muy rápido porque a menudo se ejecuta inmediatamente en el navegador. Entonces mientras no requiera recursos externos, JavaScript no tiene permitido retrasarse por llamados del servidor backend.
Simplicidad - La sintaxis de JavaScript está inspirada por Java y es relativamente sencillo de aprender comparado a otros lenguajes de programación populares como C++.
Popularidad - JavaScript esta por todas partes de la web, y  con la llegada de Node.js,  se ha incrementado su uso en backend.  Hay incontables recursos para aprender JavaScript. Tanto  StackOverflow como GitHub muestran un creciente número de proyectos que usan JavaScript, y la popularidad que ha alcanzado en los recientes años se espera que siga creciendo.

**Desventajas**

Seguridad Client-Side- Desde que el código en JavaScript es ejecutado en el client-side, bugs y descuidos pueden ser explotados algunas veces para malos propósitos. Por esto, algunas personas deciden desactivar JavaScript por completo.

Soporte del navegador- Mientras server-side script siempre produce el mismo resultado, algunas veces diferentes navegadores interpretan el código JavaScript de manera distinta. Estos días  las diferencias son mínimas, y no deberías  tener que preocuparte mientras compruebes  tu código en la mayoría de los navegadores.

**JavaScript vs otros lenguajes**

# *JavaScript vs Python*

Python y JavaScript han dejado una huella indeleble en el mundo del desarrollo de software.

Por un lado, Python, con su sintaxis clara y legible, ha emergido como el lenguaje de elección para el análisis de datos, la IA y el aprendizaje automático, además de ser ampliamente utilizado en el desarrollo web.

Por otro lado, JavaScript, originalmente concebido para añadir interactividad a las páginas web, ha evolucionado más allá del navegador para convertirse en una pieza central del desarrollo de aplicaciones web completas gracias a plataformas como Node.js.

La influencia de ambos lenguajes se extiende a través de diversos sectores, impulsando la innovación y facilitando la creación de soluciones complejas y eficientes.

La elección entre Python o JavaScript depende en gran medida de los requisitos específicos del proyecto y del entorno de desarrollo.

Mientras que Python es aclamado por su simplicidad y la eficiencia de su código, JavaScript domina el desarrollo frontend, ofreciendo una experiencia de usuario interactiva y dinámica.

# *JavaScript vs Java*

-JavaScript es un lenguaje interpretado, y Java compilado. Los programas de JavaScript son archivos de texto que se integran directamente en las páginas HTML y es interpretado (sin estar compilado) por el cliente (navegador), mientras que en Java se compilan a un archivo especial para ser optimizados a un lenguaje intermedio llamado bytecode, y leído posteriormente en un ordenador que lo ejecute.

-Java es un lenguaje de programación orientado a objetos puros (OOP, según sus iniciales en inglés), mientras que JavaScript está basado en prototipos y puede emular la programación orientada a objetos.

-JavaScript es un lenguaje de scripting del lado del cliente, lo que significa que se ejecuta en el navegador del usuario final. En cambio, Java requiere un entorno de ejecución llamado Java Virtual Machine (JVM) para ejecutar el código.

# **Angular**
Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles. 

La biblioteca lee el HTML que contiene atributos de las etiquetas personalizadas adicionales, entonces obedece a las directivas de los atributos personalizados, y une las piezas de entrada o salida de la página a un modelo representado por las variables estándar de JavaScript.

Angular se basa en clases tipo "Componentes", cuyas propiedades son las usadas para hacer el binding de los datos. En dichas clases tenemos propiedades (variables) y métodos (funciones a llamar).

Angular es la evolución de AngularJS aunque incompatible con su predecesor. 

# **PostgreSQL**

PostgreSQL, también llamado Postgres, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL,1​ similar a la BSD o la MIT.

Como muchos otros proyectos de código abierto, el desarrollo de PostgreSQL no es manejado por una empresa o persona, sino que es dirigido por una comunidad de desarrolladores que trabajan de forma desinteresada, altruista, libre o apoyados por organizaciones comerciales. Dicha comunidad es denominada el PGDG (PostgreSQL Global Development Group).

PostgreSQL no tiene un gestor de errores (bugs), haciendo muy difícil conocer el estado de corrección de los mismos.

## **Restful API**

La API RESTful es una interfaz que dos sistemas de computación utilizan para intercambiar información de manera segura a través de Internet. La mayoría de las aplicaciones para empresas deben comunicarse con otras aplicaciones internas o de terceros para llevar a cabo varias tareas. Por ejemplo, para generar nóminas mensuales, su sistema interno de cuentas debe compartir datos con el sistema bancario de su cliente para automatizar la facturación y comunicarse con una aplicación interna de planillas de horarios. Las API RESTful admiten este intercambio de información porque siguen estándares de comunicación de software seguros, confiables y eficientes.

Las API RESTful incluyen los siguientes beneficios:
Escalabilidad

Los sistemas que implementan API REST pueden escalar de forma eficiente porque REST optimiza las interacciones entre el cliente y el servidor. La tecnología sin estado elimina la carga del servidor porque este no debe retener la información de solicitudes pasadas del cliente. El almacenamiento en caché bien administrado elimina de forma parcial o total algunas interacciones entre el cliente y el servidor. Todas estas características admiten la escalabilidad, sin provocar cuellos de botella en la comunicación que reduzcan el rendimiento.
Flexibilidad

Los servicios web RESTful admiten una separación total entre el cliente y el servidor. Simplifican y desacoplan varios componentes del servidor, de manera que cada parte pueda evolucionar de manera independiente. Los cambios de la plataforma o la tecnología en la aplicación del servidor no afectan la aplicación del cliente. La capacidad de ordenar en capas las funciones de la aplicación aumenta la flexibilidad aún más. Por ejemplo, los desarrolladores pueden efectuar cambios en la capa de la base de datos sin tener que volver a escribir la lógica de la aplicación.
Independencia

Las API REST son independientes de la tecnología que se utiliza. Puede escribir aplicaciones del lado del cliente y del servidor en diversos lenguajes de programación, sin afectar el diseño de la API. También puede cambiar la tecnología subyacente en cualquiera de los lados sin que se vea afectada la comunicación.

# **Métodología**
Instalar linux ubuntu 22.04

## Pasos para instalar Linux Ubuntu 22.04

1. **Instalar Linux Ubuntu 22.04**:
   - Es necesario hacer una partición en el disco duro o disco de estado sólido.
   - Luego, tener un instalador de Ubuntu, conectarlo al PC, reiniciarlo y entrar a la BIOS para instalar el sistema operativo.

---

## Otras secciones

### Configuración inicial

Instrucciones para la configuración inicial después de instalar Ubuntu.

---

### Instalación de software adicional

Pasos para instalar software adicional en Ubuntu.

---

### Solución de problemas

Guía para solucionar problemas comunes durante la instalación.


2. **Instalar PostgreSQL para ubuntu**:


https://developer.mozilla.org/es/docs/Web/JavaScript
https://www.freecodecamp.org/espanol/news/ventajas-y-desventajas-de-javascript/
https://www.hackaboss.com/blog/diferencias-javascript-java
https://es.wikipedia.org/wiki/Angular_(framework)
https://es.wikipedia.org/wiki/PostgreSQL
https://aws.amazon.com/es/what-is/restful-api/



