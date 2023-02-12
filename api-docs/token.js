"use strict";

const schema = {
  type: "object",
  properties: {
    _Identity: {
      type: "string",
    },
  },
};

module.exports = {
  "/token": {
    post: {
      tags: ["Auth"],
      summary: "Login into the system",
      description: `Get CSRF from the system`,
      requestBody: {
        description: "Create a new CSRF into the system",
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
                data: "jtmyBjoVgFdHICaipzxJOA==",
              },
            },
          },
        },
        400: {
          description: "Missing field(s)",
          content: {
            msg: "Missing field(s)",
            location: "body",
          },
        },
        403: {
          content: {
            status: "fail",
            data: "Forbidden",
          },
        },
      },
    },
  },
};
