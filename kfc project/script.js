const items = [
    { name: 'Pizza 001', price: 8.9,quality:1},
    { name: 'Chicken 001', price: 4.9,quality:1},
    { name: 'potato 001', price: 6.9,quality:1},
]

const SHIPPING =2

function render(){
    let subtotal = 0;
    items.forEach(item =>{
        subtotal+=item.quality*item.price;
    })
    const total = subtotal+SHIPPING;

    const html = items.map(item=> `
     <li class="order-item">
    <span class="item-name">${item.name}</span>
    <span class="item-quality">
        <button class='dec'>-</button>
        <input class='quality' type="number" value="${item.quality}">
        <button class='inc'>+</button>
    </span>
    <span class="item-price">
        <span>$${(item.quality*item.price).toFixed(2)}</span>
        <button class='delete btn-delete'>X</button>
    </span>
</li>
    `).join('')
    $('#order-items').html( html);



    //delete
    const deleteButtons = [ ... $('.delete')]
    //update
    const decButtons = [ ... $('.dec')]
    console.log( [ ... $('.dec')])
    console.log( [ ... $('.inc')])
    const incButtons = [ ... $('.inc')]

    for (let i = 0; i < decButtons.length; i++) {
        decButtons[i].addEventListener('click',()=>{
            updateQuality(i,items[i].quality-1)
        })
    }

    for (let i = 0; i < incButtons.length; i++) {
        incButtons[i].addEventListener('click',()=>{
            updateQuality(i,items[i].quality+1)
        })
    }

    for (let i = 0; i < deleteButtons.length; i++) {
       deleteButtons[i].addEventListener('click',()=>{
           remove(i);
       })
    }

    

    $('#sub-total').text(`$${subtotal.toFixed(2)}`)
    $('#shipping').text(`$${SHIPPING}`) 
    $('#total').text(`$${total.toFixed(2)}`) 
}

function add() {
    items.push({
        name: `Pizza ${(Math.random()*1000).toFixed(0)}`,
        quality:1,
        price: (Math.random()*100),
    })
    render()
}

document.getElementById("btn-add").addEventListener("click", function(){
    add();
} );

function remove(index){
    items.splice(index,1);
    render()
}

function updateQuality (index,quality) {
    if (quality <1) return;
    items[index].quality = quality;
    render();

  }

render();