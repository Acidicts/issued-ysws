window.transitionToPage = function(href) {
    document.querySelector('body').style.transform = 'translateX(-200%)';
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(function() {
        document.body.style.opacity = '1';
        document.querySelector('body').style.transform = 'translateX(0)';
    }, 200);
})