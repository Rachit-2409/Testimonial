let content = ["This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.", "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.", "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best." ];

let user = ["Cherise G","Rosetta Q", "Constantine V"];

let img = ["p1.avif", "p2.avif", "p3.avif"];



let content_p = document.getElementById('content');
let client_p = document.getElementById('client');
let img_p = document.getElementById('img');
let i = 0;
change()


function change(){
    content_p.innerText = content[i];
    client_p.innerText = `- ${user[i]}`;
    img_p.setAttribute("src", `./assests/${img[i]}`);
    i++;
    if(i>2){
        i = 0 ;
    }
}

setInterval( ()=>{change()}, 9000)