# GENERAL INFORMATION
All API queries begin with /api.

Any request that is not authorized to be made returns the error code 405 Method Not Allowed, 403 Forbidden or 401 Not Authorized.

When the resource that is accessed does not exist, 404 Not Found is returned.
  
When a new resource is generated, 201 Created is returned.

When a request is successfully made, 200 OK is returned.


# Register
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

# LogIn
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