// ..........Detail Section................//
const detailBoxEl= document.querySelector('.detail-box').children;
const detailTapEl=document.querySelector('.detail-tap').children;

for(let i=1; i< detailBoxEl.length; i++){
    detailBoxEl[i].style.display='none';
    detailTapEl[i].classList.remove('active');
}
for(let i=0; i< detailBoxEl.length; i++){
detailTapEl[i].addEventListener('click',(e)=>{
    for(let i=0; i< detailBoxEl.length; i++){
        detailBoxEl[i].style.display='none';
        detailTapEl[i].classList.remove('active');
    }
    detailBoxEl[i].style.display='block';
    detailTapEl[i].classList.add('active');

})
}
