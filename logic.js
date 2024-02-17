const glitch = new Audio('./error.mp3')
let stArr = [
    'Initializing Hacking',
    'Password Files Detected',
    'Cleaning Up',
    'Sending All Passwords and Files To Server',
    'Reading Your Files'
];
let box = document.getElementsByClassName('content-box')[0]

let delay = () => {
    btn.style.display = 'none'
    return new Promise((resolve, reject) => {
        let i = 0;
        const render = setInterval(() => {
            glitch.play()
            if (i < stArr.length) {
                let div = document.createElement('div');
                div.classList.add('statement')
                div.innerHTML = stArr[i]

                const dots = setInterval(() => {
                    if (div.innerHTML.endsWith('...')) {
                        div.innerHTML = div.innerHTML.slice(0, div.innerHTML.length - 3)
                    }
                    else {
                        div.innerHTML = div.innerHTML + '.'
                    }
                }, 150)
                setTimeout(() => {
                    clearInterval(dots)
                }, 2000);
                resolve(box.append(div))
                i++
            }
            else {
                glitch.pause()
                let div = document.createElement('div');
                div.classList.add('statement')
                div.innerHTML = 'Hehe! You are Hacked Now.'
                box.append(div)
                setTimeout(() => {
                    clearInterval(render)
                }, 100)
            }
        }, 2000);
    })
}


let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', () => {
    delay()
})