Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "https://shrouded-brook-59989.herokuapp.com/api/users/authenticate",
    body: {
      email: "homer@simpson.com",
      password: "secret"
    }
  }).then(resp => {
    window.localStorage.setItem("jwt", resp.body.token);
  });
});
// from https://stackoverflow.com/questions/50820732/in-cypress-set-a-token-in-localstorage-before-test
// ensures api interactions can be handled smoothly

describe("Main View ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    //cy.login();
  });

  it("loads the main page", () => {
    cy.get("h1.title").should(
      "contain",
      "Welcome to ICT2 Assignment 2 POI React App"
    );
    //cy.get(".badge").should("contain", 50);
    //cy.get(".card").should("have.length", 50);
  });

  it("logs in", () => {
    cy.get("li.navbar-brand")
      .eq(2)
      .click();
    cy.get("input[name=email")
      .eq(0)
      .first()
      .clear()
      .type("joemickkelly@yahoo.com");
    cy.get("input[name=password")
      .eq(0)
      .first()
      .clear()
      .type("secret");
    cy.get("button").click();

    cy.get("h1").should("contain", "Locations");

    cy.get("col-md-4")
      .eq(2)
      .should("contain", "Kyusshu");
  });
});
