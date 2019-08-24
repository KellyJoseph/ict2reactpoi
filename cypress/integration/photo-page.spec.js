import "cypress-file-upload";

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

//https://github.com/abramenal/cypress-file-upload
//solution for cypress file uploads

Cypress.Commands.add("clickPhotosTab", () => {
  cy.get("button[id=photos")
    .first()
    .click();
  cy.get("h1").should("contain", "Photos");
});

describe("Photo page ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should login and be redirected to Locations page", () => {
    cy.login();
    cy.get("h1").should("contain", "Locations");
  });

  it("should login and successfully navigate to photos page", () => {
    cy.login();
    cy.clickPhotosTab();
  });

  //https://github.com/abramenal/cypress-file-upload
  //solution for cypress file uploads

  it("should upload a new photo", () => {
    const fileName = "testPhoto.jpg";
    cy.login();
    cy.clickPhotosTab();
    cy.get(".card")
      .its("length")
      .then(numCards => {
        cy.fixture(fileName).then(fileContent => {
          cy.get("input[id=file-upload]").upload({
            fileContent,
            fileName,
            mimeType: "image/jpeg"
          });
        });
        cy.get("input[id=photo-name]").type("test");
        cy.get("button[id=submit-button")
          .click()
          .wait(1000)
          .get(".card")
          .its("length")
          .should("eq", numCards + 1);
      });
  });

  it("should delete last item", () => {
    cy.login();
    cy.clickPhotosTab();
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
