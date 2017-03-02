define({ "api": [
  {
    "type": "post",
    "url": "/groups/",
    "title": "1. Create Group",
    "name": "CreateGroup",
    "group": "Groups",
    "description": "<p>A group of users frequently invited together by the user.  The group&#39;s                   &#39;owner&#39; will be the authenticated user that made the post request.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>An array of invite creation info</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users.phone",
            "description": "<p>The phone number of the invited guest</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>The name of the invited guest</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 Created\n{\n  \"group\": {\n    \"name\": \"Bob\",\n    \"owner\": {\n      \"display_name\": \"Bob\",\n      \"phone\": \"0000000000\",\n      \"pk\": 40\n    },\n    \"users\": [\n      {\n        \"display_name\": \"Bobby\",\n        \"phone\": \"1111111111\",\n        \"pk\": 47\n      },\n      {\n        \"display_name\": \"Bobbina\",\n        \"phone\": \"2222222222\",\n        \"pk\": 48\n      },\n      {\n        \"display_name\": \"Boob\",\n        \"phone\": \"3333333333\",\n        \"pk\": 49\n      }\n    ],\n    \"pk\": 23\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./groups/api.py",
    "groupTitle": "Groups"
  },
  {
    "type": "post",
    "url": "/hangouts/",
    "title": "1. Create Hangout",
    "name": "CreateHangout",
    "group": "Hangouts",
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
            "description": "<p>An array of invite creation info</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "invites.phone",
            "description": "<p>The phone number of the invited guest</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "invites.name",
            "description": "<p>The name of the invited guest</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hangout",
            "description": "<p>The newly created hangout object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{ \n   \"hangout\": {\n     \"pk\": 25,\n     \"name\": \"Bob's Hangout\",\n     \"google_place_id\": \"sampleGooglePlaceID\",\n     \"address\": \"500 Dead Man's Curve, Nasville, TN 37217\",\n     \"start_time\": \"\",\n     \"invites\": [\n       { \"arrival_time\" = Null\n         \"hangout\": 25,\n         \"message_status\" = Null,\n         \"status\": 0,\n         \"user\": { \n           \"created_at\": \"2017-02-14T17:36:33.600807Z\",\n           \"display_name\": \"Brian\",\n           \"email\": \"brian@brian.com\",\n           \"has_signed_up\": false,\n           \"password_exists\": false,\n           \"phone\": \"5127914819\",\n           \"pk\": 44,\n           \"arrival_time\" = Null  \n         }\n       }, ... other invites\n      ],\n     \"timezone\": 'America/Chicago',\n     \"creator\": 40\n   }\n}",
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
    "groupTitle": "Hangouts"
  },
  {
    "type": "get",
    "url": "/stats/weekly_summary/:year/:month/:day/:hour/:minute/",
    "title": "1. Weekly Summary",
    "name": "GetWeeklySummary",
    "group": "Stats",
    "description": "<p>Provides a summary of the activity for the week including the requested date.  If                     no date is requested, it provides the current, unfinished week.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "Int",
            "description": "<p>year                The year of the requested date</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>The starting date of the week.</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>The ending date of the week.</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "hangout_count",
            "description": "<p>The number of hangouts created.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"hangout_count\": 5,\n    \"end_date\": \"2017-03-06\",\n    \"start_date\": \"2017-02-27\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./stats/api.py",
    "groupTitle": "Stats"
  },
  {
    "type": "get",
    "url": "/users/me/groups/",
    "title": "4. Get My Groups",
    "name": "GetMyGroups",
    "group": "Users",
    "description": "<p>returns a list of the user&#39;s groups</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>An array of the current user&#39;s groups</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.name",
            "description": "<p>The name of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups.owner",
            "description": "<p>The owner of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.pk",
            "description": "<p>The primary key of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups.users",
            "description": "<p>An array of the users included in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.users.display_name",
            "description": "<p>The user&#39;s display_name</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.users.phone",
            "description": "<p>Duh</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.users.pk",
            "description": "<p>The user&#39;s primary key</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"groups\": [\n    {\n      \"name\": \"Bob's Group\",\n      \"owner\": {\n        \"display_name\": \"Brian\",\n        \"phone\": \"5127914819\",\n        \"pk\": 40\n      },\n      \"users\": [\n        {\n          \"display_name\": \"Bobby\",\n          \"phone\": \"1111111111\",\n          \"pk\": 47\n        },\n        {\n          \"display_name\": \"Bobbina\",\n          \"phone\": \"2222222222\",\n          \"pk\": 48\n        },\n        {\n          \"display_name\": \"Boob\",\n          \"phone\": \"3333333333\",\n          \"pk\": 49\n        }\n      ],\n      \"pk\": 23\n    }, ... more groups\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/api.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:pk/",
    "title": "5. Get User",
    "name": "GetUser",
    "group": "Users",
    "description": "<p>returns info about a user.  &#39;me&#39; can be used as the pk for the authenticated user.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202\n{ \n   \"phone\": \"5555555555\",\n   \"display_name\": \"Bob\",\n   \"email\": \"bob@bob.com\",\n   \"password_exists\": false,\n   \"has_signed_up\": true,\n   \"pk\": 45,\n   \"role\": \"user\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/api.py",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login_with_device_id/",
    "title": "1. Login With Device ID",
    "name": "LoginWithDeviceID",
    "group": "Users",
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
          "content": "HTTP/1.1 202\n{ \n   \"key\": \"thisIsTheProvidedKey\",\n   \"user\": {\n     \"phone\": \"5555555555\",\n     \"display_name\": \"Bob\",\n     \"email\": \"bob@bob.com\",\n     \"password_exists\": false,\n     \"has_signed_up\": true,\n     \"pk\": 45,\n     \"role\": \"user\"\n   }\n}",
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
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/send_verification/",
    "title": "2. Send Verification Text",
    "name": "SendVerification",
    "group": "Users",
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
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/verify/",
    "title": "3. Verify User",
    "name": "VerifyUser",
    "group": "Users",
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
    "groupTitle": "Users"
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