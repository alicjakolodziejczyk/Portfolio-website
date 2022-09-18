
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



$('form.ajax').on('submit', function(){
  var that = $(this),
    url = that.attr('action'),
    type = that.attr('method'),
    data = {};

  that.find('[name]').each(function(index, value){
    var that = $(this),
      name = that.attr('name'),
      value = that.val();

    data[name] = value;
  });

  $.ajax({
    url: url,
    type: type,
    data: data,
    success: function(response) {
      console.log(response);
    }
  });

  console.log(data);
  return false;
});

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
