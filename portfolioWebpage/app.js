let links = document.querySelectorAll('.project-tile');
let codes = document.querySelectorAll('.code')

for(let link of links){
    let p =  link.lastElementChild;
    link.addEventListener('mouseenter', function(){
        for (let code of p.children){
            code.classList.remove('hidden')
        }
    })
    link.addEventListener('mouseleave', function(){
        for (let code of p.children){
            code.classList.add('hidden')
        }
    })
}

