# GENERAL INFORMATION
All API queries begin with /api.

Any request that is not authorized to be made returns the error code 405 Method Not Allowed, 403 Forbidden or 401 Not Authorized.

When the resource that is accessed does not exist, 404 Not Found is returned.
  
When a new resource is generated, 201 Created is returned.

When a request is successfully made, 200 OK is returned.


## Register a new user
#### URL

	< /user/register >

* #### Method:

	`POST`
	
* #### Parameters:

	* Body
        {
            "name": "Alex",
            "password": "daw3"
        }
   
* #### Request:
        {
            "name": "Alex",
            "passwordHash": "$2a$10$9BOGsXrFLKZRqC8Wd8Aa/O6iyy2GjIoGqikpROhP2kJmt6WSUhznS",
            "roles": [
                "ROLE_USER"
            ],
            "openTabs": []
        }

## LogIn
#### URL

	< /user/login >

* #### Method:

	`GET`
	
* #### Parameters:

	* Authorization

                Username: Alex
                Password: pass
   
* #### Request:

        {
            "name": "Alex",
            "passwordHash": "$2a$10$9BOGsXrFLKZRqC8Wd8Aa/O6iyy2GjIoGqikpROhP2kJmt6WSUhznS",
            "roles": [
                "ROLE_USER"
            ],
            "openTabs": []
        }

## View themes
#### URL

	< /themes/ >

* #### Method:

	`GET`
	
* #### Parameters:

	* Without parameters it only shows the first page, if you want to see the    topics of more pages you should put /?page={page} then in the url-

        - page = [int]

   
* #### Request:

        {
            "content": [
                {
                    "id": 16,
                    "name": "Amor",
                    "imagePath": "/assets/img/themes/default-theme.png",
                    "quotes": [
                        {
                            "id": 10,
                            "author": "Victor Hugo",
                            "book": "Los miserables",
                            "name": "Es en las noches de diciembre, cuando el termómetro está a cero, cuando más pensamos en el sol."
                        },
                        {
                            "id": 15,
                            "author": "Miguel de Cervantes",
                            "book": "Don Quijote de la Mancha",
                            "name": "Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama."
                        }
                    ],
                    "texts": []
                },
                {
                    "id": 17,
                    "name": "Sabiduria",
                    "imagePath": "/assets/img/themes/default-theme.png",
                    "quotes": [
                        {
                            "id": 9,
                            "author": "Charles Dickens",
                            "book": "Vieja tienda de curiosidades",
                            "name": "El sol es débil cuando se eleva primero, y cobra fuerza y coraje a medida que avanza el día."
                        },
                        {
                            "id": 14,
                            "author": "J.R.R. Tolkien",
                            "book": "El Señor de los Anillos",
                            "name": "No todo lo que es de oro reluce, ni toda la gente errante anda perdida."
                        }
                    ],
                    "texts": []
                },
                {
                    "id": 18,
                    "name": "Valores",
                    "imagePath": "/assets/img/themes/default-theme.png",
                    "quotes": [
                        {
                            "id": 3,
                            "author": "Mary Shelley",
                            "book": "Frankestein",
                            "name": "Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra."
                        },
                        {
                            "id": 4,
                            "author": "Arthur Conan Doyle",
                            "book": "La compañía blanca",
                            "name": "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación."
                        },
                        {
                            "id": 5,
                            "author": "Leo Tolstoy",
                            "book": "Anna Karenina",
                            "name": "Si buscas la perfección nunca estarás contento."
                        },
                        {
                            "id": 8,
                            "author": "Henry James",
                            "book": "El retrato de una dama",
                            "name": "Llamo a la gente “rica” cuando son capaces de satisfacer las necesidades de su imaginación."
                        },
                        {
                            "id": 11,
                            "author": "Charles Dickens",
                            "book": "David Copperfield",
                            "name": "Mi consejo es: nunca hagas mañana lo que puedes hacer hoy. La procrastinación es la ladrona del tiempo."
                        },
                        {
                            "id": 12,
                            "author": "William Shakespeare",
                            "book": "Enrique VI",
                            "name": "Luchar hasta el último aliento."
                        },
                        {
                            "id": 13,
                            "author": "Philip Roth",
                            "book": "El animal moribundo",
                            "name": "Deja de preocuparte por envejecer y piensa en crecer."
                        }
                    ],
                    "texts": []
                },
                {
                    "id": 19,
                    "name": "Vida",
                    "imagePath": "/assets/img/themes/default-theme.png",
                    "quotes": [
                        {
                            "id": 1,
                            "author": "Frank Herbert",
                            "book": "Duna",
                            "name": "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar."
                        },
                        {
                            "id": 2,
                            "author": "Richard Yates",
                            "book": "Revolutionary Road",
                            "name": "Estar solo no tiene nada que ver con cuantas personas hay alrededor."
                        },
                        {
                            "id": 6,
                            "author": "Carlos Ruiz Zafón",
                            "book": "El Juego del Ángel",
                            "name": "No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir."
                        }
                    ],
                    "texts": []
                },
                {
                    "id": 20,
                    "name": "Esperanza",
                    "imagePath": "/assets/img/themes/default-theme.png",
                    "quotes": [
                        {
                            "id": 7,
                            "author": "H.G. Wells",
                            "book": "La isla del doctor Moreau",
                            "name": "Tengo esperanza o podría no vivir."
                        }
                    ],
                    "texts": []
                },
                {
                    "id": 24,
                    "name": "DAW-Prueba API Rest",
                    "imagePath": null,
                    "quotes": [],
                    "texts": []
                }
            ],
            "pageable": {
                "sort": {
                    "sorted": false,
                    "unsorted": true,
                    "empty": true
                },
                "offset": 0,
                "pageSize": 6,
                "pageNumber": 0,
                "paged": true,
                "unpaged": false
            },
            "last": true,
            "totalElements": 6,
            "totalPages": 1,
            "size": 6,
            "number": 0,
            "sort": {
                "sorted": false,
                "unsorted": true,
                "empty": true
            },
            "numberOfElements": 6,
            "first": true,
            "empty": false
        }

