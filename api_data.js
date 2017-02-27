define({ "api": [
  {
    "type": "post",
    "url": "/hangouts/",
    "title": "Create Hangout",
    "name": "CreateHangout",
    "group": "Hangout",
    "description": "<p>Posting to this endpoint creates a hangout.  Each invited guest will                     immediately be texted a link to their confirmation page.  If the users                     do not yet exist, they will be created with their &#39;has_signed_up&#39; flag                     set to False.  If the user does exist but has not signed up, their name                     will be updated.  If the user exists and has signed up, the provided name will                     be ignored.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the hangout.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "google_place_id",
            "description": "<p>The google place id for the location</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of the hangout</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>The start_time of the hangout in the format &#39;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#39;</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>The timezone of the hangout</p> "
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "invites",
            "description": "<p>The invite creation info.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The phone number of the invited guest</p> "
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
          "content": "HTTP/1.1 201 Created\n{ \n   \"hangout\": {\n     \"pk\": 25,\n     \"name\": \"Bob's Hangout\",\n     \"google_place_id\": \"sampleGooglePlaceID\",\n     \"address\": \"500 Dead Man's Curve, Nasville, TN 37217\",\n     \"start_time\": \"\",\n     \"invites\": [\n       { \"arrival_time\" = Null\n         \"hangout\": 25,\n         \"message_status\" = Null,\n         \"status\": 0,\n         \"user\": { \n           \"created_at\": \"2017-02-14T17:36:33.600807Z\",\n           \"display_name\" = \"Brian\",\n           \"email\" = \"brian@brian.com\",\n           \"has_signed_up\\\": false,\n           \"password_exists\": false,\n           \"phone\": \"5127914819\",\n           \"pk\": 44,\n           \"arrival_time\" = Null  \n         }\n       }, ... other invites\n      ],\n     \"timezone\": 'America/Chicago',\n     \"creator\": 40\n   } \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n    \"start_time\": [\"This field is required\"],\n    \"name\": [\"This field is required\"],\n    \"invites\": [\"This field is required\"],\n    \"address\": [\"This field is required\"],\n    \"google_place_id\": [\"This field is required\"]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./hangouts/api.py",
    "groupTitle": "Hangout"
  },
  {
    "type": "post",
    "url": "/users/login_with_device_id/",
    "title": "Login With Device ID",
    "name": "LoginWithDeviceID",
    "group": "User",
    "description": "<p>Logs the user in if the device_id is recognized.</p> ",
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
            "description": "<p>The unique identifier for the user&#39;s device</p> "
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
          "content": "HTTP/1.1 202\n{ \n   \"key\": \"thisIsTheProvidedKey\",\n   \"user\": {\n     \"phone\": \"5555555555\",\n     \"display_name\": \"Bob\",\n     \"email\": \"bob@bob.com\",\n     \"password_exists\": false,\n     \"has_signed_up\": true,\n     \"pk\": 45\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n    \"message\": \"device_id not recognized\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n    \"message\": \"phone verification required\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/api.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/send_verification/",
    "title": "Send Verification Text",
    "name": "SendVerification",
    "group": "User",
    "description": "<p>Requests a verification passcode text from the server.</p> ",
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
            "description": "<p>The unique identifier for the user&#39;s device</p> "
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
          "content": "HTTP/1.1 200\n{ \n   \"text_sent\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n    { \"message\": \"both phone and device_id are required\" }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/api.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/verify/",
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
          "content": "HTTP/1.1 202\n{ \n   \"key\": \"thisIsTheProvidedKey\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n    \"message\": \"incorrect passcode\"\n  }",
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