// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(_e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
 })


 // Typing Effect

 let typed = new Typed('autoinput',{
    strings:['Front-End Developer', 'Freelance!', 'UI Designer' ],
    typedpeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true
    
 })
