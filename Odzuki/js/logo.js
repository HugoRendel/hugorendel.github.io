window.onload=function(){
function toggle(id, range)
{
    range = range||[2,5];//2 сек картинка появляется, 5 сек исчезает
    var image = document.getElementById(id),
    i = 0, s = ["block","none"];
    function show()
    {
        //image.style.display = s[i];
        image.style.transition = 'all '+range[i]+'s';
        image.style.webkitTransition = 'all '+range[i]+'s';
        image.style.mozTransition = 'all '+range[i]+'s';
        image.style.oTransition = 'all '+range[i]+'s';
        image.className = i ? 'hide' : ''
        setTimeout(show,range[i]*1000);
        i ^= 1
    }
show()
}
toggle('logo',[1.5,3])
}