# santatecla-citas-1

## Phase 0

### App Name 
"Gestor de citas"

### Team members ✒️
   Name - E-mail - GitHub User
* **Alejandro Quesada Soto** - a.quesadas.2016@alumnos.urjc.es - [alexibro](https://github.com/alexibro)
* **Alejandro Delgado Peribáñez** - a.delgadope@alumnos.urjc.es - [alexDelgadoPeribanez](https://github.com/alexDelgadoPeribanez)
* **Ignacio Martínez Castro** - i.martinezca.2016@alumnos.urjc.es - [NachoMC](https://github.com/NachoMC)
* **Jesús Borrero Gómez** - j.borrerog.2016@alumnos.urjc.es - [JesusBorrero](https://github.com/JesusBorrero)
* **David Cuenca Ortega** - d.cuenca.2016@alumnos.urjc.es - [DavidCuencaOrtega](https://github.com/DavidCuencaOrtega)

### Tools 🛠️

* [Trello](https://trello.com/b/3JEkZVLL/daw)

---------------------
### Software Requirements Specification 📄

https://docs.google.com/document/d/1PKqs6eayJti3jBymaytm1CKXEUqmyDpC4xDh7tM-wEk/edit

---------------------
### Development Environment 🔩

To carry out this work we have used Visual Studio Code. [![VSC](https://img.shields.io/badge/Link%20descarga-VS%20Code-blue.svg)](https://visual-studio-code.uptodown.com/windows)

This development environment allows 
you to have almost everything you need to develop the web.

We must install a series of extensions:

* [![Java](https://img.shields.io/badge/Extension-Java%20Extension%20Pack-orange.svg)](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)

* [![Maven](https://img.shields.io/badge/Extension-Maven-yellowgreen.svg)](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)

* [![Mustache](https://img.shields.io/badge/Extension%20-Mustache-9cf.svg)](https://marketplace.visualstudio.com/items?itemName=dawhite.mustache)

* [![MySQL](https://img.shields.io/badge/Extension-MySQL-blue.svg)](https://marketplace.visualstudio.com/items?itemName=formulahendry.vscode-mysql)

* [![MySQL Syntax](https://img.shields.io/badge/Extension-MySQL%20Syntax-blue.svg)](https://marketplace.visualstudio.com/items?itemName=jakebathman.mysql-syntax)

* [![Spring Boot Extension Pack](https://img.shields.io/badge/Extension-Spring%20BOOT%20Extension%20Pack-green.svg)](https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack)

You also need to have the latest version of JDK and MAVEN installed on your machine.

Once you download the code and have all the extensions, go to VS Code and open the project.
You must wait for everything to load, it may take a few minutes.

Then, you must create a SQL Database, using MySQL extension, with the following credentials:
- User: daw
- Password: DAWGrupo3
- Port: 3306

Once it is loaded, display the "SPRING-BOOT DASHBOARD" extension, there you should see an item called "demo".
Place the cursor on the extension and click on run. Then select "demo" in the bar that appears on the screen and press OK.
Once it has been executed, open the browser and enter the following URL: **https//:localhost:8443**.

There is an admin account registered:
- User: admin
- Pass: pass

There are two user accounts registered, one of them is:
- User: user
- Pass: pass

YOU ARE READY TO USE OUR WEB APPLICATION

---------------------
## Screens

**Pantalla de inicio - Home Screen**

```
It contains Login/logout button.
It is split it into "Temas" (Topics) and "Citas" (Quotes): Each one with his respectiva items, 
search button and the options to add or to delete an item.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/main.png)

**Login**

```
You can introduce your email and password (with the option to show it up) to access to your account.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/Login.png)

**SignIn**

```
You can introduce your email and password to register on the web.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/SignIn.png)

**Temas - Topics**

```
It has the subject fields (texts and references to quotations), along with its HTML visualization
with the sequential composition from the texts in markdown and the quotes with the format that 
you want and allows to add. modify or delete text, to create or delete a quote and to generate a PDF document.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/Temas.png)

**Añadir Nueva Cita desde Tema - Add New Quote from Topic**

```
This screen allows you to select the quote you want to add to a specific topic
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/add_quote_from_topic.png)

**Generar PDF - PDF Generator**

```
This screen allows you to generate a PDF with the content
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/pdf.png)

**Añadir nuevo Tema - Add New Topic**

```
If you want to add a new topic, you just have to put the name that identifies it and optionally you can upload 
an image that represents it
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/new_theme.png)

**Citas - Quotes**

```
It has the fields of the quote and allows to modify the information directly on its corresponding field.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/Citas.png)

**Añadir Nueva Cita - Add New Quote**

```
To add a new quote, you must put the "quote" in the upper text box and add an author and his corresponding 
work in the lower text boxes.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/new_quote.png)

**Historiograma - Histogram**

```
It shows the number of quotes that each topic has on the web.
```

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/Historiograma.png)

---------------------

**Vista Administrador (Diagrama de navegación) - Administrator View**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/AV.png)

**Vista Alumno (Diagrama de navegación) - Student View**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/UV.png)

**Vista Visitante (Diagrama de navegación) - Visitor View**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/VV.png)

---------------------
**Diagrama Base de Datos - Database Diagram**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/bbdd.png)

---------------------
**Diagrama de clases - Class Diagram**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/diagram.png)

---------------------
**Diagrama de clases API REST - Class Diagram of REST API**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/RestDiagram.png)

---------------------
**Diagrama de Seguridad - Security Diagram**

![Alt text](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/Readme-images/SecurityDiagram.png)

---------------------
## REST API documentation

[REST API 📄](https://github.com/CodeURJC-DAW-2018-19/santatecla-citas-1/blob/master/API.md)

---------------------
## Docker Environment

Now, we will explain what to do to execute our application on Docker.

First of all, we need to install Docker:

* [![Docker](https://img.shields.io/badge/Install-Docker-blue.svg)](https://www.docker.com/)

Having already Docker installed, we must use the console (Using Windows CMD or Linux Terminal is the **_cd_** command) to go to the docker folder (at the root of our repository). Then, follow the next steps, which consist of a set of commands, to run the app:

   First, there are two ways to get the app image:
      - Running the script **.\create_image** - This command will create the JAR file of our app and build the app image.
        It could take a few seconds.
      - Building the image from our DockerHub repository with the command  **docker build -t sigma98/app:3.0.0**
      
   After that, execute **docker-compose up** - This command will run up the containers: db (database) and app.

YOU ARE READY TO USE OUR WEB APPLICATION USING DOCKER
