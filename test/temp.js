
const request = require("supertest");
const app = require("../index");


test.skip("get all user/employee api testing", async () => {
  const response = await request(app).post("/users/get");
  expect(response.status).toBe(200);
});

test.skip("add all user/employee api testing", async () => {
  const response = await request(app).post("/api/users/add").send({
      employeeId: "nikhat@plutos.one",
      emailId: "nikhat@plutos.one",
      firstName: "nikhat",
      lastName: "s",
      mobileNo: "9149080592",
    });
  expect(response.status).toBe(200);
});

test.skip("update all user/employee api testing", async () => {
  const response = await request(app)
      .post("/api/users/update/3")
      .send({
          mobileNo: "8193081086",
    });
  expect(response.status).toBe(200);
});

test.skip("This is delete api testing", async () => {
  const response = await request(app).delete(
    "/api/users/delete/4"
  );
  const { data } = response;
  expect(response.status).toBe(200);
});
