"use strict";

const schema = {
  type: "object",
  properties: {
    _Identity: {
      type: "string", // Palindrome string and encrypted with project algo
    },
  },
};

module.exports = {
  "/auth/token": {
    post: {
      tags: ["Auth"],
      summary: "Create a new identity into the system",
      description: `This API creates a new identity into system collection`,
      requestBody: {
        description: "Create a new identity into the system",
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
                data: "0/pM4HgOmCup31tuxQqwJw==",
              },
            },
          },
        },
        403: {
          description: "Forbidden",
          content: {},
        },
      },
    },
  },
};
