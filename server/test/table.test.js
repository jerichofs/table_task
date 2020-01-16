const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server");
const should = chai.should();

chai.use(chaiHttp);

describe("/GET /", () => {
  it("It should print error not found", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        res.body.should.have.property("status");
        res.body.should.have.property("msg");
        res.body.status.should.be.eql(404);
        done();
      });
  });
});

describe("/GET the table data", () => {
  it("It should GET the table array", done => {
    chai
      .request(server)
      .get("/table")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("table");
        res.body.table.length.should.be.eql(0);
        done();
      });
  });
});

describe("/POST a new row", () => {
  it("It should add a new row", done => {
    const row = {
      text: "Some text"
    };
    chai
      .request(server)
      .post("/table/row")
      .send(row)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("status");
        res.body.should.have.property("message");
        res.body.status.should.be.eql(200);
        res.body.message.should.be.eql("OK");
        done();
      });
  });

  it("It should not add a new row", done => {
    const row = {};
    chai
      .request(server)
      .post("/table/row")
      .send(row)
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.be.a("object");
        res.body.should.have.property("error");
        done();
      });
  });
});
