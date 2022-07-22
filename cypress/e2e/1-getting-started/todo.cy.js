/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('app login-container', () => {
  before(() => {
    cy.visit('http://localhost:4200/auth/login')
  });

  it('insert credentials inputs', () => {
    cy.get('#txtEmail').type('gary@gmail.com');
    cy.get('#txtPassword').type('admin123');
  });

  it('click button login-container ', function () {
    cy.wait(500);
    cy.get('.login-container-btn').first().click({force: true})
  });

  it('check url after login-container', () => {
    cy.url()
      .should('be.equal', 'http://localhost:4200/news')
  })
});

describe('app feed', () => {

  it('check the number of bulletins loaded at startup', () => {
    cy.wait(1000)
    cy.get('.index-news-container-view-bulletin-feed').children().should('have.length.greaterThan', 0)
    cy.get('.index-news-container-view-bulletin-feed').children().should('have.length.lessThan', 6)
  })
});

describe('app new bulletin', () => {

  it('insert body bulletin', () => {
    cy.get('.bulletin-creator-container-textarea').first().type('Lorem ipsum dolor sit amet, consectetur')
  })

  it('send bulletin', () => {
    cy.wait(500)
    cy.get('#btnCreateBulletin').trigger('mouseover').wait(1000).click().click({force: true});
  });
});

describe('check responsive', () => {
  it('responsive', () => {
    cy.viewport(500, 1000)
    cy.get('.header-menu-btn-open').first().should('be.visible')
  });
});

describe('check modal', () => {

  it('open modal', () => {
    cy.wait(500);
    cy.get('.bulletin-creator-container-btn-upload-file').first().click({force:true})
    cy.get('.modal-container').first().should('be.visible')

  });
});



