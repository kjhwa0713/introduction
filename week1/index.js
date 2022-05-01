function changeImg() {
    const a=document.getElementById("photo").src;

    if(a=="http://localhost:5500/Images/5.jpg")
    {
      document.getElementById("photo").src ="Images/7.jpg"
    }
    else document.getElementById("photo").src ="Images/5.jpg"
  }
  //블랙모드
  function toggleBack()
  {
    const bbtn = document.getElementById("btn");
    const body= document.querySelector('body');

    if(bbtn.value=='블랙모드')
    {
      body.style.backgroundColor='black';
      body.style.color='white';
      bbtn.value='라이트모드';
      alert('블랙모드로 변경')
    }
    else {
      body.style.backgroundColor='white';
      body.style.color='black';
      bbtn.value='블랙모드';
      alert('라이트모드로 변경')
    }
  }
  //소개 숨기기/보이기
  function controlHide(){
    let text = document.getElementById("text");
    let birth = document.getElementById("birthday");
    let cafe = document.getElementById("cafe");

    if(text.value=='숨기기')
    {
      document.getElementById("aboutMe").style.display = "none";
      birth.style.height='400px';
      cafe.style.height='400px';
      text.value='보이기';
      
    }
    else{
      document.getElementById("aboutMe").style.display = "";
      birth.style.height='500px';
      cafe.style.height='500px';
      text.value='숨기기';
    } 
  }