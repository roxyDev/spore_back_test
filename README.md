# spore_back_test
Backend Services

a [Sails v1](https://sailsjs.com) application

# Visualización de Vehículos en Tiempo Real

¡Bienvenido al proyecto de Visualización de Vehículos en Tiempo Real! Este proyecto te permite visualizar la ubicación de vehículos en tiempo real utilizando tecnologías modernas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (incluye npm)
- [Git](https://git-scm.com/)

## Instalación

Para clonar el repositorio y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/roxyDev/spore_back_test.git
    cd mi-repo
    ```

2. Inicializa el proyecto:

    ```bash
    git init
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Configura el archivo de base de datos
   Ingresa al archivo config\datastores.js de tu proyecto y personaliza la conexión a la base de datos:
   Ejemplo:

  ```bash
   default: 
    {
      adapter: 'sails-mysql',
      url: 'mysql://usuario:contraseña@localhost:3306/nombre_bd',
      schema: true,
    },
   ```

Asegurate de tener una conexión a mysql con el nombre de la db, el orm se encargara de hacer las tablas.


## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando:

```bash
sails lift
```
Listo, ahora tienes la aplicación corriendo en el puerto 1337!!

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Feb 02 2023 17:48:10 GMT+0000 (Coordinated Universal Time) using Sails v1.5.3.

<!-- Internally, Sails used [`sails-generate@2.0.7`](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

