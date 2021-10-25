let products = [
    'Sony Xperia',
    'Samsung Galaxy',
    'Nokia 06',
    'Xiaomi Redmi Note 4',
    'Apple iPhone 6s',
    'Xiaomi 5s Plus',
    'Apple iPhone 8 Plus',
    'Fujitsu F-04E',
    'Oppo A71'
];


function buildList(products) {
    let html = '';
    html += `<table>`;
        for (let i = 0; i < products.length; i++) {
            html += `<tr>`;
                html += `<td>${i + 1}</td>`;
                html += `<td><b id='show_text_${i}'>${products[i]}</b>`;
                html += `<input id='hidden_input_${i}' type="text" value='${products[i]}' class='hidden'></td>`;
                html += `</td>`;
                html += `<td>`;
                html += `<input type='button' value='Edit' onclick='editProduct(${i}, this)'>&nbsp;&nbsp;`;
                html += `<input type='button' value='Delete' onclick='deleteProduct(${i})'>`;
                html += `</td>`;
            html += `</tr>`;
        }
    html += `</table>`;

    return html;
}

function addProduct(value) {
    if(confirm(`Add "${value}" into Products list ?`)){
        products.push(value);
        document.getElementById('inputAdd').value = null;
        build();
    }
}

function editProduct(index, self) {
    let hiddenInput = document.getElementById(`hidden_input_${index}`);
    let showText = document.getElementById(`show_text_${index}`);
    hiddenInput.classList.remove('hidden');
    showText.classList.add('hidden');
    self.value = `Save`;
    if(self.value == 'Save'){
        self.addEventListener('click', ()=>{
            products[index] = hiddenInput.value;
            build();
        });
    }
}

function deleteProduct(index) {
    if(confirm('Are you sure?')){
        products.splice(index, 1);
        build();
    }
}

function build() {
    document.getElementById('productList').innerHTML = buildList(products);
}
build();