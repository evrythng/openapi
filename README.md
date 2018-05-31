# swagger

Swagger file for the EVRYTHNG REST API. 
[Swagger](http://swagger.io/specification/) is an API description format that is 
machine-readable, and enables a number of valuable benefits including automated
documentation generation and API behavior verification.


## Anatomy

The Swagger file (`swagger.json`) describes all the endpoints in the EVRYTHNG 
API. These are listed in the `paths` object:

```
"paths": {
  "/access": { 
    ...
  },
  "/accesses": { 
    ...
  },
  "/accesses/:accessId": { 
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
  "tags": [ "Access" ],
  "summary": "Read key access information",
  "description": "Read key access information for the authenticating key.",
  "responses": {
    "200": {
      "description": "The access information for the authenticating key.",
      "schema": { "$ref": "#/definitions/KeyAccessDocument" },
      "examples": {
        "application/json": {
          "account": "UFNCRXfCVM87QNawaE8rrKqc",
          "actor": {
            "type": "operator",
            "id": "U2NCaXfCBgPaQ5wRwhTsWnmc"
          }
        }
      }
    }
  },
  "x-api-keys": [ "Operator", "Application", "Trusted Application", "Application User", "Device" ]
}
```

A reference to schemas objects is used via the `$ref` keyword, referencing an 
object elsewhere in the file, such as `definitions`. In the case of the example 
above (`KeyAccessDocument`):

```
"definitions": {
  "KeyAccessDocument": {
    "additionalProperties": false,
    "type": "object",
    "description": "Object describing the account and actor associated with a key",
    "required": [
      "account", "actor"
    ],
    "properties": {
      "account": {
        "type": "string",
        "description": "Account ID for this key",
        "readOnly": true,
        "pattern": "^[abcdefghkmnpqrstwxyABCDEFGHKMNPQRSTUVWXY0123456789]{24}$"
      },
      "actor": { "$ref": "#/definitions/ActorDocument" }
    }
  },
  ...
}
```

These definitions detail which fields are expected and allowed for each request 
or response payload schema, using the standard JSON Schema format.


## Extensions

The following vendor-specific extensions are implemented:

**x-api-key**

Details which API keys may be used for this operation. Possible values are: 
`Operator`, `Application`, `Trusted Application`, `Application User`, and 
`Device`. See the 
[API Keys and Key Permissions](https://developers.evrythng.com/docs/api-key-scopes-and-permissions) 
page in the EVRYTHNG Developer Hub for more information about API keys.