## View an specific theme (only Administrator & User)
#### URL

	< /themes/{id} >

* #### Method:

	`GET`
	
* #### Parameters:

	* URL
        - id = [int]

   
* #### Request:

        {
            "id": 16,
            "name": "Amor",
            "imagePath": "/assets/img/themes/default-theme.png",
            "quotes": [
                {
                    "id": 10,
                    "author": "Victor Hugo",
                    "book": "Los miserables",
                    "name": "Es en las noches de diciembre, cuando el termómetro está a cero, cuando más pensamos en el sol."
                },
                {
                    "id": 15,
                    "author": "Miguel de Cervantes",
                    "book": "Don Quijote de la Mancha",
                    "name": "Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama."
                }
            ],
            "texts": []
        }

## Add new Theme (only Administrator)
#### URL

	< /themes/ >

* #### Method:

	`POST`
	
* #### Parameters:

	* Body

            {
                "name": "DAW-Prueba API Rest"
            }

   
* #### Request:

        {
            "id": 24,
            "name": "DAW-Prueba API Rest",
            "imagePath": null,
            "quotes": null,
            "texts": null
        }

## Edit Theme (only Administrator)
#### URL

	< /themes/{id} >

* #### Method:

	`PUT`
	
* #### Parameters:

    * URL
        - id = [int]
	* Body

            {
                "name": "FRASES CELEBRES"
            }

   
* #### Request:

        {
            "id": 24,
            "name": "FRASES CELEBRES",
            "imagePath": null,
            "quotes": [],
            "texts": []
        }

## Delete Theme (only Administrator)
#### URL

	< /themes/{id} >

* #### Method:

	`DELETE`
	
* #### Parameters:

    * URL
        - id = [int]

   
* #### Request:

        {
            "id": 24,
            "name": "FRASES CELEBRES",
            "imagePath": null,
            "quotes": [],
            "texts": []
        }

