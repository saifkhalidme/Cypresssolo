Cypress.Commands.add('showAlert', (message) => {
    cy.get('body').then($body => {
        // Remove any existing alert first
        $body.find('#custom-alert').remove()

        // Append a new alert div
        $body.append(`
      <div id="custom-alert" style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #7be24f;
        color: #0d0f0d;
        padding: 20px 30px;
        border: 10px solid #c01627;
        border-radius: 30px;
        font-size: 28px;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      ">
        ${message}
      </div>
    `)
    })
    cy.wait(6000).then(() => {
        cy.get('#custom-alert').invoke('remove')
    })
})
