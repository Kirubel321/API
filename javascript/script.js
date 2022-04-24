let i = 0;
const url ="https://friends-quotes-api.herokuapp.com/quotes";
const fimg = document.getElementById('image');
const fchar = document.getElementById('charname');
const fquote = document.getElementById('quote');
const ftitle = document.getElementById('title_');
const pic = ["https://im.indiatimes.in/content/2020/Mar/Webpnet-resizeimage-60_5e5ca3a06cc0d.jpg", "https://i.pinimg.com/736x/e8/d9/bd/e8d9bdc79401b3c4d52356ba1a69fea0.jpg", "https://i.pinimg.com/736x/06/db/fb/06dbfbe25e8512cd41fb1f188f4abfa9.jpg", "https://cdn11.bigcommerce.com/s-e4notjahj4/images/stencil/original/products/718/3321/AC24-MAY-Ross__68623.1582460285.jpg","https://i.pinimg.com/originals/0b/29/40/0b29407769b30531e2ffaec8d14f0244.jpg", "https://m.media-amazon.com/images/M/MV5BNTI1MTc1ODYwNl5BMl5BanBnXkFtZTgwMTcxMzYzMzE@._V1_.jpg"];

async function init() {       
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        place(data);
    }else{
        const message = 'An error has occured: ${response.status}';
    }
     function place(data) {
         fquote.innerHTML = data[i].quote;
         fchar.innerHTML = data[i].character;
         fimg.src = qoutepic_(data[i].character);
     }
}

function qoutepic_(dimg){
    if(dimg == "Chandler"){
        return pic[0];
    }
    else if(dimg == "Monica"){
        return pic[1];
    }
    else if(dimg == "Phoebe"){
        return pic[2];
    }
    else if(dimg == "Ross"){
        return pic[3];
    }
    else if(dimg == "Joey"){
        return pic[4];
    }
    else if(dimg == "Rachel"){
        return pic[5];
    }
    else{
        return 0;
    }
}

function next(){
    i++;
    if(i>=18){
        i=0;
    }
    init();
       
}
function previous(){
    i--;
    if(i<=0){
        i=18;
    }
    init();
    
}
 
 window.onload  = () => {
     init();
     document.getElementById("nextbtn").addEventListener("click", next);
     document.getElementById("prevbtn").addEventListener("click", previous);
 }










 

