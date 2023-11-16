const itensCarrinho = {}
// vai guardar todos os itens do carrinho

function addCarrinho(itemNome, itemPreco) {
    //veifica se o produto vai aumentar
    if (itensCarrinho[itemNome]) {
        //a quatidade do produto vai aumentar
        itensCarrinho[itemNome].quantidade++
        //o preço vai aumentar
        itensCarrinho[itemNome].precoTotal += itemPreco
        //mostrando a nova quantidade
        itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
        //mostrando o novo peço
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
    } else {
        const liItem = document.createElement("li")
        liItem.innerHTML = `
            <div class="item">
                <span>${itemNome}</span>
                <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})"> - </button>
                <span class="quantidade">1</span>
                <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})"> + </button>
                <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
            </div>`
        document.getElementById("itens-lista").appendChild(liItem)

        itensCarrinho[itemNome] = {
            quantidade: 1,
            precoTotal: itemPreco,
            liItem: liItem
        }
    }
    //atualiza o valor total
    document.getElementById("preco-total").innerHTML = "Total R$" + precoTotal.toFixed(2)
    updateCarrinho()
}

function removeCarrinho(itemNome, itemPreco) {
    if(itensCarrinho[itemNome]) {
        if(itensCarrinho[itemNome].quantidade > 1){
            itensCarrinho[itemNome].quantidade--
            itensCarrinho[itemNome].precoTotal -= itemPreco
            itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
        } else {
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
        }
        document.getElementById("preco-total").innerHTML = "Total R$" + precoTotal.toFixed(2)
        updateCarrinho()
    }
}
function updateCarrinho() {
    let cont = 0
    for(let item in itensCarrinho) {
        cont += itensCarrinho[item].quantidade
    }
    document.getElementById("cont-carrinho").innerHTML = cont
}

function limparCarrinho () {
    document.getElementById("itens-lista").innerHTML = ""
    document.getElementById("preco-total").innerHTML = "Valor Total: R$0.00"
    for (let itemNome in itensCarrinho) {
        delete itensCarrinho [itemNome]
    }
}

function toggleCarrinho() {
    const itensCarrinhoDiv = document.getElementById("carrinho-itens")
    if(itensCarrinhoDiv.style.display == "none") {
        itensCarrinhoDiv.style.display = "block" 
    } else {
        itensCarrinhoDiv.display = "none"
    }
}

function buscarProduto() {
    const buscarInput = document.getElementById("buscar-input")
    const produto = document.getElementByIdClassName("produto")

    for(let i = 0; i<produto.length; i++) {
        const produtoNome = produto[1].querySelector("h3").innerText.toLowerCase ()
        if(produtoNome.includes(buscarInput.value.toLowerCase())) {
            produto[i].style.display = "block"
        } else {
            produto[i].style.display = "none"
        }
    }

}