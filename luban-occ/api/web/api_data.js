define({ "api": [
  {
    "type": "GET",
    "url": "/hr/staff/education/rate",
    "title": "查询企业或分公司的学历占比",
    "group": "人力资源模块",
    "version": "1.0.0",
    "description": "<p>查询当前所在企业的学历占比</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"zk_rate\": 0.1,\n\"bk_rate\": 0.03,\n\"bkjys_rate\": 0.2,\n\"qt_rate\": 0.4\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询当前所在企业的学历占比错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/humanresources/controller/StaffController.java",
    "groupTitle": "人力资源模块",
    "name": "GetHrStaffEducationRate"
  },
  {
    "type": "GET",
    "url": "/hr/staff/profession/rate",
    "title": "查询企业或分公司员工职称占比",
    "group": "人力资源模块",
    "version": "1.0.0",
    "description": "<p>查询当前所在企业的职称占比</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"series\": [\n{\n\"title\": \"职务占比\",\n\"color\": [\"#4B87F3\",\"#7B4FD1\",\"#E26C51\",\"#8091BA\",\"#8091B4\"],\n\"type\": \"pie\",\n\"data\": [\n{\"value\": 100,\"name\": \"初级工程师\"},\n{\"value\": 200,\"name\": \"中级工程师\"},\n{\"value\": 300,\"name\": \"高级工程师\"},\n{\"value\": 400,\"name\": \"专家及以上\"},\n{\"value\": 500,\"name\": \"其他\"}\n]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询当前所在企业的职称占比接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/humanresources/controller/StaffController.java",
    "groupTitle": "人力资源模块",
    "name": "GetHrStaffProfessionRate"
  },
  {
    "type": "GET",
    "url": "/hr/staff/totalNum",
    "title": "查询企业或分公司在职人员总数",
    "group": "人力资源模块",
    "version": "1.0.0",
    "description": "<p>查询当前所在企业的所有的在职人员总数</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\": 总的员工数\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询当前所在企业的所有的在职人员总数接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/humanresources/controller/StaffController.java",
    "groupTitle": "人力资源模块",
    "name": "GetHrStaffTotalnum"
  },
  {
    "type": "GET",
    "url": "/hr/worker/area/rate",
    "title": "查询企业或分公司劳务人员区域占比",
    "group": "人力资源模块",
    "version": "1.0.0",
    "description": "<p>查询当前所在企业的所有的劳务人员各个区域占比人数</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n \"code\": 200,\n \"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"title\": \"劳务占比\",\n\"series\": [\n{\n\"name\": \"劳务占比\",\n\"type\": \"bar\",\n\"data\": [\n100,\n200,\n300,\n400,\n500,\n600,\n700\n]\n}\n],\n\"xaxis\": [\n{\n\"data\": [\n\"东北区\",\n\"华东区\",\n\"华北区\",\n\"华中区\",\n\"华南区\",\n\"西南区\",\n\"西北区\"\n]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询当前所在企业的所有的劳务人员各个区域占比人数错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/humanresources/controller/WorkerController.java",
    "groupTitle": "人力资源模块",
    "name": "GetHrWorkerAreaRate"
  },
  {
    "type": "GET",
    "url": "/hr/worker/holder/rate",
    "title": "查询企业或分公司劳务人员持证上岗占比",
    "group": "人力资源模块",
    "version": "1.0.0",
    "description": "<p>查询当前所在企业的所有的劳务人员持证上岗占比</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"title\": \"持证上岗率\",\n\"series\": [\n{\n\"type\": \"pictorialBar\",\n\"data\": [\n385,\n 46\n]\n}\n],\n\"xaxis\": {\n\"total\": 431\n},\n\"yaxis\": [\n{\n\"type\": \"category\",\n\"data\": [\n\"持证\",\n\"其他\"\n]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询当前所在企业的所有的劳务人员持证上岗占比错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/humanresources/controller/WorkerController.java",
    "groupTitle": "人力资源模块",
    "name": "GetHrWorkerHolderRate"
  },
  {
    "type": "GET",
    "url": "/hr/worker/totalNum",
    "title": "查询企业或分公司的劳务人员总数",
    "group": "人力资源模块",
    "version": "1.0.0",
    "description": "<p>查询当前所在企业的所有的劳务人员总数</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":总的劳务人员数\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询当前所在企业的所有的在职人员总数接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/humanresources/controller/WorkerController.java",
    "groupTitle": "人力资源模块",
    "name": "GetHrWorkerTotalnum"
  },
  {
    "type": "GET",
    "url": "/safetyquality/accident",
    "title": "获取近两年事故人数、死亡人数&安全事故率",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取近两年事故人数、死亡人数&amp;安全事故率接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/safetyquality/accident",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"death_toll\": [\n      \t{\n    \t\t\t\"year\":\"2019\",\n    \t\t\t\"num\":1\n   \t\t},\n   \t\t{\n    \t\t\t\"year\":\"2018\",\n    \t\t\t\"num\":0\n   \t\t}\n \t],\n\t\t\"accident\": [\n  \t\t{\n    \t\t\t\"year\":\"2019\",\n    \t\t\t\"num\":1\n   \t\t},\n   \t\t{\n    \t\t\t\"year\":\"2018\",\n    \t\t\t\"num\":0\n   \t\t}\n\t\t],\n\t\t\"accident_rate\":0.12\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "GetSafetyqualityAccident"
  },
  {
    "type": "GET",
    "url": "/safetyquality/civilization/project/rate",
    "title": "获取文明工地达标率",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取本年度优质工程所占比率接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/safetyquality/civilization/project/rate",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"title\":\"文明工地达标率\",\n\t\t\"series\": [\n\t\t\t{\n \t\t\t\"type\": \"bar\",\n \t\t\t\"data\": [79],  \n \t\t\t\"total\":100          \n\t\t\t}\n\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "GetSafetyqualityCivilizationProjectRate"
  },
  {
    "type": "GET",
    "url": "/safetyquality/passrate",
    "title": "获取质量合格率",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取本年度质量合格率接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/safetyquality/passrate",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"title\":\"质量合格率\",\n\t\t\"series\" : [\n\t\t\t{   \n\t\t\t\t\"type\":\"pie\",\n\t\t\t\t\"data\":[\n        \t\t\t{\"value\":68,\"name\":\"优质\"}\n\t\t\t\t],\n\t\t\t\t\"total\":100\n\t\t\t},\n\t\t\t{   \n\t\t\t\t\"type\":\"pie\",\n\t\t\t\t\"data\":[\n        \t\t\t{\"value\":29,\"name\":\"合格\"}\n\t\t\t\t],\n\t\t\t\t\"total\":100\n\t\t\t},\n\t\t\t{   \n\t\t\t\t\"type\":\"pie\",\n\t\t\t\t\"data\":[\n        \t\t\t{\"value\":3,\"name\":\"其他\"}\n\t\t\t\t],\n\t\t\t\t\"total\":100\n\t\t\t}\n\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "GetSafetyqualityPassrate"
  },
  {
    "type": "GET",
    "url": "/safetyquality/safety/time",
    "title": "获取安全施工时间",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取安全施工时间接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/safetyquality/safety/time",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\t\"code\": 200,\n\t\"status\": \"success\",\n\t\"message\": \"成功\",\n\t\"data\":10000\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "GetSafetyqualitySafetyTime"
  },
  {
    "type": "GET",
    "url": "/safetyquality/underconstructionpro/amount",
    "title": "获取在建项目数量",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取在建项目数量接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/safetyquality/underconstructionpro/amount",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\t\"code\": 200,\n\t\"status\": \"success\",\n\t\"message\": \"成功\",\n\t\"data\":100\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "GetSafetyqualityUnderconstructionproAmount"
  },
  {
    "type": "POST",
    "url": "/safetyquality/civilization/projectinfos",
    "title": "获取文明工程名录",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取文明工程名录接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\t\"page_num\":1,\n\t\"page_size\":5\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"total_page\":20,\n\t\t\"count\":100,\n\t\t\"project_infos\":[\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"获奖时间\"},\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"},\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"},\n   \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"},\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"}\n\t\t]\n\t }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "PostSafetyqualityCivilizationProjectinfos"
  },
  {
    "type": "POST",
    "url": "/safetyquality/highquality/projectinfos",
    "title": "获取优质工程名录",
    "group": "安全质量模块",
    "version": "1.0.0",
    "description": "<p>获取优质工程名录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\t\"page_num\":1,\n\t\"page_size\":5\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"total_page\":20,\n\t\t\"count\":100,\n\t\t\"project_infos\":[\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"获奖时间\"},\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"},\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"},\n   \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"},\n    \t\t\t{\"project_name\": \"项目名称\", \"award\":\"奖项名称\",\"time\":\"2019.01.01\"}\n\t\t]\n\t }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/safetyquality/controller/SafetyqualityController.java",
    "groupTitle": "安全质量模块",
    "name": "PostSafetyqualityHighqualityProjectinfos"
  },
  {
    "type": "GET",
    "url": "/news/detail",
    "title": "查询新闻详情",
    "group": "新闻模块",
    "version": "1.0.0",
    "description": "<p>查询新闻详情</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "?id=2223raf",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"id\": \"新闻id\",\n\"title\": \"标题\",\n\"cover\": \"封面\",\n\"content\": \"内容\",\n\"type\": 1\n\"time\":时间戳\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询查询新闻详情错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/news/controller/EnterpriseNewsController.java",
    "groupTitle": "新闻模块",
    "name": "GetNewsDetail"
  },
  {
    "type": "GET",
    "url": "/news/list",
    "title": "查询新闻列表",
    "group": "新闻模块",
    "version": "1.0.0",
    "description": "<p>查询新闻列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>1:企业新闻 2:党政新闻 3:工会新闻</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?type=1&currentPage=1&pageSize=5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"result\":[\n{\n\"id\": \"新闻1id\",\n\"title\": \"新闻1title\",\n\"cover\": \"封面1url\",\n\"type\": 1\n},\n{\n\"id\": \"新闻2id\",\n\"title\": \"新闻2title\",\n\"cover\": \"封面2url\",\n\"type\": 1\n}\n]\ntotal_count: 2(总条数)\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>分页查询新闻列表接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/news/controller/EnterpriseNewsController.java",
    "groupTitle": "新闻模块",
    "name": "GetNewsList"
  },
  {
    "type": "GET",
    "url": "/news/totalNum",
    "title": "查询新闻各类的总条数",
    "group": "新闻模块",
    "version": "1.0.0",
    "description": "<p>查询新闻列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>1:企业新闻 2:党政新闻 3:工会新闻</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"qy_total\": 企业新闻条数,\n\"dj_total\": 党建新闻条数,\n\"gh_total\": 工会新闻条数\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>分页查询新闻列表接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/news/controller/EnterpriseNewsController.java",
    "groupTitle": "新闻模块",
    "name": "GetNewsTotalnum"
  },
  {
    "type": "POST",
    "url": "/web/getCompanyList",
    "title": "获取企业列表接口",
    "group": "登录模块",
    "version": "1.0.0",
    "description": "<p>用于用户登录前获取企业列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "username",
            "description": "<p>通行证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "password",
            "description": "<p>密码 (md5加密)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"username\":\"hubiao\",\n    \"password\":\"111111\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":\n    {\n        [{\n            \"epid\":\"企业ID\",\n            \"epid_name\":\"企业名称\"\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4001": [
          {
            "group": "4001",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>用户名为空</p>"
          },
          {
            "group": "4001",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4001代表有错误</p>"
          },
          {
            "group": "4001",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "4002": [
          {
            "group": "4002",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>密码为空</p>"
          },
          {
            "group": "4002",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4002代表有错误</p>"
          },
          {
            "group": "4002",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "4003": [
          {
            "group": "4003",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>账号或密码错误</p>"
          },
          {
            "group": "4003",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4003代表有错误</p>"
          },
          {
            "group": "4003",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "4004": [
          {
            "group": "4004",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>账号不存在</p>"
          },
          {
            "group": "4004",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4004代表有错误</p>"
          },
          {
            "group": "4004",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n    \"code\":4001,\n    \"status\":\"fail\",\n    \"message\":\"用户名为空！\",\n    \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 4002,\n     \"status\": \"fail\",\n     \"message\": \"密码为空\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 4003,\n    \"status\": \"fail\",\n    \"message\": \"账号或密码错误\",\n    \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 4004,\n    \"status\": \"fail\",\n    \"message\": \"账号不存在\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/login/controller/LoginController.java",
    "groupTitle": "登录模块",
    "name": "PostWebGetcompanylist"
  },
  {
    "type": "POST",
    "url": "/web/loginout",
    "title": "退出登录接口",
    "group": "登录模块",
    "version": "1.0.0",
    "description": "<p>用于用户登出</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":true\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>登出错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"登出错误！\",\n     \"data\":false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/login/controller/LoginOutController.java",
    "groupTitle": "登录模块",
    "name": "PostWebLoginout"
  },
  {
    "type": "POST",
    "url": "/web/login",
    "title": "登录接口",
    "name": "login",
    "group": "登录模块",
    "version": "1.0.0",
    "description": "<p>用于用户登录 登录成功返回通行证账号和企业id列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "username",
            "description": "<p>通行证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "password",
            "description": "<p>密码 (md5加密)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..50",
            "optional": false,
            "field": "epid",
            "description": "<p>企业ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"username\":\"hubiao\",\n    \"password\":\"111111\",\n    \"epid\"：1028\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":\n    {\n        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyIiwiZXhwIjoxNTQzNTQ4OTE4fQ.xeih9r4F5lbiyYbYMpvloPhxnmq-aLBzlg8gMy43MWo\",\n        \"user_name\":\"通行证\",\n        \"user_id\":\"用户id\",\n        \"role_name\":\"角色\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4001": [
          {
            "group": "4001",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>用户名为空</p>"
          },
          {
            "group": "4001",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4001代表有错误</p>"
          },
          {
            "group": "4001",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "4002": [
          {
            "group": "4002",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>密码为空</p>"
          },
          {
            "group": "4002",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4002代表有错误</p>"
          },
          {
            "group": "4002",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "4003": [
          {
            "group": "4003",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>账号或密码错误</p>"
          },
          {
            "group": "4003",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4003代表有错误</p>"
          },
          {
            "group": "4003",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "4004": [
          {
            "group": "4004",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>账号不存在</p>"
          },
          {
            "group": "4004",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 4004代表有错误</p>"
          },
          {
            "group": "4004",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n    \"code\":4001,\n    \"status\":\"fail\",\n    \"message\":\"用户名为空！\",\n    \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 4002,\n     \"status\": \"fail\",\n     \"message\": \"密码为空\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 4003,\n    \"status\": \"fail\",\n    \"message\": \"账号或密码错误\",\n    \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 4004,\n    \"status\": \"fail\",\n    \"message\": \"账号不存在\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/login/controller/LoginController.java",
    "groupTitle": "登录模块"
  },
  {
    "type": "GET",
    "url": "/scientific/subject/amount",
    "title": "获取近三年各级科研课题数量",
    "group": "科研指标模块",
    "version": "1.0.0",
    "description": "<p>获取近三年各级科研课题数量</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/scientific/subject/amount",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"x_axis\": [\n\t\t\t{\n\t\t\t\t\"data\": [\"2017\",\"2018\",\"2019\"]\n\t\t\t}\n \t],\n \t\"series\": [\n\t\t\t{\n\t\t\t\t\"type\":\"bar\",\n\t\t\t\t\"name\": \"国家级课题\",\n\t\t\t\t\"data\": [320, 332, 301]\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"type\":\"bar\",\n\t\t\t\t\"name\": \"省市级课题\",\n\t\t\t\t\"data\": [220, 182, 191]\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"type\":\"bar\",\n\t\t\t\t\"name\": \"企业级课题\",\n\t\t\t\t\"data\": [220, 182, 191]\n\t\t\t}\n \t]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/scientific/controller/ScientificController.java",
    "groupTitle": "科研指标模块",
    "name": "GetScientificSubjectAmount"
  },
  {
    "type": "POST",
    "url": "/scientific/subject/excellent",
    "title": "获取优秀科研成果列表",
    "group": "科研指标模块",
    "version": "1.0.0",
    "description": "<p>获取签约合同地区占比接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\t\"page_num\":1,\n\t\"page_size\":5\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"total_page\":20,\n\t\t\"count\":100,\n\t\t\"award_infos\":[\n\t\t\t{\"unit_name\": \"获奖单位\", \"science_type\": \"科研类型\",\"award\":\"奖项名称\"},\n\t\t\t{\"unit_name\": \"获奖单位\", \"science_type\": \"科研类型\",\"award\":\"奖项名称\"},\n\t\t\t{\"unit_name\": \"获奖单位\", \"science_type\": \"科研类型\",\"award\":\"奖项名称\"},\n\t\t\t{\"unit_name\": \"获奖单位\", \"science_type\": \"科研类型\",\"award\":\"奖项名称\"},\n\t\t\t{\"unit_name\": \"获奖单位\", \"science_type\": \"科研类型\",\"award\":\"奖项名称\"}\n\t\t]\n\t }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取签约合同地区占比接口</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/scientific/controller/ScientificController.java",
    "groupTitle": "科研指标模块",
    "name": "PostScientificSubjectExcellent"
  },
  {
    "type": "GET",
    "url": "/contract/areascale",
    "title": "获取签约合同地区占比接口",
    "group": "签约合同模块",
    "version": "1.0.0",
    "description": "<p>获取签约合同地区占比接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/contract/areascale",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"title\": \"合同签约地区占比\",\n\t\t\"indicator\": [\n\t\t\t{\"name\": \"华中\", \"max\": 6500},\n\t\t\t{\"name\": \"华南\", \"max\": 16000},\n\t\t\t{\"name\": \"华东\", \"max\": 30000},\n\t\t\t{\"name\": \"华北\", \"max\": 38000},\n\t\t\t{\"name\": \"华西\", \"max\": 52000},\n\t\t\t{\"name\": \"西北\", \"max\": 52000},\n\t\t\t{\"name\": \"西南\", \"max\": 25000},\n\t\t\t{\"name\": \"东北\", \"max\": 52000},\n\t\t],\n\t\t\"series\": [{\n\t\t\t\"type\": \"radar\",\n\t\t\t\"data\" : [\n\t\t\t\t{\n\t\t\t\t\t\"value\" : [4300, 10000, 28000, 35000, 50000, 19000, 28000, 35000],\n\t\t\t\t},\n\t\t\t]\n\t\t}]\n\t }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取签约合同地区占比接口</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/contractsign/controller/ContractController.java",
    "groupTitle": "签约合同模块",
    "name": "GetContractAreascale"
  },
  {
    "type": "GET",
    "url": "/contract/completionRate",
    "title": "获取签约合同完成率接口",
    "group": "签约合同模块",
    "version": "1.0.0",
    "description": "<p>获取签约合同完成率接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/contract/completionRate",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\t\"code\": 200,\n\t\"status\": \"success\",\n\t\"message\": \"成功\",\n\t\"data\": {\n  \t\t\"title\": \"合同签约完成率\",\n \t\t\"series\": [\n    \t\t\t{\n       \t\t\t\"type\": \"liquidFill\",\n      \t\t\t\"data\": [0.1]\n \t\t\t}\n\t\t\t]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取签约合同完成率接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/contractsign/controller/ContractController.java",
    "groupTitle": "签约合同模块",
    "name": "GetContractCompletionrate"
  },
  {
    "type": "GET",
    "url": "/contract/plan",
    "title": "获取签约合同计划接口",
    "group": "签约合同模块",
    "version": "1.0.0",
    "description": "<p>获取签约合同计划接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/contract/plan",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"title\": \"合同签约计划\",\n\t\t\"xAxis\": [\n\t\t\t{\n\t\t\t\t\"data\": [\"2017\",\"2018\",\"2019\"]\n\t\t\t}\n\t\t],\n\t\t\"series\": [\n\t\t\t{\n\t\t\t\t\"type\":\"bar\",\n\t\t\t\t\"\"name\"\": \"计划\",\n\t\t\t\t\"data\": [320, 332, 301]\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"type\":\"bar\",\n\t\t\t\t\"\"name\"\": \"实际\",\n\t\t\t\t\"data\": [220, 182, 191]\n\t\t\t}\n\t\t]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取签约合同计划接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/contractsign/controller/ContractController.java",
    "groupTitle": "签约合同模块",
    "name": "GetContractPlan"
  },
  {
    "type": "GET",
    "url": "/manage/category",
    "title": "查询工程类型完成指标折线图",
    "group": "经营状况模块",
    "version": "1.0.0",
    "description": "<p>查询工程类型完成指标折线图</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>1:表示查询三屏结构数据 2:表示查询单屏接口数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?type=1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"series\": [\n{\n\"name\": \"房建\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#9A661D\"\n},\n{\n\"name\": \"基建\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#AA1B3D\"\n},\n{\n\"name\": \"累计\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#1F5BD4\"\n}\n],\n\"xaxis\": [\n{\n\"type\": \"category\",\n\"data\": [\"1月\",\"2月\",\"3月\",\"4月\",\"5月\",\"6月\",\"7月\",\"8月\",\"9月\",\"10月\",\"11月\",\"12月\"]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询工程类型完成指标折线图错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/ManageController.java",
    "groupTitle": "经营状况模块",
    "name": "GetManageCategory"
  },
  {
    "type": "GET",
    "url": "/manage/output/areascale",
    "title": "获取地区完成指标接口",
    "group": "经营状况模块",
    "version": "1.0.0",
    "description": "<p>获取地区完成指标接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/manage/output/areascale",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"title\": \"地区完成指标\",\n\t\t\"indicator\": [\n\t\t\t{\"name\": \"华中\", \"max\": 6500},\n\t\t\t{\"name\": \"华南\", \"max\": 16000},\n\t\t\t{\"name\": \"华东\", \"max\": 30000},\n\t\t\t{\"name\": \"华北\", \"max\": 38000},\n\t\t\t{\"name\": \"华西\", \"max\": 52000},\n\t\t\t{\"name\": \"西北\", \"max\": 52000},\n\t\t\t{\"name\": \"西南\", \"max\": 25000},\n\t\t\t{\"name\": \"东北\", \"max\": 52000}\n\t\t]\n\t\t\"series\": [{\n\t\t\t\"type\": \"radar\",\n\t\t\t\"data\" : [\n\t\t\t\t{\n\t\t\t\t\t\"value\" : [4300, 10000, 28000, 35000, 50000, 19000, 28000, 35000],\n\t\t\t\t},\n\t\t\t]\n\t\t}]\n\t }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取地区完成指标接口失败</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/ManageController.java",
    "groupTitle": "经营状况模块",
    "name": "GetManageOutputAreascale"
  },
  {
    "type": "GET",
    "url": "/manage/total/output",
    "title": "获取累计完成产值接口",
    "group": "经营状况模块",
    "version": "1.0.0",
    "description": "<p>获取累计完成产值接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/manage/total/output",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":50000\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取累计收入、集团目标、累计成本、累计利润、完成率接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/ManageController.java",
    "groupTitle": "经营状况模块",
    "name": "GetManageTotalOutput"
  },
  {
    "type": "GET",
    "url": "/funds/trend/bar",
    "title": "查询资金走势柱状图(三屏+单屏)",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>查询资金走势柱状图</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>1:表示查询三屏结构数据 2:表示查询单屏接口数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?type=1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"series\": [\n{\n\"name\": \"计划成本\",\n\"type\": \"bar\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#4B87F3\"\n},\n{\n\"name\": \"计划收入\",\n\"type\": \"bar\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#4B87F3\"\n},\n{\n\"name\": \"实际成本\",\n\"type\": \"bar\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#4B87F3\"\n},\n{\n\"name\": \"实际收入\",\n\"type\": \"bar\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#4B87F3\"\n}\n],\n\"xaxis\": [\n{\n\"data\": [\"18.03\",\"18.04\",\"18.05\",\"18.06\",\"18.07\",\"18.08\",\"18.09\",\"18.10\",\"18.11\",\"18.12\",\"19.01\",\"19.02\"]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询资金走势柱状图错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "GetFundsTrendBar"
  },
  {
    "type": "GET",
    "url": "/funds/trend/category",
    "title": "查询资金走势折线图",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>查询资金走势折线图</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"series\": [\n{\n\"name\": \"累计计划收入\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#DFDBAF\"\n},\n{\n\"name\": \"累计计划成本\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#D0312A\"\n},\n{\n\"name\": \"累计计划利润\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#4B87F3\"\n},\n{\n\"name\": \"累计实际收入\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#E67B53\"\n},\n{\n\"name\": \"累计实际成本\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#7C43F2\"\n},\n{\n\"name\": \"累计实际利润\",\n\"type\": \"line\",\n\"data\": [100,200,300,400,500,600,700,800,900,100,110,120],\n\"color\": \"#71B6E6\"\n}\n],\n\"xaxis\": [\n{\n\"type\": \"category\",\n\"boundary_gap\": false,\n\"data\": [\"18.03\",\"18.04\",\"18.05\",\"18.06\",\"18.07\",\"18.08\",\"18.09\",\"18.10\",\"18.11\",\"18.12\",\"19.01\",\"19.02\"]\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询资金走势折线图错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "GetFundsTrendCategory"
  },
  {
    "type": "GET",
    "url": "/funds/trend/progressbar",
    "title": "查询资金走势利润指标进度条",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>查询资金走势利润指标进度条</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": {\n\"title\": \"计划利润指标\",\n\"series\": [\n{\n\"type\": \"bar\",\n\"data\": [\n120\n],\n\"total\": 250\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询资金走势利润指标进度条错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "GetFundsTrendProgressbar"
  },
  {
    "type": "GET",
    "url": "/funds/trend/total",
    "title": "查询企业总收入和总支出",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>查询企业总收入</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_income\": 年度总收入,\n\"total_cost\": 年度总支出\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询企业总收入和总支出错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "GetFundsTrendTotal"
  },
  {
    "type": "GET",
    "url": "/purchase/amount/total",
    "title": "获取采购总金额",
    "group": "采购模块",
    "version": "1.0.0",
    "description": "<p>获取采购总金额接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/purchase/amount/total",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":50000\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/purchase/controller/PurchaseController.java",
    "groupTitle": "采购模块",
    "name": "GetPurchaseAmountTotal"
  },
  {
    "type": "GET",
    "url": "/purchase/scale/amount",
    "title": "获取采集占比",
    "group": "采购模块",
    "version": "1.0.0",
    "description": "<p>获取采集占比</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/purchase/scale/amount",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"title\":\"采集占比\",\n\t\t\"series\" : [\n  \t\t{\n  \t\t\t\"type\":\"pie\",\n  \t\t\t\"data\":[\n  \t\t\t\t{\n  \t\t\t\t\t\"value\":3, \n  \t\t\t\t\t\"name\":\"采集占比\"\n  \t\t\t\t}\n  \t\t\t],\n  \t\t\t\"total\":100,\n  \t\t}\n  \t]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/purchase/controller/PurchaseController.java",
    "groupTitle": "采购模块",
    "name": "GetPurchaseScaleAmount"
  },
  {
    "type": "GET",
    "url": "/purchase/scale/material",
    "title": "获取材料采购占比",
    "group": "采购模块",
    "version": "1.0.0",
    "description": "<p>获取材料采购占比接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/purchase/scale/material",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"x_axis\"：[\n\t\t\t{\n\t\t\t\t\"data\": [\"钢筋\", \"混凝土\", \"模板\", \"大型设备\", \"其他\"]\n\t\t\t}\n\t\t]\n\t\t\"title\": \"材料采购占比\",\n\t\t\"series\" : [\n\t\t\t{\n \t\t\t \"name\":\"材料采购占比\",\n \t\t\t \"type\":\"bar\",\n \t\t\t \"data\":[200, 400, 200, 334, 390]\n\t\t\t}\n\t\t]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/purchase/controller/PurchaseController.java",
    "groupTitle": "采购模块",
    "name": "GetPurchaseScaleMaterial"
  },
  {
    "type": "GET",
    "url": "/shiny/deptInfo",
    "title": "查询企业项目目部点位数",
    "group": "雪亮工程",
    "version": "1.0.0",
    "description": "<p>查询企业项目目部点位数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?currentPage=1&pageSize=5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"result\":[\n{\n\"deptId\":\"项目部1对应的id\",\n\"deptName\":\"项目部1名称\",\n\"totalNum\":\"对应项目部1下总的点位数\"\n<p>\n},\n{\n\"deptId\":\"项目部2对应的id\",\n\"deptName\":\"项目部2名称\",\n\"totalNum\":\"对应项目部2下总的点位数\"\n}\n]\ntotal_count: 33(总条数)\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询企业项目目部点位数错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/shinyprojcet/controller/ShinyProjectController.java",
    "groupTitle": "雪亮工程",
    "name": "GetShinyDeptinfo"
  },
  {
    "type": "GET",
    "url": "/shiny/single/deptInfo",
    "title": "查询企业或分公司下的所有项目部信息",
    "group": "雪亮工程",
    "version": "1.0.0",
    "description": "<p>查询企业或分公司下的所有项目部信息</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\": 200,\n\"status\": \"success\",\n\"message\": \"成功\",\n\"data\": [\n{\n\"dept_id\": \"sahgdkjgajo\",\n\"dept_name\": \"项目1\"\n},\n{\n\"dept_id\": \"efkjaklgj\",\n\"dept_name\": \"项目2\"\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询企业项目目部点位数错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/shinyprojcet/controller/ShinyProjectController.java",
    "groupTitle": "雪亮工程",
    "name": "GetShinySingleDeptinfo"
  },
  {
    "type": "GET",
    "url": "/shiny/totalNum",
    "title": "查询企业的点位数",
    "group": "雪亮工程",
    "version": "1.0.0",
    "description": "<p>查询企业的点位数</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "无",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\": 企业总的点位数\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询企业的点位数接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/shinyprojcet/controller/ShinyProjectController.java",
    "groupTitle": "雪亮工程",
    "name": "GetShinyTotalnum"
  },
  {
    "type": "GET",
    "url": "/shiny/video",
    "title": "查询监控、重点、高危、关注项目监控",
    "group": "雪亮工程",
    "version": "1.0.0",
    "description": "<p>分页查询监控、重点、高危、关注项目监控</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>1:项目监控、2:重点项目、3:高危项目、4:关注项目</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?type=1currentPage=1&pageSize=5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"result\":[\n{\n\"dept_name\": \"监控项目1名称\",\n\"url\": \"监控2url\"\n<p>\n},\n {\n\"dept_name\": \"监控项目2名称\",\n\"url\": \"监控2url\"\n}\n]\ntotal_count: 22(总条数)\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>禁止访问</p>"
          },
          {
            "group": "403",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 403代表有错误</p>"
          },
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>查询监控、重点、高危、关注项目监控错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取数据失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\":\"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/shinyprojcet/controller/ShinyProjectController.java",
    "groupTitle": "雪亮工程",
    "name": "GetShinyVideo"
  },
  {
    "type": "GET",
    "url": "/income/org/change/{org_type}/{org_id}",
    "title": "切换当前用户对应的orgid接口",
    "group": "首页模块",
    "version": "1.0.0",
    "description": "<p>切换当前用户对应的orgid接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..1}",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织机构类型 0:企业 1:分公司 2:项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": false,
            "field": "org_id",
            "description": "<p>组织机构id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "/income/org/change/{org_type}/{org_id}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/IncomeController.java",
    "groupTitle": "首页模块",
    "name": "GetIncomeOrgChangeOrg_typeOrg_id"
  },
  {
    "type": "GET",
    "url": "/income/grouptree",
    "title": "获取集团组织树接口",
    "group": "首页累计收入模块",
    "version": "1.0.0",
    "description": "<p>获取集团组织树接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/income/grouptree",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\": [\n\t{\n\t\t\"name\": \"鲁班软件建设集团（中国）有限责任公司\",\n\t\t\"value\": \"513c5a7e1f8744dc9782e50964291d5d\",\n\t\t\"type\": 1,\n\t\t\"par_id\": \"513c5a7e1f8744dc9782e50964291d5d\",\n\t\t\"children\": [\n\t\t\t{\n\t\t\t\t\"name\": \"center接口测试编辑后的组织机构\",\n\t\t\t\t\"value\": \"055193add37c4e63a7e9a630084f26f2\",\n\t\t\t\t\"type\": 1,\n\t\t\t\t\"par_id\": \"513c5a7e1f8744dc9782e50964291d5d\",\n\t\t\t\t\"children\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"name\": \"测试项目112\",\n\t\t\t\t\t\t\"value\": \"bd50c00b54eb493aac3425fa90e93f66\",\n\t\t\t\t\t\t\"type\": 2,\n\t\t\t\t\t\t\"par_id\": \"055193add37c4e63a7e9a630084f26f2\",\n\t\t\t\t\t\t\"children\": []\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取集团组织树接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/IncomeController.java",
    "groupTitle": "首页累计收入模块",
    "name": "GetIncomeGrouptree"
  },
  {
    "type": "GET",
    "url": "/income/total",
    "title": "获取累计收入、集团目标、累计成本、累计利润、完成率接口",
    "group": "首页累计收入模块",
    "version": "1.0.0",
    "description": "<p>获取累计收入、集团目标、累计成本、累计利润、完成率接口</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/income/total",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误   500代表有错误</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功   fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\t\t\"total_income\":50000,\n\t\t\"group_target\":10000,\n\t\t\"total_cost\":2000,\n\t\t\"total_profit\":2000,\n\t\t\"completed_rate\":0.90\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>无权限访问，无token或token已经过期</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 401代表有错误</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>获取累计收入、集团目标、累计成本、累计利润、完成率接口错误</p>"
          },
          {
            "group": "500",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误 500代表有错误</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功 fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"获取失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-web/src/main/java/com/lubansoft/occ/web/projectmanagement/controller/IncomeController.java",
    "groupTitle": "首页累计收入模块",
    "name": "GetIncomeTotal"
  }
] });
