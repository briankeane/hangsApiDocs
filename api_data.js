define({ "api": [
  {
    "type": "post",
    "url": "/user/",
    "title": "Create User",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>If a device_id is specified and there is no verified     user in the database, a verification passcode will be sent to the      user via text.  Use the password at endpoint: /api/v1/users/verify/</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The user&#39;s phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>A unique identifier for the user&#39;s device</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./users/api.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/verify/",
    "title": "Verify User",
    "name": "VerifyUser",
    "group": "User",
    "description": "<p>If the phone and passcode match up, the user is logged   in and sent a verification token.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The user&#39;s phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>The passcode that was texted to the user</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>A token key for use in the Authorization header.                                     it should be used in the format: { &quot;Authorization&quot;: &quot;Token thisIsTheProvidedKey&quot; }</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202\n{ \n   \"key\": \"apoidfuanqrekmweriofoiusdn\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n  {\n    \"message\": \"incorrect passcode\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/api.py",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apiDocs/main.js",
    "group": "_home_vagrant_www_apiDocs_main_js",
    "groupTitle": "_home_vagrant_www_apiDocs_main_js",
    "name": ""
  }
] });