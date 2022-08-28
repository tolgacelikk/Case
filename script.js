const ReplyButton=document.querySelectorAll(".reply");
const ReplyButton2=document.getElementById("reply2")
const comments=document.querySelectorAll(".media mt-4 hidden")
const reply1=document.getElementById('reply1')
const comment1=document.getElementById('comment1')
const comment2=document.getElementById('comment2')
const comment3=document.getElementById('comment3')
const comment4=document.getElementById('comment4')
const comment5=document.getElementById('comment5')
const comtocomment1=document.getElementById('comment2-2')
const comtocomment2=document.getElementById('comment4-4')


fetch("data.json")
  .then(response => response.json()
  ).then(responsejson=>{
    for(i=0;i<=responsejson.comments.length;i++){
        if(responsejson.comments[i].title){
            console.log('Hello ')
            ReplyButton.forEach((btn)=>btn.addEventListener("click",function(e){
                comment1.classList.remove("hidden")
                comment2.classList.remove("hidden")
                comment3.classList.remove("hidden")
                comment4.classList.remove("hidden")
                comment5.classList.remove("hidden")
                
        
        
            }))
            
        }
        if(responsejson.comments[i].comment_to_comment){
            ReplyButton2.addEventListener("click",function(e){
                comtocomment1.classList.remove("hidden")
                comtocomment2.classList.remove("hidden")

            })
            

        }
        

    }
   
    
    
   
   
  })
  const closemodal=function(){
    comment1.classList.add("hidden")
    comment2.classList.add("hidden")
    comment3.classList.add("hidden")
    comment4.classList.add("hidden")
    comment5.classList.add("hidden")
    comtocomment1.classList.add("hidden")
    comtocomment2.classList.add("hidden")
  }
  closemodal()
 
  
   document.addEventListener('keydown',function(e){
     console.log(e.key)
     if(e.key==='Escape'&& !comment1.classList.contains('hidden')){
       closemodal()
     }
   })  