## Add Text to Theme (only Administrator)
#### URL

	< /themes/addTextToTheme{id} >

* #### Method:

	`POST`
	
* #### Parameters:

    * URL
        - id = [int]

    *Body
            {
                "text": "Esto es una prueba de la API Rest de la Fase 3 de DAW"
            }

   
* #### Request:

        {
            "id": 24,
            "name": "FRASES CELEBRES",
            "imagePath": null,
            "quotes": [],
            "texts": [
                {
                    "id": 25,
                    "text": "Esto es una prueba de la API Rest de la Fase 3 de DAW"
                }
            ]
        }

## Add new quote (only Administrator)
#### URL

	< /quotes/ >

* #### Method:

	`POST`
	
* #### Parameters:

    *Body

            {
                "author": "Henry Ford",
                "book": "Desconocido",
                "name": "Tanto si piensas que puedes, como si piensas que no puedes, estas en lo cierto"     
            }

   
* #### Request:

        {
            "id": 26,
            "author": "Henry Ford",
            "book": "Desconocido",
            "name": "Tanto si piensas que puedes, como si piensas que no puedes, estas en lo cierto"
        }


## Add Quote to Theme (only Administrator)
#### URL

	< /themes/addQuote{idQuote}ToTheme{idTheme} >

* #### Method:

	`POST`
	
* #### Parameters:

    * URL
        - idQuote = [int]
        - idTheme = [int]
       
* #### Request:

        {
            "id": 24,
            "name": "FRASES CELEBRES",
            "imagePath": null,
            "quotes": [
                {
                    "id": 26,
                    "author": "Henry Ford",
                    "book": "Desconocido",
                    "name": "Tanto si piensas que puedes, como si piensas que no puedes, estas en lo cierto"
                }
            ],
            "texts": [
                {
                    "id": 25,
                    "text": "Esto es una prueba de la API Rest de la Fase 3 de DAW"
                }
            ]
        }

## Add Image to Theme (only Administrator)
### URL

    < /themes/{idTheme}/image >

* #### Method:

	`POST`
	
* #### Parameters:

    * URL
        - idTheme = [int]
    *Body
        - Key = file
        - Type = file
        - Value: Select image from folder
       
* #### Request:

            {
                "id": 24,
                "name": "FRASES CELEBRES",
                "imagePath": "/assets/img/themes/img-theme-24.png",
                "quotes": [
                    {
                        "id": 26,
                        "author": "Henry Ford",
                        "book": "Desconocido",
                        "name": "Tanto si piensas que puedes, como si piensas que no puedes, estas en lo cierto"
                    }
                ],
                "texts": [
                    {
                        "id": 25,
                        "text": "Esto es una prueba de la API Rest de la Fase 3 de DAW"
                    }
                ]
            }


## View Image to Theme (only Administrator)
### URL

    < /themes/image/{idTheme} >

* #### Method:

	`GET`
	
* #### Parameters:

    * URL
        - idTheme = [int]
       
* #### Request:

           Show the image 


## View quotes
### URL

    < /quotes/ >

* #### Method:

	`GET`
	
* #### Parameters:

    * Without parameters it only shows the first page, if you want to see the    topics of more pages you should put /?page={page} then in the url

        - page = [int]
       
* #### Request:

           {
                "content": [
                    {
                        "id": 1,
                        "author": "Frank Herbert",
                        "book": "Duna",
                        "name": "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar."
                    },
                    {
                        "id": 2,
                        "author": "Richard Yates",
                        "book": "Revolutionary Road",
                        "name": "Estar solo no tiene nada que ver con cuantas personas hay alrededor."
                    },
                    {
                        "id": 3,
                        "author": "Mary Shelley",
                        "book": "Frankestein",
                        "name": "Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra."
                    },
                    {
                        "id": 4,
                        "author": "Arthur Conan Doyle",
                        "book": "La compañía blanca",
                        "name": "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación."
                    },
                    {
                        "id": 5,
                        "author": "Leo Tolstoy",
                        "book": "Anna Karenina",
                        "name": "Si buscas la perfección nunca estarás contento."
                    },
                    {
                        "id": 6,
                        "author": "Carlos Ruiz Zafón",
                        "book": "El Juego del Ángel",
                        "name": "No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir."
                    }
                ],
                "pageable": {
                    "sort": {
                        "sorted": false,
                        "unsorted": true,
                        "empty": true
                    },
                    "offset": 0,
                    "pageSize": 6,
                    "pageNumber": 0,
                    "paged": true,
                    "unpaged": false
                },
                "last": false,
                "totalElements": 16,
                "totalPages": 3,
                "size": 6,
                "number": 0,
                "sort": {
                    "sorted": false,
                    "unsorted": true,
                    "empty": true
                },
                "numberOfElements": 6,
                "first": true,
                "empty": false
            }

