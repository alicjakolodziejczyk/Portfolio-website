
window.onload = function(){
  var icon = document.getElementById("mode-icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    var theme;
    if(document.body.classList.contains("dark-theme")){
      icon.src = "img/sun.png";
      console.log("Dark mode");
      theme = "DARK"
    }else{
      icon.src = "img/moon.png";
      console.log("Light-mode");
      theme = "Light";
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme));
  }


let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
  document.body.classList = "dark-theme";
  icon.src = "img/sun.png";
}

$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });
});
}
