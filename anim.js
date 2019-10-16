const items = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
        entry.target.style.animation = 'yourAnimation 1s forwards ease';
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
items.forEach(item => {
  observer.observe(item)  
})