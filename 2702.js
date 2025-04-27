function inc() {
    let one=document.getElementById("pic");
    let defwidth=one.width;
    let newwidth=defwidth+10;
    one.style.width=newwidth+'px';
}
function dec() {
    let two=document.getElementById('pic');
    let current=two.width;
    let neww=current-10;
    two.style.width=neww+'px';
}