Principais Eventos

**Mouse**:
    click
    mouseover
    mouseout
    mousemove
    contextmenu
    mousedown
    mouseup

**Form**:
    submit
    focus
    blur
    change
    select

**Teclado**:
    keydown
    keyup

**Janela**:
    load
    unload
    rezise

Objetos do navegador

**window**
    window.screen: propriedades da tela
    window.history: últimas páginas acessadas
    window.location: dados do URL da página

**navigator**
    está dentro do window: 
        window.navigator === navigator
**document**
    está dentro do window: 
        window.document === document
    obter informações sobre a página que está sendo apresentada no navegador.
    document.documentURI - URL da página
    document.documentElement - ref ao elemento html
    document.links ou .images - lista todos 

//Alterações no objeto document, feitas por meio do JavaScript, resultam em alterações na página (mas não no código fonte)

**DOM - Document Objetct Model**: especificação HTML que diz os métodos para manipular o document.

tudo é nodo!