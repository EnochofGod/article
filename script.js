let profileShare = document.querySelector('.profile');
let followShare = document.querySelector('.follow');

profileShare.addEventListener('click', (e) => {
    profileShare.style.display = "none";
    followShare.style.display = "flex";

})
followShare.addEventListener('click', (e) => {
    profileShare.style.display = "flex";
    followShare.style.display = "none";

})


function changeShare(){
    let share1 =  window.matchMedia("(min-width:768px)");
    if(share1.matches){
    profileShare.addEventListener('click', (e) => {
                profileShare.style.display = "flex";
                followShare.style.display = "flex";
        
         })
}else{
    profileShare.addEventListener('click', (e) => {
        profileShare.style.display = "flex";
        followShare.style.display = "none";

 })
}}
profileShare.addEventListener("click", changeShare);