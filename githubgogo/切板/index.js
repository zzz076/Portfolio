 document.getElementById('activeButton').addEventListener('click',toggleBell)
 document.getElementById('activeInput').addEventListener('click',toggleSearch)
 document.addEventListener('click',remove)

function toggleBell() {
   const tri = document.querySelectorAll(".trigger")
   const page = [...tri]
    page.forEach(el => el.classList.toggle('active'))
}
//hover過Bell會導致滑鼠滑到選單上時選單消失 所以沒辦法跟原版一樣

function remove(e) {
    const tri = document.querySelectorAll(".trigger-input")
    const page = [...tri]
    const bor = document.querySelectorAll('.search-bar')
    const bors = [...bor]
   
    
    const testa = document.querySelector('.testa')
    const testb = document.querySelector('.testb')
   if(e.target !== testa && e.target !== testb){
    
    page.forEach(el => el.classList.remove('active'))
    bors.forEach(el => el.classList.remove('border'))
   }
}

function toggleSearch() {
    const tri = document.querySelectorAll(".trigger-input")
    const page = [...tri]
    const bor = document.querySelectorAll('.search-bar')
    const bors = [...bor]
   
     page.forEach(el => el.classList.add('active'))
     bors.forEach(el => el.classList.add('border'))
     
 }
 
