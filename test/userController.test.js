const axios = require("axios");
const request = require("supertest");

test("get all user/employee api testing", async () => {
  const response = await request("http://localhost:3000").post("/api/users/get");
  expect(response.status).toBe(200);
});

test("add all user/employee api testing", async () => {
  const response = await request("http://localhost:3000").post("/api/users/add").send({
      employeeId: "nikhat@plutos.one",
      emailId: "nikhat@plutos.one",
      firstName: "nikhat",
      lastName: "s",
      mobileNo: "9149080592",
    });
  expect(response.status).toBe(200);
});

test("update all user/employee api testing", async () => {
  const response = await request("http://localhost:3000")
      .post("/api/users/update/3")
      .send({
          mobileNo: "8193081086",
    });
  expect(response.status).toBe(200);
});

test("This is delete api testing", async () => {
  const response = await request("http://localhost:3000").delete(
    "/api/users/delete/4"
  );
  const { data } = response;
  expect(response.status).toBe(200);
});
