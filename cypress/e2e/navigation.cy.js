
describe('Navegação e Produtos - Automation Test Store', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // CT-01
  it('CT-01 - Deve acessar a página inicial', () => {
    cy.url().should('include', 'automationteststore.com');
    cy.get('body').should('be.visible');
  });

  // CT-02
  it('CT-02 - Deve exibir o menu principal', () => {
    cy.get('a[href*="path=36"]').should('be.visible');
  });

  // CT-03
it('CT-03 - Deve acessar a categoria Makeup', () => {
  cy.visit('/index.php?rt=product/category&path=36');
  cy.url().should('include', 'path=36');
  cy.get('body').should('be.visible');
});

  // CT-04 - Deve exibir a subcategoria Eyes
it('CT-04 - Deve exibir a subcategoria Eyes', () => {
  cy.visit('/index.php?rt=product/category&path=36');
  cy.get('a[href*="path=36_39"]').should('exist');
});

// CT-05 - Deve acessar a subcategoria Eyes
it('CT-05 - Deve acessar a subcategoria Eyes', () => {
  cy.visit('/index.php?rt=product/category&path=36_39');
  cy.url().should('include', 'path=36_39');
  cy.get('body').should('be.visible');
});

// CT-06 - Deve exibir produtos da categoria Eyes
it('CT-06 - Deve exibir produtos da categoria Eyes', () => {
  cy.visit('/index.php?rt=product/category&path=36_39');
  cy.get('a[href*="product_id=108"]').should('exist');
});

// CT-07 - Deve abrir os detalhes do produto
it('CT-07 - Deve abrir os detalhes do produto', () => {
  cy.visit('/index.php?rt=product/product&product_id=108');
  cy.url().should('include', 'product_id=108');
  cy.get('body').should('be.visible');
});



  // CT-08 - Deve buscar um produto existente
  it('CT-08 - Deve buscar um produto existente', () => {
    cy.visit('/');
    cy.get('input[name="filter_keyword"]')
      .first()
      .type('Bronzer{enter}');

    cy.get('body').should('contain.text', 'Bronzer');
  });

  // CT-09 - Deve informar quando não encontrar produtos
  it('CT-09 - Deve realizar busca sem resultados', () => {
    cy.visit('/');
    cy.get('input[name="filter_keyword"]')
      .first()
      .type('ProdutoInexistente123{enter}');

    cy.get('body').should('contain.text', 'There is no product');
  });

  // CT-10 - Deve buscar produto por nome parcial
  it('CT-10 - Deve buscar produto por nome parcial', () => {
    cy.visit('/');
    cy.get('input[name="filter_keyword"]')
      .first()
      .type('Skin{enter}');

    cy.get('body').should('contain.text', 'Skin');
  });


  // CT-11 - Deve acessar os detalhes de um produto pelo catálogo
  it('CT-11 - Deve acessar os detalhes do produto pelo catálogo', () => {
    cy.visit('/index.php?rt=product/category&path=36_39');
    cy.get('a[href*="product_id=108"]').first().click({ force: true });
    cy.url().should('include', 'product_id=108');
    cy.get('body').should('be.visible');
  });


  // CT-12 - Deve abrir a página de detalhes do produto para compra

  // CT-12 - Deve acessar o produto Skinsheen Bronzer Stick
  it('CT-12 - Deve acessar o produto Skinsheen Bronzer Stick', () => {
    cy.visit('/index.php?rt=product/product&product_id=50');
    cy.get('body').should('contain.text', 'Skinsheen Bronzer Stick');
    cy.get('input[name="quantity"]').should('be.visible');
  });


  // CT-13 - Deve permitir informar a quantidade do produto
  it('CT-13 - Deve permitir alterar a quantidade do produto', () => {
    cy.visit('/index.php?rt=product/product&product_id=50');
    cy.get('input[name="quantity"]').clear().type('4');
    cy.get('input[name="quantity"]').should('have.value', '4');
  });

  // CT-14 - Deve acessar o carrinho de compras
  it('CT-14 - Deve acessar o carrinho de compras', () => {
    cy.visit('/index.php?rt=checkout/cart');
    cy.get('body').should('be.visible');
    cy.url().should('include', 'checkout/cart');
  });


  // CT-15 - Deve exibir a página inicial em resolução mobile
  it('CT-15 - Deve exibir a página inicial em resolução mobile', () => {
    cy.viewport(400, 586);
    cy.visit('/');
    cy.get('body').should('be.visible');
    cy.get('body').should('not.have.css', 'overflow-x', 'scroll');
  });

  // CT-16 - Deve exibir a página do produto em resolução mobile
  it('CT-16 - Deve exibir o produto em resolução mobile', () => {
    cy.viewport(400, 586);
    cy.visit('/index.php?rt=product/product&product_id=50');
    cy.get('body').should('be.visible');
    cy.contains('Skinsheen Bronzer Stick').should('be.visible');
  });

});