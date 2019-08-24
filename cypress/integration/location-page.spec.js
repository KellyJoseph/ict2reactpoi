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

Cypress.Commands.add("clickPhotosTab", () => {
  cy.get(
    cy
      .get("button[id=photos")
      .first()
      .click()
  );
});

describe("Locations Page ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should load the main page", () => {
    cy.get("h1.title").should(
      "contain",
      "Welcome to ICT2 Assignment 2 POI React App"
    );
  });

  it("should load the main page", () => {
    cy.login();
    cy.get("h1").should("contain", "Locations");
  });

  it("should add a new Location", () => {
    cy.login();
    cy.get(".card")
      .its("length")
      .then(numCards => {
        cy.get("input[id=name]")
          .type("somewhere")
          .get("input[id=description]")
          .type("nice place")
          .get("select")
          .select("South")
          .get("input[id=latitude]")
          .type("12345")
          .get("input[id=longitude]")
          .type("12345")
          .get("button[type=submit]")
          .click()
          .wait(1000)
          .get(".card")
          .its("length")
          .should("eq", numCards + 1);
      });
  });

  it("should delete last item", () => {
    cy.login();
    cy.get(".card")
      .its("length")
      .then(numCards => {
        cy.get("button[id=delete-button")
          .last()
          .click()
          .wait(1000)
          .get(".card")
          .its("length")
          .should("eq", numCards - 1);
      });
  });
});
