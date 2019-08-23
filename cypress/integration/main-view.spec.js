Cypress.Commands.add("login", () => {
  cy.get("li.navbar-brand")
    .eq(2)
    .click();
  cy.get("input[name=email]")
    .eq(0)
    .first()
    .clear()
    .type("joemickkelly@yahoo.com");
  cy.get("input[name=password]")
    .eq(0)
    .first()
    .clear()
    .type("secret");
  cy.get("button").click();
  cy.get("h1").should("contain", "Locations");
});

Cypress.Commands.add("addLocation", () => {
  cy.get("input[id=name]").type("somewhere");
  cy.get("input[id=description]").type("nice place");
  cy.get("select").select("South");
  cy.get("input[id=latitude]").type("12345");
  cy.get("input[id=longitude]").type("12345");
  cy.get("button[type=submit]").click();
});
// from https://stackoverflow.com/questions/50820732/in-cypress-set-a-token-in-localstorage-before-test
// ensures api interactions can be handled smoothly

describe("Main View ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("loads the main page", () => {
    cy.get("h1.title").should(
      "contain",
      "Welcome to ICT2 Assignment 2 POI React App"
    );
  });

  it("logs in", () => {
    cy.login();
    cy.get(".card")
      .eq(2)
      .should("contain", "Kyusshu");
  });

  it.only("add new location", () => {
    cy.login();
    cy.get(".card")
      .its("length")
      .then(numCards => {
        cy.get("input[id=name]").type("somewhere");
        cy.get("input[id=description]").type("nice place");
        cy.get("select").select("South");
        cy.get("input[id=latitude]").type("12345");
        cy.get("input[id=longitude]").type("12345");
        cy.get("button[type=submit]")
          .click()

          .cy.get(".card")
          .its("length")
          .should("eq", numCards + 1);
        //cy.addLocation();
      });

    //cy.get(".form-group[id=name").first().clear().type("somewhere");
  });
});
