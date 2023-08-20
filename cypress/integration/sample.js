describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('localhost:3000') // 페이지 방문
    cy.contains('Some Text').click() // 페이지 내의 특정 텍스트를 클릭
  })
})
