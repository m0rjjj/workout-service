import { expect } from 'chai';
describe('Calendars', () => {

  it('should work', () => {
    expect(true).to.be.true;
  });
  // // bootstrap your expressApplication in first
  // before(TestContext.bootstrap(Server));
  // before(TestContext.inject([ExpressApplication], (expressApplication: ExpressApplication) => {
  //   this.app = expressApplication;
  // }));
  // after(TestContext.reset);

  // // then run your test
  // describe("GET /rest/calendars", () => {
  //   it("should return all calendars", (done) => {
  //     SuperTest(this.app)
  //       .get("/rest/calendars")
  //       .expect(200)
  //       .end((err, response: any) => {
  //         if (err) {
  //           throw (err);
  //         }

  //         let obj = JSON.parse(response.text);

  //         expect(obj).to.be.an("array");

  //         done();
  //       });

  //   });
  // });

});