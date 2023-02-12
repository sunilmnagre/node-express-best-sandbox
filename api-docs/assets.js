"use strict";

const schema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    icon: {
      type: "string",
    },
    status: {
      type: "integer",
    },
    modifiedAt: {
      type: "string",
      format: "date-time",
    },
  },
};

module.exports = {
  "/assets": {
    get: {
      tags: ["Assets"],
      summary: "Returns a list of records",
      description: `This API returns a list of records based on applied filters. You can wisely use filters to get results: </br></br>
    <b>1) ?filter[where][id]=""</b></br>
    <b>2) ?filter[where][id]=&filter[fields]=name,status</b></br>
    <b>3) ?filter[fields]=-status,-name&filter[sort]=-name&filter[skip]=5&filter[limit]=10`,
      parameters: [
        {
          in: "query",
          name: "filter",
          schema: {
            type: "object",
            properties: {
              where: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "",
                  },
                },
              },
              fields: {
                type: "string",
                example: "name",
              },
              sort: {
                type: "string",
                example: "name",
              },
              skip: {
                type: "number",
                example: 0,
              },
              limit: {
                type: "number",
                example: 10,
              },
            },
          },
          style: "deepObject",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: schema,
              example: {
                status: "success",
                data: [
                  {
                    _id: "5f9ac6bbf498cb308ca0108a",
                    name: "Audits & Logs",
                    icon: "history",
                    menuLink: "audits",
                    parent: "Settings",
                    status: 1,
                    modifiedAt: "2020-10-29T13:42:19.718Z",
                  },
                ],
              },
            },
          },
        },
        403: {
          description: "Authorization failed",
          content: {},
        },
      },
      security: [
        {
          csrf: [],
        },
      ],
    },
    post: {
      tags: ["Assets"],
      summary: "Create a new record into the system",
      description: `This API creates a new entry into system collection`,
      requestBody: {
        description: "Create a new record into the system",
        content: {
          "application/json": {
            schema: schema,
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: schema,
              example: {
                status: "success",
                data: {
                  _id: "5f9ac6bbf498cb308ca0108a",
                  name: "Audits & Logs",
                  icon: "history",
                  menuLink: "audits",
                  parent: "Settings",
                  status: 1,
                  createdAt: "2020-10-29T13:42:19.718Z",
                  updatedAt: "2020-10-30T08:04:12.201Z",
                },
              },
            },
          },
        },
        403: {
          description: "Authorization failed",
          content: {},
        },
      },
      security: [
        {
          csrf: [],
        },
      ],
    },
  },

  "/menus/{id}": {
    get: {
      tags: ["Assets"],
      summary: "Returns record by specified id",
      description: `This API returns a records based on specified id applied filters. You can wisely use filters to get results: </br></br>
    <b>Ex: ?filter[fields]=-status,-parent`,
      parameters: [
        {
          in: "path",
          name: "id",
          description: "ID of record to return",
          required: true,
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "filter",
          schema: {
            type: "object",
            properties: {
              fields: {
                type: "string",
                example: "name,menuLink",
              },
            },
          },
          style: "deepObject",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: schema,
              example: {
                status: "success",
                data: {
                  _id: "5f9ac6bbf498cb308ca0108a",
                  name: "Audits & Logs",
                  icon: "history",
                  menuLink: "audits",
                  parent: "Settings",
                  status: 1,
                  createdAt: "2020-10-29T13:42:19.718Z",
                  updatedAt: "2020-10-30T08:04:12.201Z",
                },
              },
            },
          },
        },
        403: {
          description: "Authorization failed",
          content: {},
        },
        404: {
          description: "Record not found",
          content: {},
        },
      },
      security: [
        {
          csrf: [],
        },
      ],
    },
    put: {
      tags: ["Assets"],
      summary: "Update a new record into the system",
      description: `This API update an existing record into system collection`,
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Record Id that need to be updated",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        description: "Updates a specified record into the system",
        content: {
          "application/json": {
            schema: schema,
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: schema,
              example: {
                status: "success",
                data: {
                  _id: "5f9ac6bbf498cb308ca0108a",
                  name: "Audits & Logs",
                  icon: "history",
                  menuLink: "audits",
                  parent: "Settings",
                  status: 1,
                  createdAt: "2020-10-29T13:42:19.718Z",
                  updatedAt: "2020-10-30T08:04:12.201Z",
                },
              },
            },
          },
        },
        403: {
          description: "Authorization failed",
          content: {},
        },
      },
      security: [
        {
          csrf: [],
        },
      ],
    },
    delete: {
      tags: ["Assets"],
      summary: "Delete a record from the system",
      description: "Delete a record from the system.",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of menu to be deleted",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: "Record deleted successfully.",
              },
            },
          },
        },
        403: {
          description: "Authorization failed",
          content: {},
        },
      },
      security: [
        {
          csrf: [],
        },
      ],
    },
  },
};
