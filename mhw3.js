//category menu
function menu_a_click(event){
  event.preventDefault();
}

const menu_as = document.querySelectorAll(".category-menu span a");
for(const a of menu_as){
    a.addEventListener("click", menu_a_click);
}

//nav_1
const nav1_currency_exchange = document.querySelector("#currency-exchange");
const nav1_currency_exchange_menu = document.querySelector("#currency-exchange .category-menu");

const currency_as = document.querySelectorAll("#currency-exchange .category-menu span a");
const currencies = [];
for (const currency of currency_as) {
    currencies.push(currency.id);
}

nav1_currency_exchange.addEventListener("click", currency_exchange_click);
var currency_selected = "eur";
var previous_currency_selected = "eur";
async function currency_exchange_click(event){
    nav1_currency_exchange_menu.classList.toggle("hidden");
    currency_selected = event.target.id;
    if(currencies.includes(currency_selected)){
        get_prices();
        const exchange_rate = await get_currency_exchange(previous_currency_selected); //utilizzo await per la sincronizzazione
        console.log(exchange_rate);
        convert_currency_homepage(exchange_rate);
    }
}

const nav1_my_eBay = document.querySelector("#my-eBay");
const nav1_my_eBay_menu = document.querySelector("#my-eBay .category-menu");
nav1_my_eBay.addEventListener("click", my_eBay_click);
function my_eBay_click(event){
    nav1_my_eBay_menu.classList.toggle("hidden");
}

//nav_1_mobile
const navmobile_menu_button = document.querySelector("#nav_1_mobile #mobile_menu");
const navmobile_menu = document.querySelector("#nav_1_mobile .category-menu");
navmobile_menu_button.addEventListener("click", menu_click);
function menu_click(event){
    navmobile_menu.classList.toggle("hidden");
}

//header
const h_category_button = document.querySelector("#header #category-button");
const h_category_menu = document.querySelector("#header .category-menu");
h_category_button.addEventListener("click", category_click);
function category_click(event){
    h_category_menu.classList.toggle("hidden");
}

//section 1
const s1_dots = document.querySelectorAll("#nav-small-left .dot");
const s1_buttons = document.querySelectorAll("#nav-small-right button");
const s1 = document.getElementById("section-1");
const s1_text = document.querySelector("#section-1 .text");
var active_dot = 0;

for(const button of s1_buttons){
    button.addEventListener("click", button_click);
}

function button_click(event){
    s1_dots[active_dot].dataset.active = "0";
    if(event.currentTarget.dataset.position === "left"){
        
        if(active_dot > 0){
            active_dot--;
        }
        else{
            active_dot = s1_dots.length - 1;
        }
    }
    else{
        if(active_dot < s1_dots.length - 1){
            active_dot++;
        }
        else{
            active_dot = 0;
        }
    }
    s1_dots[active_dot].dataset.active = "1";
    change_content();
}

function change_content(){
    const s1_overlay = document.querySelector("#section-1 #overlay-1");
    const s1_text_h1 = document.createElement("h1");
    const s1_text_p = document.createElement("p");
    const s1_text_button = document.createElement("button");
    const s1_img = document.querySelector("#section-1 .upper img");
    switch(active_dot){
        case 0:
            for(const dot of s1_dots){
                dot.dataset.content = "1";
            }
            s1.className = "";
            s1_text.innerHTML = "";
            s1_overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
            s1_text_h1.textContent = "Restituisci con facilità";
            s1_text_p.textContent = "Se l'ordine non ti soddisfa, puoi restituirlo senza problemi.";
            s1_text_button.textContent = "Scopri di più";
            s1_text_button.classList.add("text-button");
            s1_text_button.classList.add("button-1");
            s1_text.appendChild(s1_text_h1);
            s1_text.appendChild(s1_text_p);
            s1_text.appendChild(s1_text_button);
            s1.classList.add("content-1");
            s1_img.src = "";
            break;
        case 1:
            for(const dot of s1_dots){
                dot.dataset.content = "2";
            }
            s1.className = "";
            s1.classList.add("content-2");
            s1_text.innerHTML = "";
            s1_overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
            s1_text_h1.textContent = "Risparmia sul meglio del ricondizionato";
            s1_text_p.textContent = "Approfitta del coupon 10% con la Tech Week";
            s1_text_button.textContent = "Acquista ora";
            s1_text_button.classList.add("text-button");
            s1_text_button.classList.add("button-2");
            s1_text.appendChild(s1_text_h1);
            s1_text.appendChild(s1_text_p);
            s1_text.appendChild(s1_text_button);
            s1_img.src = "coupon-10.png";
            break;
        case 2:
            for(const dot of s1_dots){
                dot.dataset.content = "3";
            }
            s1.className = "";
            s1.classList.add("content-3");
            s1_text.innerHTML = "";
            s1_overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
            s1_text_h1.textContent = "Scopri le Weekly Auctions in corso";
            s1_text_p.textContent = "Aggiudicati tantissime carte rare da professionisti del settore";
            s1_text_button.textContent = "Vai alle aste";
            s1_text_button.classList.add("text-button");
            s1_text_button.classList.add("button-3");
            s1_text.appendChild(s1_text_h1);
            s1_text.appendChild(s1_text_p);
            s1_text.appendChild(s1_text_button);
            s1_img.src = "auction-items.png";
            break;
    }
}

