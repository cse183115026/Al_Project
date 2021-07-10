const texts= document.querySelector('.texts');
window.SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition; 

const recognition =new window.SpeechRecognition();
recognition.interimResults= true;

let p= document.createElement("p");

recognition.addEventListener('result',(e) => {

    const text = Array.from(e.results)
    .map(results => results[0])
    .map(results => results.transcript)
    .join('');

    p.innerText =text;
    texts.appendChild(p);
    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Hi';
            texts.appendChild(p);
        }
        if (
            text.includes("what's your name") ||
            text.includes("what is your name")
          ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "My Name is Sujon";
            texts.appendChild(p);
          }
    }
   
    console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

