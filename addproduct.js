$(document).ready(function(){
  $('#searchProduct').on('input', function () {
    var val = this.value;
    if($('#resultSearch option').filter(function(){
        return this.value.toLowerCase() === val.toLowerCase();
    }).length){
      $('#listProduct').append("<li>" + this.value + "<button type='button' id='thrower' class='btn btn-light float-right'><i class='fa fa-trash'></i></button></li>");
      $('#searchProduct').val("");
    }

});
});
