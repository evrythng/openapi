# openapi

> Formerly the Swagger spec.

OpenAPI spec files for the EVRYTHNG REST API.
[OpenAPI](https://swagger.io/docs/specification/about/) is an API description
format that is human and machine-readable, and enables a number of valuable
benefits including automated documentation generation and API behavior
verification.


## As a module

This spec can be used programmatically using the `evrythng-swagger` npm module:

```js
const spec = require('evrythng-swagger');

// Print all endpoints
Object.keys(spec.paths).forEach(console.log);
```


## Anatomy

The main file (`openapi.json`) describes all the endpoints in the EVRYTHNG
API. These are listed in the `paths` object:

```
"paths": {
  "/access": {
    ...
  },
  "/accesses": {
    ...
  },
  "/accesses/{accessId}": {
    ...
  },
  ...
}
```

For each endpoint, each available HTTP method is listed as an operation:

```
"/access": {
  "get": {
    ...
  },
},
...
```

Each operation contains the information about that request, including
parameters, payload schemas, response codes, response schemas, and example
responses:

```
"get": {
  "tags": [
    "Access"
  ],
  "summary": "Read key access information",
  "description": "Read key access information for the authenticating key.",
  "responses": {
    "200": {
      "description": "The access information for the authenticating key.",
      "content": {
        "application/json": {
          "schema": {
            "$ref": "#/components/schemas/KeyAccessDocument"
          },
          "example": {
            "account": "UFNCRXfCVM87QNawaE8rrKqc",
            "actor": {
              "type": "operator",
              "id": "U2NCaXfCBgPaQ5wRwhTsWnmc"
            }
          }
        }
      }
    }
  },
  "x-api-keys": [
    "Operator",
    "Application",
    "Trusted Application",
    "Application User",
    "Device"
  ],
  ...
}
```

A reference to schemas objects is used via the `$ref` keyword, referencing an
object elsewhere in the file, such as `components/schemas`. In the case of the
example above (`KeyAccessDocument`):

```
"components": {
  "schemas": {
    "KeyAccessDocument": {
      "additionalProperties": false,
      "type": "object",
      "description": "Object describing the account and actor associated with a key",
      "properties": {
        "account": {
          "type": "string",
          "description": "Account ID for this key",
          "readOnly": true,
          "pattern": "^[abcdefghkmnpqrstwxyABCDEFGHKMNPQRSTUVWXY0123456789]{24}$"
        },
        "actor": {
          "$ref": "#/components/schemas/ActorDocument"
        }
      }
    },
    ...
  },
  ...
}
```

These definitions detail which fields are expected and allowed for each request
or response payload schema, using the standard JSON Schema format. See the
OpenAPI specification for more information on the structure of an API spec.


## Extensions

The following vendor-specific extensions are implemented:

**x-api-keys**

Details which API keys may be used for this operation. Possible values are:
`Operator`, `Application`, `Trusted Application`, `Application User`, and
`Device`. See the
[API Keys and Key Permissions](https://developers.evrythng.com/docs/api-key-scopes-and-permissions)
page in the EVRYTHNG Developer Hub for more information about API keys.


**x-filterable-fields**

Details which fields on this resource are filterable using
[filters](https://developers.evrythng.com/docs/filters).
