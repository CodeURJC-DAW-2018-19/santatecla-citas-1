# GENERAL INFORMATION
All API queries begin with /api.

Any request that is not authorized to be made returns the error code 405 Method Not Allowed, 403 Forbidden or 401 Not Authorized.

When the resource that is accessed does not exist, 404 Not Found is returned.
  
When a new resource is generated, 201 Created is returned.

When a request is successfully made, 200 OK is returned.

# Methods accessible by anonymous users
The following requests will be allowed to any user even if they are not registered.

