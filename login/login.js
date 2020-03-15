"use strict";
function clickRegister(){
	$('#registerField').html(`<div class="form-group"><label for="InputPassword2">Password</label>
		<input type="password" name='passTwo' class="form-control" id="InputPassword2" placeholder="Password"></div>`);

};
function clickRestore(){
	$('#pageForma').html(`

			<div align='center' id='headerOne'> Restore </div>
			<form><div class="form-group">
			<div class="form-group">
			<label for="InputEmail">Email address</label>
			<input type="email" name='email' class="form-control" id="InputEmail1" placeholder="Email"></div>

			<button type="submit" id="button" class="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 btn btn-default">
			LOGIN</button>`)
}

(function() {

var app = {

initialize : function () {
this.setUpListeners();
},

setUpListeners: function () {
$('form').on('submit', app.submitForm);
$('form').on('keydown', 'input', app.removeError);
},

submitForm: function (e) {
e.preventDefault();

var form = $(this),
submitBtn = form.find('button[type="submit"]');

if( app.validateForm(form) === false ) return false;

submitBtn.attr('disabled', 'disabled');

var str = form.serialize();

$.ajax({
url: 'contact_form/contact_process.php',
type: 'POST',
data: str
})
.done(function(msg) {
if(msg === "OK"){
var result = "<div = 'bg-success'>Спасибо за заявку! Проверьте ваш email !</div>"
form.html(result);
}else{
form.html(msg);
}
})
.always(function() {
submitBtn.removeAttr('disabled');
});

},

validateForm: function (form){
var inputs = form.find('input'),
valid = true;

inputs.tooltip('destroy');

$.each(inputs, function(index, val) {
var input = $(val),
val = input.val(),
formGroup = input.parents('.form-group'),
label = formGroup.find('label').text().toLowerCase(),
textError = 'Введите ' + label;

if(val.length === 0){
formGroup.addClass('has-error').removeClass('has-success');
input.tooltip({
trigger: 'manual',
placement: 'right',
title: textError
}).tooltip('show');
valid = false;
}else{
formGroup.addClass('has-success').removeClass('has-error');
}
});

return valid;
},

removeError: function () {
$(this).tooltip('destroy').parents('.form-group').removeClass('has-error');
}

}

app.initialize();

}());