//footer
const f_country_button = document.querySelector("#footer #selector");
const f_country_menu = document.querySelector("#footer .category-menu");
f_country_button.addEventListener("click", country_click);
function country_click(event){
    f_country_menu.classList.toggle("hidden");
}

//REST_API
//exchange-api https://github.com/fawazahmed0/exchange-api
//Questa api restituisce il tasso di cambio tra diverse valute
async function get_currency_exchange(old_currency){
    return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" + old_currency + ".json").then(onResponse, onError).then(json => onJson(json, old_currency));
}

function onError(error) {
    console.log("Error: " + error);
}

function onResponse(response) {
    return response.json();
}

function onJson(json, old_currency) {
    //json[eur] è un oggetto ha come proprieta' le valute e i rispettivi tassi di cambio rispetto all'euro
    console.log(json);
    const exchange_rate = json[old_currency][currency_selected];
    previous_currency_selected = currency_selected;
    return exchange_rate;
}

var prices;
var old_prices;

function get_prices(){
    prices = document.querySelectorAll(".price");
    old_prices = document.querySelectorAll(".old-price");
    console.log(prices);
    console.log(old_prices);
    map_prices();
}

const prices_array = [];
const old_prices_array = [];

function map_prices(){
    let i = 0;
    for(const price of prices){
        prices_array[i] = parseFloat(price.textContent).toFixed(2);
        i++;
    }
    i = 0;
    for(const old_price of old_prices){
        old_prices_array[i] = parseFloat(old_price.textContent).toFixed(2);
        i++;
    }
}

function convert_currency_homepage(exchange_rate){
    let i = 0;
    for(const price of prices){
        price.textContent = convert_currency_single(prices_array[i], exchange_rate);
        i++;
    }
    i = 0;
    for(const price of old_prices){
        price.textContent = convert_currency_single(old_prices_array[i], exchange_rate);
        i++;
    }
}

function convert_currency_single(start_price, exchange_rate){
    const currency_symbol = currency_to_symbol(currency_selected);
    const price = (start_price * exchange_rate).toFixed(2) + " " + currency_symbol;
    return price;
}

function currency_to_symbol(currency){
    let currency_symbol = "";
    switch(currency){
        case "eur":
            currency_symbol = "€";
            break;
        case "usd":
            currency_symbol = "$";
            break;
        case "gbp":
            currency_symbol = "£";
            break;
        case "chf":
            currency_symbol = "Fr.";
            break;
        case "try":
            currency_symbol = "₺";
            break;
        case "rub":
            currency_symbol = "₽";
            break;
    }
    return currency_symbol;
}

//ebay-api https://developer.ebay.com/api-docs
//richiesta token

fetch("https://api.sandbox.ebay.com/identity/v1/oauth2/token", {
    method: "post",
    body: "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa("<client>" + ":" + "<secret>")
    }
}).then(onTokenResponse, onTokenError).then(onTokenJson);

function onTokenResponse(response) {
    return response.json();
}

function onTokenError(error) {
    console.log("Error: " + error);
}

var token = "";

function onTokenJson(json) {
    token = json.access_token;
}

//implemetazione della richiesta di ricerca di prodotti su eBay
const search_form = document.querySelector("#header form");
search_form.addEventListener("submit", search_form_submit);

//event listener per il click sul pulsante di ricerca
function search_form_submit(event){
    event.preventDefault();
    const search_input = document.querySelector("#search_box");
    const search_value = encodeURIComponent(search_input.value);
    if(search_value.length > 0){
        console.log("Searching for: " + search_value);
        fetch("https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=" + search_value + "&limit=15", {
            method: "get",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
                "X-EBAY-C-MARKETPLACE-ID": "EBAY_IT"
            }
        }).then(onSearchResponse, onSearchError).then(onSearchJson);
    }
}

function onSearchResponse(response) {
    console.log(response);
    return response.json();
}

function onSearchError(error) {
    console.log("Error: " + error);
}


//l'oggetto json restituito dalla ricerca contiene un array di oggetti itemSummary
//ogni oggetto itemSummary contiene le informazioni sul prodotto, come il titolo, il prezzo, l'immagine, ecc.
async function onSearchJson(json) {
    const search_results = document.querySelector("#search_results");
    search_results.classList.remove("hidden");
    const search_results_container = document.querySelector("#search_results_container");
    search_results_container.innerHTML = ""; //svuota il contenitore dei risultati di ricerca (per evitare di aggiungere i nuovi risultati ai vecchi)
    const item_summaries = json.itemSummaries;
    for(const item_summary of item_summaries){
        const title = item_summary.title;
        const price = item_summary.price.value;
        const currency = item_summary.price.currency.toLowerCase();
        const exchange_rate = await get_currency_exchange(currency);
        const converted_price = convert_currency_single(price, exchange_rate);
        
        //creazione dell'item da inserire nel contenitore dei risultati di ricerca
        const img = document.createElement("img");
        img.src = item_summary.image.imageUrl;

        const item = document.createElement("div");
        item.classList.add("item");
        item.appendChild(img);

        const p = document.createElement("p");
        const br = document.createElement("br");
        p.textContent = title;
        const span = document.createElement("span");
        span.classList.add("price");
        span.textContent = converted_price;
        p.appendChild(br);
        p.appendChild(span);
        item.appendChild(p);

        search_results_container.appendChild(item);
    }
}

