const btn = document.querySelector('.toggle');
const subTxt = document.querySelectorAll('.channel-name, .vid-stats');
// console.log(subTxt)
const body = document.body;
console.log(body.classList)

youtubeDark = document.querySelector('.youtube-logo-dark')
youtubeLight = document.querySelector('.youtube-logo')

hamLight = document.querySelector('.hamburger-menu')
hamDark = document.querySelector('.hamburger-menu-dark')

btn.addEventListener('click', toogle);

function toogle(){
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode')
        hamDark.style.display = 'none'
        hamLight.style.display = 'block'
        youtubeDark.style.display = 'none'
        youtubeLight.style.display = 'block'
        for (let i = 0; i < subTxt.length; i++) {
            if (subTxt[i].classList.contains('grey-txt')){
                subTxt[i].classList.remove('grey-txt')
            }
        }
        btn.textContent = 'Dark-Mode'   
    }

    else{
        body.classList.add('dark-mode');
        for (let i = 0; i < subTxt.length; i++) {
                subTxt[i].classList.add('grey-txt');
            }
        youtubeDark.style.display = 'block'
        youtubeLight.style.display = 'none'
        hamDark.style.display = 'block'
        hamLight.style.display = 'none'
        btn.textContent = 'Dark-Mode'
    }
}