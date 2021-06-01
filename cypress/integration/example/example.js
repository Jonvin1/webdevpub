describe('Use navigation', () => {

    it('Go to page then click all navbar items', () => {
        cy.visit('http://127.0.0.1:5500/')
        for (let i = 0; i < 2; i++) {
            cy.wait(1000)
            cy.get('#btnPrev').click()
            cy.wait(1000)
            cy.get('#btnNext').click()
            cy.wait(1000)

            cy.get('#Download').click()
            cy.wait(1000)
            cy.get('#winx64').click()
            cy.wait(1000)
            cy.get('#winx32').click()
            cy.wait(1000)
            cy.get('#apk').click()
            cy.wait(1000)
            cy.get('#col2').click()
            cy.wait(1000)
            cy.get('#col1').click()
            cy.wait(1000)

            cy.get('#Play').click()
            cy.wait(5000)

            cy.get('#Home').click()
        }
    })
})