## View specific quotes (only Administrator & User)
### URL

    < /quotes/{id} >

* #### Method:

	`GET`
	
* #### Parameters:

    * URL
        - id = [int]
       
* #### Request:

            {
                "id": 6,
                "author": "Carlos Ruiz Zafón",
                "book": "El Juego del Ángel",
                "name": "No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir."
            }

## Edit quotes (only Administrator)
### URL

    < /quotes/{id} >

* #### Method:

	`PUT`
	
* #### Parameters:

    * URL
        - id = [int]

    *Body

        {
            "author": "DAW Grupo 3 ",
            "book": "Demo",
            "name": "Prueba de edicion de una cita"
        }

       
* #### Request:

            {
                "id": 6,
                "author": "DAW Grupo 3 ",
                "book": "Demo",
                "name": "Prueba de edicion de una cita"
            }

## Delete Quote from Theme (only Administrator)
### URL

    < /themes/deleteQuote{idQuote}/FromTheme{idTheme} >

* #### Method:

	`DELETE`
	
* #### Parameters:

    * URL
        - idQuote = [int]
        - idTheme = [int]
    
* #### Request:

            {
                "id": 24,
                "name": "FRASES CELEBRES",
                "imagePath": "/assets/img/themes/img-theme-24.png",
                "quotes": [],
                "texts": [
                    {
                        "id": 25,
                        "text": "Esto es una prueba de la API Rest de la Fase 3 de DAW"
                    },
                    {
                        "id": 28,
                        "text": "Esto es una prueba de la API Rest de la Fase 3 de DAW"
                    }
                ]
            }

## Delete Text from Theme (only Administrator)
### URL

    < /themes/deleteText{idText}/FromTheme{idTheme} >

* #### Method:

	`DELETE`
	
* #### Parameters:

    * URL
        - idText = [int]
        - idTheme = [int]
    
* #### Request:

        {
            "id": 24,
            "name": "FRASES CELEBRES",
            "imagePath": "/assets/img/themes/img-theme-24.png",
            "quotes": [],
            "texts": []
        }

## Delete quote (only Administrator)
### URL

    < /quote/{id} >

* #### Method:

	`DELETE`
	
* #### Parameters:

    * URL
        - id = [int]
    
* #### Request:

        {
            "id": 6,
            "author": "DAW Grupo 3 ",
            "book": "Demo",
            "name": "Prueba de edicion de una cita"
        }

## View Histogram
### URL

    < /histogram >

* #### Method:

	`GET`
	
* #### Parameters:

    * Without parameters
    
* #### Request:

        {
            "histogram": [
                {
                    "theme": "Amor",
                    "numQuotes": 2
                },
                {
                    "theme": "Sabiduria",
                    "numQuotes": 2
                },
                {
                    "theme": "Valores",
                    "numQuotes": 7
                },
                {
                    "theme": "Vida",
                    "numQuotes": 3
                },
                {
                    "theme": "Esperanza",
                    "numQuotes": 1
                }
            ]
        }

## Download PDF (only Administrator & User)
### URL

    < /themes/PDF{idTheme} >

* #### Method:

	`GET`
	
* #### Parameters:

    * URL

        - idTheme = [int]
    
* #### Request:

            - When you send the request, the download option opens on your own machine