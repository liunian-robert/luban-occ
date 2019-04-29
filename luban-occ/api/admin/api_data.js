define({ "api": [
  {
    "type": "GET",
    "url": "/spinner/type",
    "title": "下拉列表接口",
    "group": "下拉列表模块",
    "version": "1.0.0",
    "description": "<p>获取下拉列表数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>下拉类型 1:工地评比情况, 2:质量合格情况, 3:学历, 4:职称, 5:采购方式, 6:课题级别</p>"
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"dropDownList\":[\n{\n\"id\":1,\n\"value\":序号,\n\"type\":对应类型(1:工地评比情况, 2:质量合格情况, 3:学历, 4:职称, 5:采购方式, 6:课题级别),\n\"name\":\"对应名称\",\n\"epid\":企业id(默认为0),\n\"sort\":排序\n},\n{\n\"id\":2,\n\"value\":2,\n\"type\":1,\n\"name\":\"普通工地\",\n\"epid\":0,\n\"sort\":2\n}\n]\n}\n}",
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
            "description": "<p>查询下拉列表信息错误</p>"
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
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/spinner/controller/SpinnerController.java",
    "groupTitle": "下拉列表模块",
    "name": "GetSpinnerType"
  },
  {
    "type": "DELETE",
    "url": "/pm/profitnorm",
    "title": "批量删除产值指标",
    "group": "产值指标模块",
    "version": "1.0.0",
    "description": "<p>批量删除产值指标信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>员工信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"123\",\"234\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除产值指标信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitNormController.java",
    "groupTitle": "产值指标模块",
    "name": "DeletePmProfitnorm"
  },
  {
    "type": "GET",
    "url": "/pm/profitnorm",
    "title": "查询产值指标信息接口",
    "group": "产值指标模块",
    "version": "1.0.0",
    "description": "<p>查询产值指标信息接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orgType",
            "description": "<p>节点类型 1:公司|集团，2:项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "startDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
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
          "content": "?orgid=1000&orgType=2&startDate=&endDate=&str=\"关键字\"&currentPage=1&pageSize=5",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":100\n\"total_data\":{\n \"total_plan_output_value\":100,\n \"total_actual_output_value\": 4\n}\n\"result\":[\n{\n \"id\":\"dadfdasf\",\n \"org_name\":\"adfdfas\",\n \"plan_output_value\":100,\n \"actual_output_value\": 4,\n \"plan_output_value_update\":0,\n \"actual_output_value_update\": 0,\n \"time\":15433333333,\n \"origin\":0\n},\n{\n \"id\":\"dadfdasf\",\n \"org_name\":\"adfdfas\",\n \"plan_output_value\":100,\n \"actual_output_value\": 4,\n \"plan_output_value_update\":0,\n \"actual_output_value_update\": 0,\n \"time\":15433333333,\n \"origin\":0\n}\n]\n}\n}",
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
            "description": "<p>分页查询产值指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitNormController.java",
    "groupTitle": "产值指标模块",
    "name": "GetPmProfitnorm"
  },
  {
    "type": "POST",
    "url": "/pm/profitnorm",
    "title": "新增产值指标信息",
    "group": "产值指标模块",
    "version": "1.0.0",
    "description": "<p>新增产值指标</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>组织结构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "plan_output_value",
            "description": "<p>计划产值</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "actual_output_value",
            "description": "<p>实际产值</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..50",
            "optional": false,
            "field": "time",
            "description": "<p>时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结构类型 0:企业 1:公司，2：项目部</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"orgid\":\"1000\",\n\"plan_output_value\":100,\n\"actual_output_value\": 4,\n\"time\":156789045,\n\"org_type\":2\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增产值指标错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitNormController.java",
    "groupTitle": "产值指标模块",
    "name": "PostPmProfitnorm"
  },
  {
    "type": "PUT",
    "url": "/pm/profitnorm",
    "title": "修改产值指标",
    "group": "产值指标模块",
    "version": "1.0.0",
    "description": "<p>修改产值指标</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>产值指标ID</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "plan_output_value",
            "description": "<p>计划产值</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "actual_output_value",
            "description": "<p>实际产值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"dadfdasf\",\n\"plan_output_value\":100,\n\"actual_output_value\": 4,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改产值指标信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitNormController.java",
    "groupTitle": "产值指标模块",
    "name": "PutPmProfitnorm"
  },
  {
    "type": "DELETE",
    "url": "/qs/qualityengineer",
    "title": "删除优质工程",
    "group": "优质工程模块",
    "version": "1.0.0",
    "description": "<p>批量删除优质工程</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>优质工程id列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n          \"ids\":[\n               \"1234\",\n               \"1235\",\n               \"1236\"\n          ]\n      }",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除优质工程错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityEngineeringController.java",
    "groupTitle": "优质工程模块",
    "name": "DeleteQsQualityengineer"
  },
  {
    "type": "GET",
    "url": "/qs/company/qualityengineer",
    "title": "查询分公司优质工程接口",
    "group": "优质工程模块",
    "version": "1.0.0",
    "description": "<p>查询分公司|集团优质工程信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司|集团id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "str",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳)</p>"
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
          "content": "?orgid=1000&str=asdfdfs&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"pageList\":[\n{\n\"id\":\"1\",\n\"dept_name:\"222\",\n\"award\":\"获奖\",\n\"award_time\":\"获奖时间(时间戳)\"\n},\n{\n\"id\":\"2\",\n\"dept_name\":\"222\",\n\"award\":\"金像奖\",\n\"award_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询优质工程信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityEngineeringController.java",
    "groupTitle": "优质工程模块",
    "name": "GetQsCompanyQualityengineer"
  },
  {
    "type": "GET",
    "url": "/qs/qualityengineer",
    "title": "查询优质工程接口",
    "group": "优质工程模块",
    "version": "1.0.0",
    "description": "<p>查询优质工程信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "str",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳)</p>"
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
          "content": "?deptId=1000&str=adsfasdf&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"pageList\":[\n{\n\"id\":\"1\",\n\"epid\":\"企业id\",\n\"dept_id\":\"项目部id\",\n\"dept_name\":\"项目部名称\",\n\"award\":\"获奖\",\n\"award_time\":\"获奖时间(时间戳)\"\n},\n{\n\"id\":\"2\",\n\"epid\":\"22\",\n\"dept_id\":\"222\",\n\"dept_name\":\"项目部名称\",\n\"award\":\"金像奖\",\n\"award_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询优质工程信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityEngineeringController.java",
    "groupTitle": "优质工程模块",
    "name": "GetQsQualityengineer"
  },
  {
    "type": "POST",
    "url": "/qs/qualityengineer",
    "title": "新增优质工程接口",
    "group": "优质工程模块",
    "version": "1.0.0",
    "description": "<p>新增优质工程</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "award",
            "description": "<p>获奖情况</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": false,
            "field": "award_time",
            "description": "<p>获奖时间 (时间戳S)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"dept_id\":\"1000\",\n\"award\":10,\n\"award_time\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增优质工程错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityEngineeringController.java",
    "groupTitle": "优质工程模块",
    "name": "PostQsQualityengineer"
  },
  {
    "type": "DELETE",
    "url": "/pm/profitcomp",
    "title": "批量删除利润对比信息",
    "group": "利润对比模块",
    "version": "1.0.0",
    "description": "<p>批量删除利润对比信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>员工信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"123\",\"234\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除利润对比信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitComparisonController.java",
    "groupTitle": "利润对比模块",
    "name": "DeletePmProfitcomp"
  },
  {
    "type": "GET",
    "url": "/pm/profitcomp",
    "title": "查询利润对比信息接口",
    "group": "利润对比模块",
    "version": "1.0.0",
    "description": "<p>查询利润对比信息接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orgType",
            "description": "<p>节点类型 1:公司|集团，2:项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "startDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
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
          "content": "?orgid=1000&orgType=2&startDate=&endDate=&str=\"关键字\"&currentPage=1&pageSize=5",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":100\n\"total_data\":{\n \"total_plan_income\":100,\n \"total_actual_income\": 4,\n \"total_plan_cost\":3,\n \"total_actual_cost\":2,\n \"total_plan_profit\":100,\n \"total_actual_profit\":100,\n}\n\"result\":[\n{\n \"id\":\"dadfdasf\",\n \"org_name\":\"adfdfas\",\n \"plan_income\":100,\n \"actual_income\": 4,\n \"plan_cost\":3,\n \"actual_cost\":2,\n \"plan_profit\":100,\n \"actual_profit\":100,\n \"total_income_update\":0,\n \"total_cost_update\": 0,\n \"product_cost_update\":0,\n \"manage_cost_update\":0,\n \"time\":15433333333,\n \"origin\":0\n},\n{\n \"id\":\"dadfdasf\",\n \"org_name\":\"\",\n \"total_income\":100,\n \"total_cost\": 4,\n \"product_cost\":3,\n \"manage_cost\":2,\n \"total_income_update\":0,\n \"total_cost_update\": 0,\n \"product_cost_update\":0,\n \"manage_cost_update\":0,\n \"time\":15433333333,\n \"origin\":0\n}\n]\n}\n}",
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
            "description": "<p>分页查询利润对比信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitComparisonController.java",
    "groupTitle": "利润对比模块",
    "name": "GetPmProfitcomp"
  },
  {
    "type": "GET",
    "url": "/pm/profitcomp/init/{orgid}",
    "title": "同步GOVERN数据",
    "group": "利润对比模块",
    "version": "1.0.0",
    "description": "<p>同步GOVERN数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>员工信息id</p>"
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":1\n}",
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
            "description": "<p>同步GOVERN数据错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"同步失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitComparisonController.java",
    "groupTitle": "利润对比模块",
    "name": "GetPmProfitcompInitOrgid"
  },
  {
    "type": "POST",
    "url": "/pm/profitcomp",
    "title": "新增利润对比信息",
    "group": "利润对比模块",
    "version": "1.0.0",
    "description": "<p>新增利润对比</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>组织结构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "plan_income",
            "description": "<p>计划收入</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "actual_income",
            "description": "<p>实际收入</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "plan_cost",
            "description": "<p>计划成本</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "actual_cost",
            "description": "<p>实际成本</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..50",
            "optional": false,
            "field": "time",
            "description": "<p>时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结构类型 0:企业 1:公司，2：项目部</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"orgid\":\"1000\",\n\"plan_income\":100,\n\"actual_income\": 4,\n\"plan_cost\":3,\n\"actual_cost\":2,\n\"time\":156789045,\n\"org_type\":2\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增利润对比错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitComparisonController.java",
    "groupTitle": "利润对比模块",
    "name": "PostPmProfitcomp"
  },
  {
    "type": "PUT",
    "url": "/pm/profitcomp",
    "title": "修改利润对比",
    "group": "利润对比模块",
    "version": "1.0.0",
    "description": "<p>修改利润对比</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>利润对比ID</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "plan_income",
            "description": "<p>计划收入</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "actual_income",
            "description": "<p>实际收入</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "plan_cost",
            "description": "<p>计划成本</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "actual_cost",
            "description": "<p>实际成本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"dadfdasf\",\n\"plan_income\":100,\n\"actual_income\": 4,\n\"plan_cost\":3,\n\"actual_cost\":2,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改利润对比信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/ProfitComparisonController.java",
    "groupTitle": "利润对比模块",
    "name": "PutPmProfitcomp"
  },
  {
    "type": "DELETE",
    "url": "/hr/worker",
    "title": "删除劳务人员",
    "group": "劳务人员模块",
    "version": "1.0.0",
    "description": "<p>批量删除劳务人员</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>劳务人员id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\n     \"1234\",\n     \"1235\",\n     \"1236\"\n    ]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":true\n}",
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
            "description": "<p>删除劳务人员错误</p>"
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
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"删除失败！\",\n    \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 401,\n     \"status\": \"fail\",\n     \"message\": \"error token\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 403,\n    \"status\": \"fail\",\n    \"message\": \"forbidden\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/WorkerController.java",
    "groupTitle": "劳务人员模块",
    "name": "DeleteHrWorker"
  },
  {
    "type": "GET",
    "url": "/hr/company/worker",
    "title": "查询分公司劳务人员接口",
    "group": "劳务人员模块",
    "version": "1.0.0",
    "description": "<p>查询分公司劳务人员</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
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
          "content": "?orgid=1000&currentPage=1&pageSize=5&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"total_count\":10,\n     \"total_data\":{\n        \"total_worker_num\":100,\n        \"total_holder_num\":100,\n        \"total_unlicensed_num\":100\n     },\n     \"result\":[\n          {\n             \"id\":\"1\",\n             \"epid\":\"企业id\",\n             \"dept_id\":\"项目部id\",\n             \"dept_name\":\"项目部名称\",\n             \"number\":\"合约编号\",\n             \"contract_type\":\"合约类型\",\n             \"contract_money\":合同金额,\n             \"sign_time\":\"签约时间(时间戳)\"\n         },\n         {\n             \"id\":\"2\",\n             \"epid\":\"22\",\n             \"dept_id\":\"222\",\n             \"dept_name\":\"项目部名称\",\n             \"number\":\"22222222\",\n             \"contract_type\":\"劳动合同\",\n             \"contract_money\":1000.000,\n             \"sign_time\":\"1544432345\"\n         }\n     ],\n     \"total\":\"累计数据\"\n  }\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/WorkerController.java",
    "groupTitle": "劳务人员模块",
    "name": "GetHrCompanyWorker"
  },
  {
    "type": "GET",
    "url": "/hr/worker",
    "title": "查询劳务人员接口",
    "group": "劳务人员模块",
    "version": "1.0.0",
    "description": "<p>查询劳务人员</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "currentpage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?deptId=1000&str=\"关键字\"&currentpage=1&pagesize=5",
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
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":{\n        \"result\":[\n            {\n                \"id\":\"1\",\n                \"epid\":\"企业id\",\n                \"deptId\":\"项目部id\",\n                \"personName\":\"人员姓名\",\n                \"idCard\":\"身份证号\",\n                \"workType\":\"工种\",\n                \"certificate\":\"持证情况\"\n            },\n            {\n                \"id\":\"2\",\n                \"epid\":\"22\",\n                \"deptId\":\"222\",\n                \"personName\":\"lisi\",\n                \"idCard\":\"身份证号\",\n                \"workType\":\"钢筋工\",\n                \"certificate\":\"钢筋工证书\"\n            }\n         ]\n    }\n}",
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
            "description": "<p>分页查询劳务人员错误</p>"
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
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"获取数据失败！\",\n     \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 401,\n     \"status\":\"fail\",\n     \"message\": \"error token\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 403,\n    \"status\": \"fail\",\n    \"message\": \"forbidden\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/WorkerController.java",
    "groupTitle": "劳务人员模块",
    "name": "GetHrWorker"
  },
  {
    "type": "POST",
    "url": "/hr/worker",
    "title": "新增劳务人员接口",
    "group": "劳务人员模块",
    "version": "1.0.0",
    "description": "<p>新增劳务人员</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "person_name",
            "description": "<p>人员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "id_card",
            "description": "<p>人员身份证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "work_type",
            "description": "<p>工种</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "certificate",
            "description": "<p>持证情况</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"dept_id\":\"节点id\",\n    \"person_name\":\"姓名\",\n    \"id_card\":\"身份证\",\n    \"work_type\":\"钢筋工\",\n    \"certificate\":\"钢筋工证书\"\n}",
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
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":true\n}",
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
            "description": "<p>新增劳务人员错误</p>"
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
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"新增失败！\",\n    \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 401,\n     \"status\": \"fail\",\n     \"message\": \"error token\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 403,\n    \"status\": \"fail\",\n    \"message\": \"forbidden\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/WorkerController.java",
    "groupTitle": "劳务人员模块",
    "name": "PostHrWorker"
  },
  {
    "type": "POST",
    "url": "/import/worker",
    "title": "导入劳务人员信息接口",
    "group": "劳务人员模块",
    "version": "1.0.0",
    "description": "<p>导入劳务人员信息接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>excle模板文件</p>"
          }
        ]
      }
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除员工信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"导入失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/WorkerController.java",
    "groupTitle": "劳务人员模块",
    "name": "PostImportWorker"
  },
  {
    "type": "PUT",
    "url": "/hr/company/worker",
    "title": "修改分公司劳务人员",
    "group": "劳务人员模块",
    "version": "1.0.0",
    "description": "<p>修改分公司劳务人员</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>劳务人员d</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total_worker_num",
            "description": "<p>劳务总人数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "holder_num",
            "description": "<p>持证人数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unlicensed_num",
            "description": "<p>无证人数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"1000\",\n\"total_worker_num\":\"劳务总人数\",\n\"holder_num\":\"持证人数\",\n\"unlicensed_num\":\"无证人数\",\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改分公司劳务人员错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/WorkerController.java",
    "groupTitle": "劳务人员模块",
    "name": "PutHrCompanyWorker"
  },
  {
    "type": "DELETE",
    "url": "/con/amount/contract",
    "title": "删除计划签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>批量删除计划签约信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>计划签约信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"1\",\"2\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除计划签约错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "DeleteConAmountContract"
  },
  {
    "type": "DELETE",
    "url": "/con/contract",
    "title": "删除实际签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>批量删除实际签约信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>合约指标信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"1\",\"2\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除合约指标错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "DeleteConContract"
  },
  {
    "type": "GET",
    "url": "/con/amount/contract",
    "title": "查询计划签约",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>查询计划签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id</p>"
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
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "startDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?orgId=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346&str=\"",
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
          "content": " {\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":10,\n\"total_data\":{\n   \"total_account\":100\n}\n\"result\":[\n{\n\"id\":\"1\",\n\"epid\":\"企业id\",\n\"orgid\":\"项目部id\",\n\"orgname\":\"合约编号\",\n\"account\":123,\n\"sign_time\":1544432345\n}\n]\n}\n}",
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
            "description": "<p>查询计划签约错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "GetConAmountContract"
  },
  {
    "type": "GET",
    "url": "/con/company/contract",
    "title": "查询分公司实际签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>查询分公司|集团实际签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司|集团id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>区域</p>"
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
          "content": "?orgid=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346&location=1,2,3&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"data\":[\n          {\n             \"id\":\"1\",\n             \"epid\":\"企业id\",\n             \"dept_id\":\"项目部id\",\n             \"dept_name\":\"项目部名称\",\n             \"number\":\"合约编号\",\n             \"contract_type\":\"合约类型\",\n             \"contract_money\":合同金额,\n             \"sign_time\":\"签约时间(时间戳)\"\n         },\n         {\n             \"id\":\"2\",\n             \"epid\":\"22\",\n             \"dept_id\":\"222\",\n             \"dept_name\":\"项目部名称\",\n             \"number\":\"22222222\",\n             \"contract_type\":\"劳动合同\",\n             \"contract_money\":1000.000,\n             \"sign_time\":\"1544432345\"\n         }\n     ],\n     \"total\":\"累计数据\"\n  }\n}",
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
            "description": "<p>分页查询实际签约信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "GetConCompanyContract"
  },
  {
    "type": "GET",
    "url": "/con/contract",
    "title": "查询实际签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>查询实际签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳)</p>"
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
          "content": "?deptId=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":10,\n\"total_data\":{\n   \"total_contract_money\":100\n}\n\"result\":[\n{\n\"id\":\"1\",\n\"epid\":\"企业id\",\n\"dept_id\":\"项目部id\",\n\"number\":\"合约编号\",\n\"contract_type\":\"合约类型\",\n\"contract_money\":合同金额,\n\"sign_time\":\"签约时间(时间戳)\"\n},\n{\n\"id\":\"2\",\n\"epid\":\"22\",\n\"dept_id\":\"222\",\n\"number\":\"22222222\",\n\"contract_type\":\"劳动合同\",\n\"contract_money\":1000.000,\n\"sign_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "GetConContract"
  },
  {
    "type": "POST",
    "url": "/con/amount/contract",
    "title": "添加计划签约金额",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>添加计划签约金额</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "amount",
            "description": "<p>添加计划签约金额(万元)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"orgid\":\"1000\",\n\"amount\":10000.000,\n\"signing_time\":1524567890\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>添加计划签约错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "PostConAmountContract"
  },
  {
    "type": "POST",
    "url": "/con/contract",
    "title": "新增实际签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>新增实际签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "number",
            "description": "<p>合约编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "contract_type",
            "description": "<p>合约类型</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "contract_money",
            "description": "<p>合约金额(万元)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": false,
            "field": "sign_time",
            "description": "<p>签约时间 (时间戳S)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"dept_id\":\"1000\",\n\"contract_no\":\"LBLD-201711021\",\n\"contract_type\":\"劳动合同\",\n\"contract_money\":10000.000,\n\"signing_time\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增实际签约错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "PostConContract"
  },
  {
    "type": "PUT",
    "url": "/con/amount/contract",
    "title": "修改计划签约金额",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>添加计划签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "amount",
            "description": "<p>计划签约金额(万元)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"1000\",\n\"amount\":10000.000\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>添加年度计划签约金额错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "PutConAmountContract"
  },
  {
    "type": "PUT",
    "url": "/con/company/contract",
    "title": "修改实际签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>修改分公司|集团实际签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>合约指标id</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "contract_money",
            "description": "<p>合约金额(万元)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"1000\",\n\"contract_money\":10000.000,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改分公司实际签约错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "PutConCompanyContract"
  },
  {
    "type": "PUT",
    "url": "/con/contract",
    "title": "修改实际签约接口",
    "group": "合约指标模块",
    "version": "1.0.0",
    "description": "<p>修改实际签约</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>合约指标id</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "contract_money",
            "description": "<p>合约金额(万元)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"1000\",\n\"contract_money\":10000.000,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改实际签约错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/contractsign/controller/ContractsignController.java",
    "groupTitle": "合约指标模块",
    "name": "PutConContract"
  },
  {
    "type": "DELETE",
    "url": "/hr/staff",
    "title": "批量删除在职人员",
    "group": "在职人员",
    "version": "1.0.0",
    "description": "<p>批量删除在职人员信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>员工信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"123\",\"234\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除员工信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/StaffController.java",
    "groupTitle": "在职人员",
    "name": "DeleteHrStaff"
  },
  {
    "type": "GET",
    "url": "/hr/get/staff",
    "title": "查询在职人员信息接口",
    "group": "在职人员",
    "version": "1.0.0",
    "description": "<p>查询在职人员信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_type",
            "description": "<p>人员类型 1:公司|集团人员，2:项目部人员</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "education",
            "description": "<p>学历 null:全部，1：专科，2：本科，3：本科以上 4:其他</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "profession",
            "description": "<p>职称 null:全部，1：助理工程师，2：初级工程师，3：中级工程师，4：高级工程师，5：专家及以上,6：其他</p>"
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
          "content": "{\n  \"orgid\":\"123\",\n  \"person_type\":2,\n  \"str\":\"\",\n  \"education\":[1,2],\n  \"profesion\":[1,2],\n  \"currentPage\":1,\n  \"pageSize\":5\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"pageList\":[\n{\n\"id\":\"1\",\n\"epid\":\"企业id\",\n\"orgId\":\"组织节点id\",\n\"personName\":\"员工姓名\",\n\"idCard\":\"身份证号\",\n\"workYears\":工作年限,\n\"education\":学历(1：专科，2：本科，3：本科以上 4:其他),\n\"position\":\"职位\",\n\"profession\":职称(1：助理工程师，2：初级工程师，3：中级工程师，4：高级工程师，5：专家及以上,6：其他),\n\"personType\":员工类型(1:公司|集团，2:项目部)\n\"belong\":人员所属\n}\n]\n}\n}",
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
            "description": "<p>分页查询员工信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/StaffController.java",
    "groupTitle": "在职人员",
    "name": "GetHrGetStaff"
  },
  {
    "type": "POST",
    "url": "/hr/staff",
    "title": "新增在职人员信息接口",
    "group": "在职人员",
    "version": "1.0.0",
    "description": "<p>新增在职人员信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "person_name",
            "description": "<p>人员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "id_card",
            "description": "<p>人员身份证</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..3",
            "optional": false,
            "field": "work_years",
            "description": "<p>工作年限</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "education",
            "description": "<p>学历 1：其他，2：专科，3：本科，4：本科及以上</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "profession",
            "description": "<p>职称 1：无，2：助理工程师，3：初级工程师，4：中级工程师，5：高级工程师，6：专家及以上</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_type",
            "description": "<p>人员类型 1:公司|集团，2：项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "operate_type",
            "description": "<p>操作类型 1:验证身份证号，2:插入数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"orgid\":\"1000\",\n\"person_name\":\"zhangsan\",\n\"id_card\":\"身份证\",\n\"work_years\":3,\n\"education\":2,\n\"position\":\"总裁\",\n\"profession\":1,\n\"person_type\":1\n\"operate_type\":1\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增员工信息错误</p>"
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
        ],
        "4007": [
          {
            "group": "4007",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>录入的数据存在重复</p>"
          },
          {
            "group": "4007",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>4007代表存在重复数据</p>"
          },
          {
            "group": "4007",
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 4007,\n\"status\": \"fail\",\n\"message\": \"录入的数据存在重复\",\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/StaffController.java",
    "groupTitle": "在职人员",
    "name": "PostHrStaff"
  },
  {
    "type": "POST",
    "url": "/import/staff",
    "title": "导入在职人员信息接口",
    "group": "在职人员",
    "version": "1.0.0",
    "description": "<p>导入在职人员信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "personType",
            "description": "<p>人员类型 1:公司人员，2:项目部人员</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "operateType",
            "description": "<p>操作类型 1:验证身份证号，2:导入数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>excle模板文件</p>"
          }
        ]
      }
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除员工信息错误</p>"
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
        ],
        "4007": [
          {
            "group": "4007",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>录入的数据存在重复</p>"
          },
          {
            "group": "4007",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>4007代表存在重复数据</p>"
          },
          {
            "group": "4007",
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"导入失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 4007,\n\"status\": \"fail\",\n\"message\": \"录入的数据存在重复\",\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/StaffController.java",
    "groupTitle": "在职人员",
    "name": "PostImportStaff"
  },
  {
    "type": "DElETE",
    "url": "/qs/safetyaccident",
    "title": "删除安全事故",
    "group": "安全事故模块",
    "version": "1.0.0",
    "description": "<p>批量删除安全事故信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>安全事故信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"ids\":[\n\"1234\",\n\"1235\",\n\"1236\"\n]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除安全事故错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyAccidentController.java",
    "groupTitle": "安全事故模块",
    "name": "DeleteQsSafetyaccident"
  },
  {
    "type": "GET",
    "url": "/qs/company/safetyaccident",
    "title": "查询分公司安全事故接口",
    "group": "安全事故模块",
    "version": "1.0.0",
    "description": "<p>查询分公司|集团层级安全事故</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id|集团结点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳S)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳S)</p>"
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
          "content": "?orgid=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":123,\n\"total_data\":{\n   \"total_general_accident_quantity\":10,\n   \"total_major_accident_quantity\":10,\n   \"total_major_death_quantity\":10,\n},\n\"result\":[\n{\n\"id\":\"1\",\n\"dept_name\":\"项目部名称\",\n\"general_accident_quantity\":普通事故起数,\n\"major_accident_quantity\":重大事故起数,\n\"major_death_quantity\":重大事故死亡人数,\n\"general_accident_quantity_update\":普通事故是否有更新,\n\"major_accident_quantity_update\":重大事故是否有更新,\n\"major_death_quantity_update\":重大事故死亡人数是否有更新,\n\"count_time\":\"统计时间(时间戳)\"\n},\n{\n\"id\":\"2\",\n\"dept_name\":\"222\",\n\"general_accident_quantity\":10,\n\"major_accident_quantity\":10,\n\"major_death_quantity\":10,\n\"general_accident_quantity_update\":普通事故是否有更新,\n\"major_accident_quantity_update\":重大事故是否有更新,\n\"major_death_quantity_update\":重大事故死亡人数是否有更新,\n\"count_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询分公司安全事故信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyAccidentController.java",
    "groupTitle": "安全事故模块",
    "name": "GetQsCompanySafetyaccident"
  },
  {
    "type": "GET",
    "url": "/qs/safetyaccident",
    "title": "查询安全事故接口",
    "group": "安全事故模块",
    "version": "1.0.0",
    "description": "<p>查询安全事故信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳S)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳S)</p>"
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
          "content": "?deptId=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":100,\n\"total_data\":{\n   \"total_general_accident_quantity\":10,\n   \"total_major_accident_quantity\":10,\n   \"total_major_death_quantity\":10,\n}\n\"result\":[\n{\n\"id\":\"2\",\n\"general_accident_quantity\":10,\n\"major_accident_quantity\":10,\n\"major_death_quantity\":10,\n\"general_accident_quantity_update\":普通事故是否有更新,\n\"major_accident_quantity_update\":重大事故是否有更新,\n\"major_death_quantity_update\":重大事故死亡人数是否有更新,\n\"count_time\":\"1544432345\"\n},\n{\n\"id\":\"2\",\n\"general_accident_quantity\":10,\n\"major_accident_quantity\":10,\n\"major_death_quantity\":10,\n\"general_accident_quantity_update\":普通事故是否有更新,\n\"major_accident_quantity_update\":重大事故是否有更新,\n\"major_death_quantity_update\":重大事故死亡人数是否有更新,\n\"count_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询安全事故信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyAccidentController.java",
    "groupTitle": "安全事故模块",
    "name": "GetQsSafetyaccident"
  },
  {
    "type": "POST",
    "url": "/qs/safetyaccident",
    "title": "新增安全事故接口",
    "group": "安全事故模块",
    "version": "1.0.0",
    "description": "<p>新增安全事故信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer..10",
            "optional": false,
            "field": "general_accident_quantity",
            "description": "<p>一般事故数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer..10",
            "optional": false,
            "field": "major_accident_quantity",
            "description": "<p>重大事故数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer..10",
            "optional": false,
            "field": "major_death_quantity",
            "description": "<p>重大事故死亡人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": false,
            "field": "countTime",
            "description": "<p>事故统计时间 (时间戳)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"dept_id\":\"1000\",\n\"general_accident_quantity\":10,\n\"major_accident_quantity\":20,\n\"major_death_quantity\":10,\n\"count_time\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增安全事故错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyAccidentController.java",
    "groupTitle": "安全事故模块",
    "name": "PostQsSafetyaccident"
  },
  {
    "type": "PUT",
    "url": "/qs/company/safetyaccident",
    "title": "修改分公司安全事故接口",
    "group": "安全事故模块",
    "version": "1.0.0",
    "description": "<p>修改分公司|集团安全事故信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>分公司|集团安全事故信息id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..20",
            "optional": true,
            "field": "general_accident_quantity",
            "description": "<p>一般事故数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..20",
            "optional": true,
            "field": "major_accident_quantity",
            "description": "<p>重大事故数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..20",
            "optional": true,
            "field": "major_death_quantity",
            "description": "<p>重大事故死亡人数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"898a657b672249b786e089885296966d\",\n\"general_accident_quantity\":20,\n\"major_accident_quantity\":10,\n\"major_death_quantity\":20\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改分公司安全事故错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"修改失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyAccidentController.java",
    "groupTitle": "安全事故模块",
    "name": "PutQsCompanySafetyaccident"
  },
  {
    "type": "PUT",
    "url": "/qs/safetyaccident",
    "title": "修改安全事故接口",
    "group": "安全事故模块",
    "version": "1.0.0",
    "description": "<p>修改安全事故信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>安全事故信息id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..20",
            "optional": true,
            "field": "general_accident_quantity",
            "description": "<p>一般事故数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..20",
            "optional": true,
            "field": "major_accident_quantity",
            "description": "<p>重大事故数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..20",
            "optional": true,
            "field": "major_death_quantity",
            "description": "<p>重大事故死亡人数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"898a657b672249b786e089885296966d\",\n\"general_accident_quantity\":20,\n\"major_accident_quantity\":10,\n\"major_death_quantity\":20\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改安全事故错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"修改失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyAccidentController.java",
    "groupTitle": "安全事故模块",
    "name": "PutQsSafetyaccident"
  },
  {
    "type": "GET",
    "url": "/operation/recording",
    "title": "查询操作日志接口",
    "group": "操作日志模块",
    "version": "1.0.0",
    "description": "<p>查询修改记录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳)</p>"
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
          "content": "?startDate=1544432345&endDate=1544432346&str=\"关键字\"&currentPage=1&pageSize=5",
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
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\": {\n       \"result\": [\n           {\n               \"create_by\": \"陈辰柄\",\n               \"id\": \"074da7568d564ae89ddc03b976f89a02\",\n               \"epid\": 1072,\n               \"orgid\": \"0128da06e0f946759a4fd8ed7376eee8\",\n               \"username\": \"陈辰柄\",\n               \"module_code\": \"go_con_met\",\n               \"module_name\": \"合约指标\",\n               \"org_name\": \"\",\n               \"operation_content\": \"新增了合约指标\",\n               \"operation_type\": 1,\n               \"type\": 1,\n               \"operation_date\": \"2019-01-05 21:17:00\"\n           },\n           {\n               \"create_by\": \"陈辰柄\",\n               \"id\": \"107df837c72a459bbce40e9058f1d9c6\",\n               \"epid\": 1072,\n               \"orgid\": \"0128da06e0f946759a4fd8ed7376eee8\",\n               \"username\": \"陈辰柄\",\n               \"module_code\": \"go_con_met\",\n               \"module_name\": \"合约指标\",\n               \"org_name\": \"\",\n               \"operation_content\": \"将 合约指标由 1000987.000变更为1000989.000\",\n               \"operation_type\": 2,\n               \"type\": 1,\n               \"operation_date\": \"2019-01-05 19:02:58\"\n           }\n       ]\n    }\n}",
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
            "description": "<p>分页查询操作日志信息错误</p>"
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
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"获取数据失败！\",\n     \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 401,\n     \"status\":\"fail\",\n     \"message\": \"error token\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 403,\n    \"status\": \"fail\",\n    \"message\": \"forbidden\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/recording/controller/RecordingController.java",
    "groupTitle": "操作日志模块",
    "name": "GetOperationRecording"
  },
  {
    "type": "PUT",
    "url": "/common/recover",
    "title": "还原数据接口",
    "group": "数据还原模块",
    "version": "1.0.0",
    "description": "<p>批量还原数据接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>还原数据id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"1\",\"2\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>还原数据错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"还原失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/recover/controller/RecoverController.java",
    "groupTitle": "数据还原模块",
    "name": "PutCommonRecover"
  },
  {
    "type": "GET",
    "url": "/qs/starttime",
    "title": "获取无重大问题时间",
    "group": "无重大问题时间",
    "version": "1.0.0",
    "description": "<p>获取无重大问题时间</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "moduleType",
            "description": "<p>模块类型 1：安全事故 2：安全质量</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orgid",
            "description": "<p>组织结构id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orgType",
            "description": "<p>1：分公司 2：项目部</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "/qs/starttime/{moduleType}/{orgid}/{orgType}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n    \"id\":\"123\",\n    \"epid\":1072,\n    \"org_type\":1,\n    \"orgid\":\"adf\",\n    \"modult_type\":\"adsfasdf\",\n    \"no_major_item_date\":156789034,\n    \"is_update\":1\n}\n}",
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
            "description": "<p>获取无重大问题开始时间错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyQualityTimeController.java",
    "groupTitle": "无重大问题时间",
    "name": "GetQsStarttime"
  },
  {
    "type": "POST",
    "url": "/qs/adjust/starttime",
    "title": "矫正无重大问题时间",
    "group": "无重大问题时间",
    "version": "1.0.0",
    "description": "<p>矫正无重大时间</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>组织结构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结点类型 1：分公司 2：项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "module_type",
            "description": "<p>模块类型 1：安全事故 2：安全质量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"adfasdf\",\n\"orgid\":\"1000\",\n\"org_type\":1,\n\"module_type\":1\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>矫正无重大时间错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"修改失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyQualityTimeController.java",
    "groupTitle": "无重大问题时间",
    "name": "PostQsAdjustStarttime"
  },
  {
    "type": "POST",
    "url": "/qs/starttime",
    "title": "修改无重大问题时间",
    "group": "无重大问题时间",
    "version": "1.0.0",
    "description": "<p>修改无重大时间</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结点类型 1：分公司 2：项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "module_type",
            "description": "<p>模块类型 1：安全事故 2：安全质量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no_major_item_date",
            "description": "<p>无重大问题时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"orgid\":\"1000\",\n\"org_type\":1,\n\"module_type\":1,\n\"no_major_item_date\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改无重大时间错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"修改失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/SafetyQualityTimeController.java",
    "groupTitle": "无重大问题时间",
    "name": "PostQsStarttime"
  },
  {
    "type": "DELETE",
    "url": "/mp/material",
    "title": "删除物资采购接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>批量删除物资采购信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "String[]",
            "description": "<p>ids  科研成果信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "[\"556183c9599f49c38ec06c1845602991\",\"b0f8b6ec3cd24b78b409c5bacb47e03a\"]",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除物资采购错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "DeleteMpMaterial"
  },
  {
    "type": "GET",
    "url": "/mp/material",
    "title": "查询物资采购接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>查询采购信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current_page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页查询条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型，0:集团，1：公司，2：项目</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id，当查询节点类型为1时，该参数不传</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "condition",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": true,
            "field": "start_date",
            "description": "<p>开始时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": true,
            "field": "end_date",
            "description": "<p>结束时间 (时间戳)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?current_page=0&page_size=20&ep_id=5&org_id=123&org_type=2&dept_id=222&start_date=1544432345&end_date=1544432346&condition=关键字&purchase_type=采购类型1-采购类型2",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":100,\n\"total_data\":{\n    \"total_purchase_money\":\"累计采购金额\"\n},\n\"result\":[\n{\n\"id\":\"1\",\n\"epId\":\"企业id\",\n\"orgId\":\"节点id\",\n\"orgType\":\"节点类型\",\n\"deptId\":\"项目部id\",\n\"deptName\":\"项目名称\",\n\"purchaseType\":\"采购类型\",\n\"purchaseWay\":采购方式(1：集中采购，2：合约采购，3：一般采购),\n\"purchaseMoney\":\"采购金额\",\n\"purchaseTime\":\"采购时间(时间戳)\"\n},\n{\n\"id\":\"2\",\n\"epId\":\"22\",\n\"orgId\":\"节点id\",\n\"orgType\":\"节点类型\",\n\"deptId\":\"222\",\n\"deptName\":\"项目名称\",\n\"purchaseType\":\"钢筋\",\n\"purchaseWay\":1,\n\"purchaseMoney\":\"8000.000\",\n\"purchaseTime\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询物资采购信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "GetMpMaterial"
  },
  {
    "type": "GET",
    "url": "/mp/material/type/{org_type}/{ep_id}/{org_id}",
    "title": "查询采购类型接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>获取采购类型接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型，0:集团,1：公司，2：项目</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>企业Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "/1/2077/95254c94b12e47f690ae56a5834b5607",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\": [\n\"钢材\",\n\"水泥\",\n\"外挂石材\",\n]\n}",
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
            "description": "<p>新增物资采购错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "GetMpMaterialTypeOrg_typeEp_idOrg_id"
  },
  {
    "type": "GET",
    "url": "/mp/material/type/screen/{epid}/{org_type}/{org_id}",
    "title": "查询采购类型接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>获取采购类型，用于大屏展示</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "epid",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型，0：集团，1：公司，2：项目</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "/2077/1/d0f1ec1280ba409696fd375b5c52511d",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\": [{\n\"id\":\"\"89b22d14f7b24f939b12f34907db9e33,\n\"purchase_type\":\"钢材\",\n\"epid\":2077,\n\"org_type\":1,\n\"org_id\":\"d0f1ec1280ba409696fd375b5c52511d\",\n\"create_by\":\"张三\",\n\"create_at\":\"1544432345\"\n},\n{\n\"id\":\"\"89b22d14f7b24f939b12f34907db9e33,\n\"purchase_type\":\"钢材\",\n\"epid\":2077,\n\"org_type\":1,\n\"org_id\":\"d0f1ec1280ba409696fd375b5c52511d\",\n\"create_by\":\"张三\",\n\"create_at\":\"1544432345\"\n}]\n}",
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
            "description": "<p>新增物资采购错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "GetMpMaterialTypeScreenEpidOrg_typeOrg_id"
  },
  {
    "type": "POST",
    "url": "/mp/material",
    "title": "新增物资采购接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>新增物资采购</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "purchase_type",
            "description": "<p>采购类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "purchase_way",
            "description": "<p>采购方式 1：集中采购，2：合约采购，3：一般采购</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "purchase_money",
            "description": "<p>采购金额(万元)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "purchase_time",
            "description": "<p>采购时间 (时间戳)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"ep_id\":1000,\n\"org_id\":\"95254c94b12e47f690ae56a5834b5607\",\n\"org_type\":1,\n\"dept_id\":\"a5914fd245f7414cb54aa706f875a2c7\",\n\"purchase_type\":\"钢材\",\n\"purchase_way\":2,\n\"purchase_money\":10000.000,\n\"purchase_time\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增物资采购错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "PostMpMaterial"
  },
  {
    "type": "POST",
    "url": "/mp/material/type/save",
    "title": "保存采购类型接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>保存采购类型</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "epid",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型(0:集团 1：分公司 2：项目部)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "purchase_types",
            "description": "<p>采购类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"epid\":2077,\n\"org_type\":1,\n\"org_id\":\"123456\",\n\"purchase_types\":[\"钢材\",\"木材\"]\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增物资采购错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "PostMpMaterialTypeSave"
  },
  {
    "type": "PUT",
    "url": "/mp/material",
    "title": "修改采购金额接口",
    "group": "物资采购模块",
    "version": "1.0.0",
    "description": "<p>修改采购金额</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "purchase_money",
            "description": "<p>采购金额(万元)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"95254c94b12e47f690ae56a5834b5607\",\n\"org_type\":1,\n\"purchase_money\":10000.000,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增物资采购错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/materialprocurement/controller/MaterialprocurementController.java",
    "groupTitle": "物资采购模块",
    "name": "PutMpMaterial"
  },
  {
    "type": "POST",
    "url": "/admin/getCompanyList",
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
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":\n    {\n        [{\n            \"epId\":\"企业ID\",\n            \"epName\":\"企业名称\"\n        }]\n    }\n}",
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/login/controller/LoginController.java",
    "groupTitle": "登录模块",
    "name": "PostAdminGetcompanylist"
  },
  {
    "type": "POST",
    "url": "/admin/loginout",
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/login/controller/LoginOutController.java",
    "groupTitle": "登录模块",
    "name": "PostAdminLoginout"
  },
  {
    "type": "POST",
    "url": "/admin/login",
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
          "content": "{\n    \"username\":\"hubiao\",\n    \"password\":\"111111\"\n    \"epid\"：1028\n}",
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
          "content": "{\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":\n    {\n        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyIiwiZXhwIjoxNTQzNTQ4OTE4fQ.xeih9r4F5lbiyYbYMpvloPhxnmq-aLBzlg8gMy43MWo\",\n        \"epInfo\":{\n            \"epId\":\"企业ID\",\n            \"epName\":\"企业名称\",\n            \"logo\":\"企业Logo\"\n        },\n        \"userName\":\"通行证\",\n        \"userId\":\"用户id\",\n        \"logo\":\"用户Logo\",\n        \"roleName\":\"角色\",\n        \"logo\":\"企业logo链接\"\n    }\n}",
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/login/controller/LoginController.java",
    "groupTitle": "登录模块"
  },
  {
    "type": "DELETE",
    "url": "/srq/harvest",
    "title": "删除科研成果",
    "group": "科研成果模块",
    "version": "1.0.0",
    "description": "<p>批量删除科研成果信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "String[]",
            "description": "<p>ids  科研成果信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "[\"556183c9599f49c38ec06c1845602991\",\"b0f8b6ec3cd24b78b409c5bacb47e03a\"]",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除科研成果错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/HarvestController.java",
    "groupTitle": "科研成果模块",
    "name": "DeleteSrqHarvest"
  },
  {
    "type": "GET",
    "url": "/srq/harvest",
    "title": "查询科研成果接口",
    "group": "科研成果模块",
    "version": "1.0.0",
    "description": "<p>科研成果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "condition",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current_page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "current_page=0&page_size=3&ep_id=1&org_id=aaa&condition",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":12,\n\"total_data\":{\n    \"total_research_fund\":100\n}\n\"result\":[\n{\n\"id\":\"1\",\n\"epId\":\"企业id\",\n\"orgId\":\"组织节点id\",\n\"orgType\":节点类型(1:公司，2:项目部),\n\"topic\":\"科研主题\",\n\"awards\":\"获奖情况\",\n\"research_fund\":科研经费,\n\"award_time\":\"获奖时间(时间戳)\",\n\"isUpdate\":\"是否被需改\",0：未修改，1：已修改\n},\n{\n\"id\":\"2\",\n\"epId\":\"22\",\n\"orgId\":\"222\",\n\"orgType\":2,\n\"topic\":\"现浇工法\",\n\"awards\":\"鲁班奖\",\n\"research_fund\":2000.000,\n\"award_time\":\"1544432345\",\n\"isUpdate\":0\n}\n]\n}\n}",
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
            "description": "<p>分页查询科研成果信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/HarvestController.java",
    "groupTitle": "科研成果模块",
    "name": "GetSrqHarvest"
  },
  {
    "type": "POST",
    "url": "/srq/harvest",
    "title": "新增科研成果接口",
    "group": "科研成果模块",
    "version": "1.0.0",
    "description": "<p>新增科研成果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型 1:公司，2:项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "topic",
            "description": "<p>科研主题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "awards",
            "description": "<p>获奖情况</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "award_time",
            "description": "<p>获奖时间 (时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "research_fund",
            "description": "<p>科研经费(万元)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"ep_id\":1000,\n\"org_id\":\"1000\",\n\"org_type\":2,\n\"topic\":\"现浇工法\",\n\"awards\":\"鲁班奖\",\n\"award_time\":\"1544432345\"\n\"research_fund\":10000.000,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增科研成果错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/HarvestController.java",
    "groupTitle": "科研成果模块",
    "name": "PostSrqHarvest"
  },
  {
    "type": "PUT",
    "url": "/srq/harvest",
    "title": "修改科研经费接口",
    "group": "科研成果模块",
    "version": "1.0.0",
    "description": "<p>修改已录入的科研经费</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "harvest_id",
            "description": "<p>科研成果id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "research_fund",
            "description": "<p>要修改的科研经费</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"harvest_id\":\"0acdf08e35594f189f180ce10cae3da1\",\n\"research_fund\":\"200000\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除科研成果错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/HarvestController.java",
    "groupTitle": "科研成果模块",
    "name": "PutSrqHarvest"
  },
  {
    "type": "DELETE",
    "url": "/srq/subject",
    "title": "删除科研课题",
    "group": "科研课题模块",
    "version": "1.0.0",
    "description": "<p>批量删除科研课题信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "String[]",
            "description": "<p>ids  科研课题信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "[\"556183c9599f49c38ec06c1845602991\",\"b0f8b6ec3cd24b78b409c5bacb47e03a\"]",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除科研课题错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/SubjectController.java",
    "groupTitle": "科研课题模块",
    "name": "DeleteSrqSubject"
  },
  {
    "type": "GET",
    "url": "/srq/subject",
    "title": "查询科研课题接口",
    "group": "科研课题模块",
    "version": "1.0.0",
    "description": "<p>查询科研课题接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "condition",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current_page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页查询条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "current_page=0&page_size=3&ep_id=1&org_id=aaa&condition=国家",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"pageList\":[\n{\n\"id\":\"1\",\n\"epId\":\"企业id\",\n\"orgId\":\"组织节点id\",\n\"orgType\":节点类型(1:公司，2:项目部),\n\"subjectName\":\"课题名称\",\n\"subjectLevel\":课题级别(1：国家级课题，2：省市级课题，3：企业级课题),\n\"declarationTime\":\"申报时间(时间戳)\"\n},\n{\n\"id\":\"2\",\n\"epId\":\"22\",\n\"orgId\":\"222\",\n\"orgType\":2,\n\"subjectName\":\"现浇工发\",\n\"subjectLevel\":2,\n\"declarationTime\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询科研课题信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/SubjectController.java",
    "groupTitle": "科研课题模块",
    "name": "GetSrqSubject"
  },
  {
    "type": "POST",
    "url": "/srq/subject/",
    "title": "新增科研课题接口",
    "group": "科研课题模块",
    "version": "1.0.0",
    "description": "<p>新增科研课题</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ep_id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>节点类型 1:公司 ，2:项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "subject_name",
            "description": "<p>课题名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "..3",
            "optional": false,
            "field": "subject_level",
            "description": "<p>课题级别 1：国家级课题，2：省市级课题，3：企业级课题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "declaration_time",
            "description": "<p>申报时间 (时间戳)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"ep_id\":1000,\n\"org_id\":\"1000\",\n\"org_type\":2,\n\"subject_name\":\"现浇工法\",\n\"subject_level\":2,\n\"declaration_time\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增科研课题错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/scientific/controller/SubjectController.java",
    "groupTitle": "科研课题模块",
    "name": "PostSrqSubject"
  },
  {
    "type": "GET",
    "url": "/structure/groupstructure",
    "title": "查询组织架构接口",
    "group": "组织架构模块",
    "version": "1.0.0",
    "description": "<p>查询组织架构</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "epid",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": false,
            "field": "username",
            "description": "<p>通行证</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "?epid=1000&username=zhangsan",
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
          "content": "{\n    \"code\": 200,\n    \"status\": \"success\",\n    \"message\": \"成功\",\n    \"data\": [\n       {\n           \"name\": \"内网云部署企业1\",\n           \"value\": \"c4ab42e6e22b4977b6f87b9c33a2a004\",\n           \"type\": 1,\n           \"parId\": \"c4ab42e6e22b4977b6f87b9c33a2a004\",\n           \"children\": [\n               {\n                   \"name\": \"123\",\n                   \"value\": \"28cf8cac8c274654b7b4493a0b42ba67\",\n                   \"type\": 2,\n                   \"parId\": \"c4ab42e6e22b4977b6f87b9c33a2a004\",\n                   \"children\": []\n               },\n               {\n                   \"name\": \"测试2\",\n                   \"value\": \"3b0f48b7a2a8414a9130198bb3b1f67a\",\n                   \"type\": 1,\n                   \"parId\": \"c4ab42e6e22b4977b6f87b9c33a2a004\",\n                   \"children\": [\n                       {\n                           \"name\": \"测试1-2\",\n                           \"value\": \"5400486f02e043718cfc817478887c60\",\n                           \"type\": 1,\n                           \"parId\": \"3b0f48b7a2a8414a9130198bb3b1f67a\",\n                           \"children\": [\n                               {\n                                   \"name\": \"项目部2\",\n                                   \"value\": \"8f78e4228e2349a3ab60e5e38ef48ccc\",\n                                   \"type\": 2,\n                                   \"parId\": \"5400486f02e043718cfc817478887c60\",\n                                   \"children\": []\n                               }\n                           ]\n                       }\n                   ]\n               }\n}",
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
            "description": "<p>查询组织架构信息错误</p>"
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
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"获取数据失败！\",\n     \"data\":0\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 401,\n     \"status\":\"fail\",\n     \"message\": \"error token\",\n     \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 403,\n    \"status\": \"fail\",\n    \"message\": \"forbidden\",\n    \"data\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/groupstructure/controller/GroupStructureController.java",
    "groupTitle": "组织架构模块",
    "name": "GetStructureGroupstructure"
  },
  {
    "type": "GET",
    "url": "/module/menu",
    "title": "菜单模块接口",
    "group": "菜单模块",
    "version": "1.0.0",
    "description": "<p>根据企业id查询菜单列表</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例:",
          "content": "/module/menu",
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
          "content": "   {\n    \"code\":200,\n    \"status\":\"success\",\n    \"message\":\"成功\",\n    \"data\":[{\n        \"id\":\"06873sd34\",\n        \"epid\":10000,\n        \"menuname\":\"质量安全\",\n        \"code\":zlaq\n    }]\n}",
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
            "description": "<p>分页查询菜单模块信息错误</p>"
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
          "content": "{\n    \"code\":500,\n    \"status\":\"fail\",\n    \"message\":\"获取数据失败！\",\n     \"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n     \"code\": 401,\n     \"status\":\"fail\",\n     \"message\": \"error token\",\n     \"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n    \"code\": 403,\n    \"status\": \"fail\",\n    \"message\": \"forbidden\",\n    \"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/menu/controller/MenuController.java",
    "groupTitle": "菜单模块",
    "name": "GetModuleMenu"
  },
  {
    "type": "DELETE",
    "url": "/qs/qualityqualified",
    "title": "删除质量合格",
    "group": "质量合格模块",
    "version": "1.0.0",
    "description": "<p>批量删除质量合格</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>质量合格信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n          \"ids\":[\n               \"1234\",\n               \"1235\",\n               \"1236\"\n          ]\n      }",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除质量合格错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityQualifiedController.java",
    "groupTitle": "质量合格模块",
    "name": "DeleteQsQualityqualified"
  },
  {
    "type": "GET",
    "url": "/qs/company/qualityqualified",
    "title": "查询分公司质量合格接口",
    "group": "质量合格模块",
    "version": "1.0.0",
    "description": "<p>获取分公司|集团质量合格情况</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司|集团id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳S)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳S)</p>"
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
          "content": "?orgid=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"pageList\":[\n{\n\"id\":\"1\",\n\"epid\":\"企业id\",\n\"dept_id\":\"项目部id\",\n\"dept_name\":\"项目部名称\",\n\"evaluation_id\":工地评比情况(1：文明工地，2：普通工地),\n\"qualified_id\":质量合格评比情况(1：优质工程，2：合格工程，3：不合格工程),\n\"evaluation_time\":\"评比时间(时间戳)\"\n},\n{\n\"id\":\"2\"\n\"epid\":\"22\",\n\"dept_id\":\"222\",\n\"dept_name\":\"项目部名称\",\n\"evaluation_id\":2,\n\"qualified_id\":2,\n\"evaluation_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询分公司质量合格信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityQualifiedController.java",
    "groupTitle": "质量合格模块",
    "name": "GetQsCompanyQualityqualified"
  },
  {
    "type": "GET",
    "url": "/qs/qualityqualified",
    "title": "查询质量合格接口",
    "group": "质量合格模块",
    "version": "1.0.0",
    "description": "<p>获取质量合格情况</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deptId",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "startDate",
            "description": "<p>开始时间 (时间戳S)</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": true,
            "field": "endDate",
            "description": "<p>结束时间 (时间戳S)</p>"
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
          "content": "?deptId=1000&currentPage=1&pageSize=5&startDate=1544432345&endDate=1544432346&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"pageList\":[\n{\n\"id\":\"1\",\n\"evaluation_id\":工地评比情况(1：文明工地，2：普通工地),\n\"qualified_id\":质量合格评比情况(1：优质工程，2：合格工程，3：不合格工程),\n\"evaluation_time\":\"评比时间(时间戳)\"\n},\n{\n\"id\":\"2\"\n\"evaluation_id\":2,\n\"qualified_id\":2,\n\"evaluation_time\":\"1544432345\"\n}\n]\n}\n}",
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
            "description": "<p>分页查询质量合格信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityQualifiedController.java",
    "groupTitle": "质量合格模块",
    "name": "GetQsQualityqualified"
  },
  {
    "type": "POST",
    "url": "/qs/qualityqualified",
    "title": "新增质量合格接口",
    "group": "质量合格模块",
    "version": "1.0.0",
    "description": "<p>新增质量合格率</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_id",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "site_evaluation",
            "description": "<p>工地评比情况 1：文明工地，2：普通工地</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quality_qualified",
            "description": "<p>质量合格情况 1：优质工程，2：合格工程，3：不合格工程</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..30",
            "optional": false,
            "field": "evaluation_time",
            "description": "<p>评比时间 (时间戳S)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"dept_id\":\"1000\",\n\"site_evaluation\":1,\n\"quality_qualified\":3,\n\"evaluation_time\":\"1544432345\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增质量合格错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/safetyquality/controller/QualityQualifiedController.java",
    "groupTitle": "质量合格模块",
    "name": "PostQsQualityqualified"
  },
  {
    "type": "DELETE",
    "url": "/pm/fundstrend",
    "title": "批量删除资金走势信息",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>批量删除资金走势信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>资金走势信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"123\",\"234\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除资金走势信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "DeletePmFundstrend"
  },
  {
    "type": "GET",
    "url": "/pm/fundstrend",
    "title": "查询资金走势信息接口",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>查询资金走势信息接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>节点id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orgType",
            "description": "<p>节点类型 1:公司|集团，2:项目部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "startDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
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
          "content": "?orgid=1000&orgType=2&startDate=&endDate=&str=\"关键字\"&currentPage=1&pageSize=5",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n\"total_count\":100,\n\"total_data\":{\n \"total_income\":100,\n \"total_cost\": 4,\n \"total_product_cost\":3,\n \"total_manage_cost\":2,\n},\n\"result\":[\n{\n \"id\":\"dadfdasf\",\n \"org_name\":\"adfdfas\",\n \"total_income\":100,\n \"total_cost\": 4,\n \"product_cost\":3,\n \"manage_cost\":2,\n \"total_income_update\":0,\n \"total_cost_update\": 0,\n \"product_cost_update\":0,\n \"manage_cost_update\":0,\n \"time\":15433333333,\n \"origin\":0\n},\n{\n \"id\":\"dadfdasf\",\n \"org_name\":\"\",\n \"total_income\":100,\n \"total_cost\": 4,\n \"product_cost\":3,\n \"manage_cost\":2,\n \"total_income_update\":0,\n \"total_cost_update\": 0,\n \"product_cost_update\":0,\n \"manage_cost_update\":0,\n \"time\":15433333333,\n \"origin\":0\n}\n]\n}\n}",
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
            "description": "<p>分页查询资金走势信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "GetPmFundstrend"
  },
  {
    "type": "GET",
    "url": "/pm/fundstrend/init/{orgid}/{orgType}",
    "title": "同步GOVERN数据",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>同步GOVERN数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>员工信息id</p>"
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":1\n}",
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
            "description": "<p>同步GOVERN数据错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"同步失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "GetPmFundstrendInitOrgidOrgtype"
  },
  {
    "type": "POST",
    "url": "/pm/fundstrend",
    "title": "新增资金走势",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>新增资金走势</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>组织结构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "total_income",
            "description": "<p>总收入</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "total_cost",
            "description": "<p>总支出</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "product_cost",
            "description": "<p>生产支出</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "manage_cost",
            "description": "<p>管理支出</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "size": "..50",
            "optional": false,
            "field": "time",
            "description": "<p>时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结构类型 0:企业 1:公司，2：项目部</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"orgid\":\"1000\",\n\"total_income\":100,\n\"total_cost\": 4,\n\"product_cost\":3,\n\"manage_cost\":2,\n\"time\":156789045,\n\"org_type\":2\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增资金走势错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "PostPmFundstrend"
  },
  {
    "type": "PUT",
    "url": "/pm/fundstrend",
    "title": "修改资金走势",
    "group": "资金走势模块",
    "version": "1.0.0",
    "description": "<p>修改资金走势</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资金走势ID</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "total_income",
            "description": "<p>总收入</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "total_cost",
            "description": "<p>总支出</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "product_cost",
            "description": "<p>生产支出</p>"
          },
          {
            "group": "Parameter",
            "type": "BigDecimal",
            "size": "..20",
            "optional": false,
            "field": "manage_cost",
            "description": "<p>管理支出</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"dadfdasf\",\n\"total_income\":100,\n\"total_cost\": 4,\n\"product_cost\":3,\n\"manage_cost\":2,\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>新增资金走势信息错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmanagement/controller/FundsTrendController.java",
    "groupTitle": "资金走势模块",
    "name": "PutPmFundstrend"
  },
  {
    "type": "DELETE",
    "url": "/news/del",
    "title": "删除集团新闻",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>删除集团新闻</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>合约指标信息id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"ids\":[\"1\",\"2\"]\n}",
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
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>200代表无错误  500代表有错误   401代表无权限访问  403代表禁止访问</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success代表成功  fail代表失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>删除合约指标错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"删除失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "DeleteNewsDel"
  },
  {
    "type": "GET",
    "url": "/news/detail/{id}",
    "title": "查询企业新闻详情接口",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>查询企业新闻详情接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>新闻ID</p>"
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"id\":\"123\",\n     \"title\":\"ad\",\n     \"content\":\"sss\",\n     \"cover\":\"adfasdf\"\n     \"time\":15678903456\n  }\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "GetNewsDetailId"
  },
  {
    "type": "GET",
    "url": "/news/download/{uuid}",
    "title": "查询图片下载地址",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>查询图片下载地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>图片对应的文件ID</p>"
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":\"图片地址\"\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "GetNewsDownloadUuid"
  },
  {
    "type": "GET",
    "url": "/news/list",
    "title": "查询企业新闻接口",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>查询企业新闻接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>新闻类型(1:集团新闻，2：党建新闻，3:工会新闻)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
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
          "content": "?orgid=1000&type=1&currentPage=1&pageSize=5&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"result\":[\n          {\n             \"id\":\"1\",\n             \"title\":\"title\",\n             \"content\":\"content\",\n             \"cover\":\"cover\",\n             \"time\":\"1543455656\",\n         },\n         {\n             \"id\":\"asdfas\",\n             \"title\":\"title\",\n             \"content\":\"asdf\",\n             \"cover\":\"asdf\",\n             \"time\":\"1543455656\",\n         }\n     ],\n     \"total_count\":30,\n  }\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "GetNewsList"
  },
  {
    "type": "GET",
    "url": "/news/upload/{md5}",
    "title": "获取附件上传地址",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>获取附件上传地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>图片对应的文件md5</p>"
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n    \"isQuick\":\"是否是快速上传\",\n    \"uploadUrl\":\"上传地址\"\n }\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "GetNewsUploadMd5"
  },
  {
    "type": "POST",
    "url": "/news/add",
    "title": "添加企业新闻",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>添加企业新闻</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>新闻标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>新闻内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>新闻封面</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>新闻类型(1:集团新闻，2：党建新闻,3:工会新闻)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "time",
            "description": "<p>新闻时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"title\":\"\",\n\"content\":\"\",\n\"cover\":\"\",\n\"type\":1,\n\"time\":1543455656\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改或添加年度合同金额错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "PostNewsAdd"
  },
  {
    "type": "PUT",
    "url": "/news/modify",
    "title": "修改集团新闻接口",
    "group": "集团新闻模块",
    "version": "1.0.0",
    "description": "<p>修改集团新闻</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>新闻id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>新闻title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>新闻content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>新闻封面</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "time",
            "description": "<p>新闻时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"asdf\",\n\"title\":\"a\",\n\"content\":\"xxx\",\n\"cover\":\"aa\",\n\"time\":1546789456\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改分公司合约指标错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/news/controller/EnterpriseNewsController.java",
    "groupTitle": "集团新闻模块",
    "name": "PutNewsModify"
  },
  {
    "type": "GET",
    "url": "/hr/company/ebopp",
    "title": "查询项目人员学历接口",
    "group": "项目人员学历",
    "version": "1.0.0",
    "description": "<p>查询项目人员学历学历</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
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
          "content": "?orgid=1000&currentPage=1&pageSize=5&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"data\":[\n          {\n             \"id\":\"1\",\n             \"epid\":\"企业id\",\n             \"dept_id\":\"项目部id\",\n             \"dept_name\":\"项目部名称\",\n             \"specialty_num\":\"专科人数\",\n             \"undergraduate_num\":\"本科人数\",\n             \"over_undergraduate_num\":\"本科以上人数\",\n             \"other_diploma\":\"其他文聘人数\"\n         },\n         {\n             \"id\":\"1\",\n             \"epid\":\"企业id\",\n             \"dept_id\":\"项目部id\",\n             \"dept_name\":\"项目部名称\",\n             \"specialty_num\":\"专科人数\",\n             \"undergraduate_num\":\"本科人数\",\n             \"over_undergraduate_num\":\"本科以上人数\",\n             \"other_diploma\":\"其他文聘人数\"\n         }\n     ],\n     \"totalSpecialtyNum\":\"累计专科人数\",\n     \"totalUndergraduateNum\":\"累计专科人数\",\n     \"totalOverUundergraduateNum\":\"累计本科以上人数\",\n     \"totalOtherDiploma\":\"累计其他文聘人数\"\n  }\n}",
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
            "description": "<p>分页查询项目人员学历信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/EboppController.java",
    "groupTitle": "项目人员学历",
    "name": "GetHrCompanyEbopp"
  },
  {
    "type": "PUT",
    "url": "/hr/company/ebopp",
    "title": "修改项目人员学历",
    "group": "项目人员学历",
    "version": "1.0.0",
    "description": "<p>修改项目人员学历</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目人员学历id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "specialty_num",
            "description": "<p>专科人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "undergraduate_num",
            "description": "<p>本科人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "over_undergraduate_num",
            "description": "<p>本科以上人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "other_diploma",
            "description": "<p>其他文聘人数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"1000\",\n\"specialty_num\":\"专科人数\",\n\"undergraduate_num\":\"本科人数\",\n\"over_undergraduate_num\":\"本科以上人数\",\n\"other_diploma\":\"其他文聘人数\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改项目人员学历错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/EboppController.java",
    "groupTitle": "项目人员学历",
    "name": "PutHrCompanyEbopp"
  },
  {
    "type": "GET",
    "url": "/hr/company/topp",
    "title": "查询项目人员职称接口",
    "group": "项目人员职称",
    "version": "1.0.0",
    "description": "<p>查询项目人员职称学历</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "str",
            "description": "<p>内容或者关键字</p>"
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
          "content": "?orgid=1000&currentPage=1&pageSize=5&str=\"关键字\"",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"data\":[\n          {\n             \"id\":\"1\",\n             \"epid\":\"企业id\",\n             \"dept_id\":\"项目部id\",\n             \"dept_name\":\"项目部名称\",\n             \"other_num\":\"其他\",\n             \"assistant_engineer\":\"助理工程师\",\n             \"junior_engineer\":\"初级工程师\",\n             \"intermediate_engineer\":\"中级工程师\",\n             \"senior_engineer\":\"高级工程师\",\n             \"expert\":\"专家及以上\"\n         },\n         {\n             \"id\":\"1\",\n             \"epid\":\"企业id\",\n             \"dept_id\":\"项目部id\",\n             \"dept_name\":\"项目部名称\",\n             \"other_num\":\"其他\",\n             \"assistant_engineer\":\"助理工程师\",\n             \"junior_engineer\":\"初级工程师\",\n             \"intermediate_engineer\":\"中级工程师\",\n             \"senior_engineer\":\"高级工程师\",\n             \"expert\":\"专家及以上\"\n         }\n     ],\n     \"totalOtherNum\":\"累计其他\",\n     \"totalAssistantEengineer\":\"累计助理工程师\",\n     \"totalJuniorEngineer\":\"累计初级工程师\",\n     \"totalIntermediateEngineer\":\"累计中级工程师\",\n     \"totalSeniorEngineer\":\"累计高级工程师\",\n     \"totalExpert\":\"累计专家及以上\"\n  }\n}",
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
            "description": "<p>分页查询项目人员职称信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/ToppController.java",
    "groupTitle": "项目人员职称",
    "name": "GetHrCompanyTopp"
  },
  {
    "type": "PUT",
    "url": "/hr/company/topp",
    "title": "修改项目人员职称",
    "group": "项目人员职称",
    "version": "1.0.0",
    "description": "<p>修改项目人员职称</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目人员职称id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "other_num",
            "description": "<p>其他</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "assistant_engineer",
            "description": "<p>助理工程师</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "junior_engineer",
            "description": "<p>初级工程师</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "intermediate_engineer",
            "description": "<p>中级工程师</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "senior_engineer",
            "description": "<p>高级工程师</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "expert",
            "description": "<p>专家及以上</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n\"id\":\"1000\",\n\"other_num\":\"其他\",\n\"assistant_engineer\":\"助理工程师\",\n\"junior_engineer\":\"初级工程师\",\n\"intermediate_engineer\":\"中级工程师\",\n\"senior_engineer\":\"高级工程师\",\n\"expert\":\"专家及以上\"\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":true\n}",
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
            "description": "<p>修改项目人员职称错误</p>"
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
          "content": "{\n\"code\":500,\n\"status\":\"fail\",\n\"message\":\"新增失败！\",\n\"data\":false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 401,\n\"status\": \"fail\",\n\"message\": \"error token\",\n\"data\": false\n}",
          "type": "json"
        },
        {
          "title": "错误样例:",
          "content": "{\n\"code\": 403,\n\"status\": \"fail\",\n\"message\": \"forbidden\",\n\"data\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/humanresources/controller/ToppController.java",
    "groupTitle": "项目人员职称",
    "name": "PutHrCompanyTopp"
  },
  {
    "type": "GET",
    "url": "/montior/dept/list",
    "title": "查询项目部层级监控列表",
    "group": "项目监控模块",
    "version": "1.0.0",
    "description": "<p>查询项目部层级监控列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>项目部id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "montiorType",
            "description": "<p>监控类型(0:全部监控，1:关注视频,2:隐藏视频)</p>"
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
          "content": "?orgid=1000&montiorType=0&currentPage=1&pageSize=5",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"result\":[\n          {\n             \"orgid\":\"asdfdfs\",\n             \"ppid\":1234,\n             \"camera_key\":\"asdf\",\n             \"camera_name\":\"asdf\",\n             \"is_attention\":0,\n             \"is_hidden\":0\n         },\n         {\n             \"orgid\":\"asdfdfs\",\n             \"ppid\":1234,\n             \"camera_key\":\"asdf\",\n             \"camera_name\":\"asdf\",\n             \"is_attention\":0,\n             \"is_hidden\":0\n         },\n     ],\n     \"total_count\":30,\n  }\n}",
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
            "description": "<p>分页查询项目监控信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmontior/controller/ProjectMontiorController.java",
    "groupTitle": "项目监控模块",
    "name": "GetMontiorDeptList"
  },
  {
    "type": "GET",
    "url": "/montior/org/list",
    "title": "查询公司层级或企业层级项目监控列表",
    "group": "项目监控模块",
    "version": "1.0.0",
    "description": "<p>查询公司层级或企业层级监控列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>分公司id(企业传企业对应的orgid)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "orgType",
            "description": "<p>组织机构类型(0:企业,1:分公司)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "deptType",
            "description": "<p>项目类型(0:全部项目，1:一般工程,2:重大项目,3:高危项目,4：关注项目)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "deptAttr",
            "description": "<p>项目属性(0:全部项目，1:房建,2:基建)</p>"
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
          "content": "?orgid=1000&orgType=1&deptType=0&deptAttr=0&currentPage=1&pageSize=5",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":{\n  {\n     \"result\":[\n          {\n             \"orgid\":\"asdfdfs\",\n             \"ppid\":1234,\n             \"camera_key\":\"asdf\",\n             \"camera_name\":\"asdf\",\n             \"is_attention\":0,\n             \"is_hidden\":0\n         },\n         {\n             \"orgid\":\"asdfdfs\",\n             \"ppid\":1234,\n             \"camera_key\":\"asdf\",\n             \"camera_name\":\"asdf\",\n             \"is_attention\":0,\n             \"is_hidden\":0\n         },\n     ],\n     \"total_count\":30,\n  }\n}",
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
            "description": "<p>分页查询项目监控信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmontior/controller/ProjectMontiorController.java",
    "groupTitle": "项目监控模块",
    "name": "GetMontiorOrgList"
  },
  {
    "type": "POST",
    "url": "/montior/attention",
    "title": "关注或取消关注接口",
    "group": "项目监控模块",
    "version": "1.0.0",
    "description": "<p>关注或取消关注</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>组织结构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ppid",
            "description": "<p>工程ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera_key",
            "description": "<p>相机key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_attention",
            "description": "<p>是否关注(0:取消关注 1：关注)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结构类型(1：分公司 2：项目部)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"orgid\":\"adf\",\n    \"ppid\":123,\n    \"camera_key\":\"123\",\n    \"is_attention\":0,\n    \"org_type\":1\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":1\n}",
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
            "description": "<p>关注或取消关注错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmontior/controller/ProjectMontiorController.java",
    "groupTitle": "项目监控模块",
    "name": "PostMontiorAttention"
  },
  {
    "type": "POST",
    "url": "/montior/hidden",
    "title": "隐藏或或取消隐藏接口",
    "group": "项目监控模块",
    "version": "1.0.0",
    "description": "<p>隐藏或或取消隐藏</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgid",
            "description": "<p>组织结构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ppid",
            "description": "<p>工程ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera_key",
            "description": "<p>相机key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_hidden",
            "description": "<p>是否隐藏(0:取消隐藏 1：隐藏)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_type",
            "description": "<p>组织结构类型(1：分公司 2：项目部)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"orgid\":\"adf\",\n    \"ppid\":123,\n    \"camera_key\":\"123\",\n    \"is_hidden\":0,\n    \"org_type\":1\n}",
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
          "content": "{\n\"code\":200,\n\"status\":\"success\",\n\"message\":\"成功\",\n\"data\":1\n}",
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
            "description": "<p>分页查询合约指标信息错误</p>"
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
    "filename": "luban-occ-admin/src/main/java/com/lubansoft/occ/admin/projectmontior/controller/ProjectMontiorController.java",
    "groupTitle": "项目监控模块",
    "name": "PostMontiorHidden"
  }
] });
