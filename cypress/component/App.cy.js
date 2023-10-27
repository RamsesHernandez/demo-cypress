import App from '../../src/App';

describe("App.cy.js", () => {
  it("should login with valid credentials", () => {
    cy.mount(<App />);
    cy.get('input[placeholder="Username"]').type("testuser");
    cy.get('input[placeholder="Password"]').type("password123");
    cy.get(".loginButton").click();
    cy.contains("User started session").should("exist");
  });

  it("should not login with invalid credentials", () => {
    cy.mount(<App />);
    cy.contains("Login").click();
    cy.get('input[placeholder="Username"]').type("testuser");
    cy.get('input[placeholder="Password"]').type("password23");
    cy.get(".loginButton").click();
    cy.contains("Wrong user or password").should("exist");
  });
});