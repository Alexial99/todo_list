"use strict";
function createCalendar(elem, year, month) {
	let mon;
	  switch(month){
	  	case 0:
	  	mon ='январь';
	  	break;
	  	case 1:
	  	mon = 'февраль';
	  	break;
	  	case 2:
	  	mon = 'март';
	  	break;
	  	case 3:
	  	mon = 'апрель';
	  	break;
	  	case 4:
	  	mon = 'май';
	  	break;
	  	case 5:
	  	mon = 'июнь';
	  	break;
	  	case 6:
	  	mon = 'июль';
	  	break;
	  	case 7:
	  	mon = 'август';
	  	break;
	  	case 8:
	  	mon = 'сентябрь';
	  	break;
	  	case 9:
	  	mon = 'октябрь';
	  	break;
	  	case 10:
	  	mon = 'ноябрь';
	  	break;
	  	case 11:
	  	mon = 'декабрь';
	  	break;
	  }

      let d = new Date(year, month);

      let table = `
      <table class="table ">
       <tr><th id="backButton" onclick="backButtonClick()"> < </th>


	  <div class="menu">
      <th id = "monthSelection" colspan="5">`;
      table+= mon ;
      table+=`</th>

      </div>

      <th id="forwardButton" onclick="forwardButtonClick()"> > </th></tr>

      <tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;

      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      // * * * 1  2  3  4
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // <td> ячейки календаря с датами
      while (d.getMonth() == month) {
        table += '<td><p>' + d.getDate() + '</p></td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      // добить таблицу пустыми ячейками, если нужно
      // 29 30 31 * * * *
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      // закрыть таблицу
      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;
    }
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth();


	function forwardButtonClick(){
			let monthsArray= ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
			//let ggg = $(monthSelection).html();
			if( monthsArray.indexOf($(monthSelection).html())){
				nowMonth= monthsArray.indexOf($(monthSelection).html());
			}
    		nowMonth += 1;
    		if(nowMonth>=12){
    			nowYear += 1;
    			nowMonth = 1;
			}
			 createCalendar(calendar_table,nowYear, nowMonth);
	}

	function backButtonClick(){
			let monthsArray= ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
			if( monthsArray.indexOf($(monthSelection).html())){
				nowMonth= monthsArray.indexOf($(monthSelection).html());
			}

			nowMonth -= 1;
    		if(nowMonth < 0){
    			nowYear -= 1;
    			nowMonth = 11;
			}
			 createCalendar(calendar_table,nowYear, nowMonth);
	}
    createCalendar(calendar_table,nowYear, nowMonth);
	//backButton.addEventListener("click", backButtonClick);

$(function(){

		let calendar_notes = [];
		function User_note(username, noteText, start_time, completion_time){
			this.username = username;
			this.noteText = noteText;
			this.start_time = start_time;
			this.completion_time = completion_time;
		}

		$(".notes_window").hide();
		$('#calendar_notepad').hide();

		$('th, td').on('mouseenter',function(){
			$(this).css({'background':'rgba(0,0,0,0.4)','color':'white'});
		});
		$('th').on('mouseleave',function(){
			$(this).css({'background':'rgba(0,0,0,0.2)','color':'black'});
			if( ($(".SwitchOptionCosmoTheme").length != 0) || ($(".SwitchOptionDarkTheme").length != 0) ){
				$(this).css({'background':'rgba(0,0,0,0.2)','color':'white'});
			}
		});
		$('td').on('mouseleave',function(){
			$(this).css({'background':'none','color':'black'});
			if( ($(".SwitchOptionCosmoTheme").length != 0) || ($(".SwitchOptionDarkTheme").length != 0) ){
				$(this).css({'background':'none','color':'white'});
			}
		});

		if( $(calendar_notes).length == 0){
		$('#state_of_notes').html( 'нет заметок');
		}
		else{$('#state_of_notes').html(calendar_notes);}

		$('#add_notes').on('click',function(){
			$('#calendar_table, .notes_window, .nav').hide();
			$('#calendar_notepad').show();
		});

		$("#saving_notes").on("click", function(){
			$('#calendar_table, .notes_window, .nav').show();
			$('#calendar_notepad').hide();
			calendar_notes.push(new User_note("John","fff","12","13"));
			console.log(calendar_notes[0]);
		});

		`${$(this).attr('id')}HeaderOne`
	/*	imageValues[0] = {
    name: "LEGITIM",
    link: "http://fozzyshop.com.ua/72653-thickbox_default/voda-mineralnaya-borjomi-evro-steklo.jpg",
    rate: "5",
    price:  "5$"
}*/

		$('td').on('click', function(){
			$(".notes_window").show();
			$("#selected_day").html($(this).html());
			if( ($(this).attr("class")) == "active_notes_window"){
				$(".notes_window").hide();
			}
			$(this).toggleClass('active_notes_window');
		})



	/*	$('#monthSelection').on('click',function(){
			$('#submenuMonth').slideToggle(500);
		}); */
	/*	$('#forwardButton').on('click',function(){
			let monthsArray= ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
			//let ggg = $(monthSelection).html();
			if( monthsArray.indexOf($(monthSelection).html())){
				nowMonth= monthsArray.indexOf($(monthSelection).html());
			}
    		nowMonth += 1;
    		if(nowMonth==12){
    			nowYear += 1;
    			nowMonth = 1;
			}
			console.log ('ff');
			 createCalendar(calendar_table,nowYear, nowMonth);
		});*/
/*		$('#backButton').on('click',function(){

    		nowMonth -= 1;
    		if(nowMonth < 0){
    			nowYear -= 1;
    			nowMonth = 11;
			}
			 createCalendar(calendar_table,nowYear, nowMonth);
		}); */
		$('#add').on('click',function(){
			let val=$('#inputString').val();
			if(val !==''){
				let elem = $('<li ></li>').text(val);
				$(elem).append('<button class ="buttonRemove">x</button>');
				$('#mylist').append(elem);
				$('input').val('');
				$('.buttonRemove').on('click',function(){
					$(this).parent(). remove();
				});
			}
		});

		$('#buttonOk').on('click',function(){
			let val=$('#inputStatus').val();
			if(val.length <=56){
				$('#status').html(val);
			}
			else{
				alert ('слишком длинный статус');
			}
		});

		$('.switchTheme').on('click',function(){
			//console.log($(this).attr('id'));
			$(this).toggleClass('themeActive');
			$('body').toggleClass(`${$(this).attr('id')}Theme`);
			$('.headerOne').toggleClass(`${$(this).attr('id')}HeaderOne`);
			$('.headerTwo').toggleClass(`${$(this).attr('id')}HeaderTwo`);

			if(($(".headerOneOrig").length !=0)||($(".textActive").length !=0)){
				$('.headerOne').removeClass('headerOneOrig');
				$('.headerTwo').removeClass('headerTwoOrig');
				$('#inputString').css('background-color','black');
			}
			else {
				  $('.headerOne').addClass('headerOneOrig');
				  $('.headerTwo').addClass('headerTwoOrig');
				  $('#inputString').css('background-color','white');

			}
			if(($(this).attr('id') == 'SwitchOptionCosmo')&&($(".headerOneOrig").length ==0)){
				$('.trajectoryOne, .trajectoryTwo, .trajectoryThree, .trajectoryFour').hide();
			}
			else{
				$('.trajectoryOne, .trajectoryTwo, .trajectoryThree, .trajectoryFour').show();/*bubblesCondition.appendTo('body');*/
			}
		});


		/*$('#SwitchOptionCosmo').on('click',function(id){
			$('body').toggleClass('themeCosmo');
			$('.headerOne').toggleClass('cosmoHeaderOne');
			$('.headerTwo').toggleClass('cosmoHeaderTwo');


			if($(".headerOneOrig").length !=0){
				$('.headerOne').removeClass('headerOneOrig');
				$('.headerTwo').removeClass('headerTwoOrig');
				$('#inputString').css('background-color','black');
			}
			else {											//if($(".themeDark").length == 0) {
				  $('.headerOne').addClass('headerOneOrig');
				  $('.headerTwo').addClass('headerTwoOrig');
				  $('#inputString').css('background-color','white');

			}
		});

		$('#SwitchOptionPink').on('click',function(){
			if($(".themeCosmo").length !=0){
					//let h =getComputedStyle("div.material-switch.label",'::before' );
					//document.querySelector('::after').appendChild(document.createTextNode( `\t${h.content}` ));
//$('div.material-switch.label').css('input[type="checkbox"]','checked + label::before { background: inherit;opacity: 0.5;}');
			}

			$('body').toggleClass('themePink');
			$('.headerOne').toggleClass('pinkHeaderOne');
			$('.headerTwo').toggleClass('pinkHeaderTwo');
			if($(".headerOneOrig").length !=0){
				$('.headerOne').removeClass('headerOneOrig');
				$('.headerTwo').removeClass('headerTwoOrig');
			}
			else {											//if($(".themeDark").length == 0) {
				  $('.headerOne').addClass('headerOneOrig');
				  $('.headerTwo').addClass('headerTwoOrig');
			}
		});

		$('#SwitchOptionDark').on('click',function(){

			$('body').toggleClass('themeDark');
			$('.headerOne').toggleClass('darkHeaderOne');
			$('.headerTwo').toggleClass('darkHeaderTwo');
			if($(".headerOneOrig").length !=0){
				$('.headerOne').removeClass('headerOneOrig');
				$('.headerTwo').removeClass('headerTwoOrig');
			}
			else {											//if($(".themeDark").length == 0) {
				  $('.headerOne').addClass('headerOneOrig');
				  $('.headerTwo').addClass('headerTwoOrig');
			}
		});*/

		/*$('#').on('click',function(id){

			if(($(".headerOne").css('font-size')) == '32px'){
				$('.headerOne').css('font-size','20px');
				$('.headerTwo').css("font-size","18px");
			}
			else {											//if($(".themeDark").length == 0) {
				 $('.headerOne').css("font-size","32px");
				 $('.headerTwo').css("font-size","28px");
			}
		});*/

		$('.switchText').on('click',function(id){

			$(this).toggleClass('textActive');
			$('.headerOne').toggleClass('headerOneOrig');
			$('.headerTwo').toggleClass('headerTwoOrig');
			$('.headerOne').toggleClass(`${$(this).attr('id')}HeaderOne`);//'SwitchBoldTextHeaderOne'
			$('.headerTwo').toggleClass(`${$(this).attr('id')}HeaderTwo`);//'SwitchBoldTextHeaderTwo'
			if($(".themeActive").length !=0){
				$('.headerOne').removeClass('headerOneOrig');
				$('.headerTwo').removeClass('headerTwoOrig');
			}
			if($(".themeActive").length ==0){
				$('.headerOne').toggleClass('ThemeActiveNotExist');
			}

			/*if(($(".headerOne").css('font-size')) == '32px'){
				$('.headerOne').removeClass('boldtext');
				$('.headerOne').addClass('headerOneOrig'); //css({'font-size':'20px','font-weight': 'normal'});
				$('.headerTwo').addClass('headerTwoOrig');//css({'font-size':'18px','font-weight': 'normal'});
			}
			else {											//if($(".themeDark").length == 0) {
				 $('.headerOne').addClass('boldtext ');//css({'font-size':'32px','font-weight': 'bold'});
				 $('.headerTwo').addClass('boldtext ');//css({'font-size':'28px','font-weight': 'bold'});
			}*/
		});

		/*$('#SwitchSmallText').on('click',function(id){

			if(($(".headerOne").css('font-size')) == '14px'){
				$('.headerOne').css('font-size','20px');
				$('.headerTwo').css("font-size","18px");
			}
			else {											//if($(".themeDark").length == 0) {
				 $('.headerOne').css("font-size","14px");
				 $('.headerTwo').css("font-size","12px");
			}
		});
*/
		if($(".themeDark").length == 0) {
				  $('.headerOne').addClass('headerOneOrig');
				  $('.headerTwo').addClass('headerTwoOrig');
			}


});