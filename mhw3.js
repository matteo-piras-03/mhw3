//nav_1
const nav1_my_eBay = document.querySelector("#nav_1_right .relative");
const nav1_my_eBay_menu = document.querySelector("#nav_1_right .category-menu");
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