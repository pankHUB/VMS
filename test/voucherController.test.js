const request = require("supertest");
const app = require("../index");

test("get all voucher api testing", async () => {
  const response = await request(app).get("/api/users/get");
  expect(response.status).toBe(200);
});

test.skip("add all voucher api testing", async () => {
  const response = await request(app).post("/api/users/add").send({
    "type": "Knockout Deal",
    "Brand": "Pepper Fry",
    "userId": "8"
});
  expect(response.status).toBe(200);
});

test.skip("update all voucher api testing", async () => {
  const response = await request(app)
      .patch("/api/users/update")
      .send({
        "vaucherId": "76098f09-edbb-4a64-b994-09c300d386b6",
        "type": "gift card",
    });
  expect(response.status).toBe(200);
});

test.skip("This is delete voucher api testing", async () => {
  const response = await request(app)
    .delete("/api/users/delete")
    .send({
        "vaucherId": "a3eb835a-cd54-4732-bea8-20412d65873a",
  });
  expect(response.status).toBe(200);
});
