const request = require("supertest");
const app = require("../index");

test("get all voucher api testing", async () => {
  const response = await request(app).get("/api/voucher/get");
  expect(response.status).toBe(200);
});

test("add all voucher api testing", async () => {
  const response = await request(app).post("/api/voucher/add").send({
    "type": "Gift Hampers",
    "Brand": "Pepper Fry",
    "userId": "7"
});
  expect(response.status).toBe(200);
});

test("update all voucher api testing", async () => {
  const response = await request(app)
      .patch("/api/voucher/update")
      .send({
        "vaucherId": "76098f09-edbb-4a64-b994-09c300d386b6",
        "type": "Knockout Deal",
    });
  expect(response.status).toBe(200);
});

test("This is delete voucher api testing", async () => {
  const response = await request(app)
    .delete("/api/voucher/delete")
    .send({
        "vaucherId": "e1497a9c-9d9a-46b8-9c97-a3a5c6dba236",
  });
  expect(response.status).toBe(200);
});
