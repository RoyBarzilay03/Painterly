import * as aws from "@pulumi/aws";

const db = new aws.dynamodb.Table("users", {
  attributes: [
    {
      name: "id",
      type: "S",
    },
  ],
});
