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
      <th id = "monthSelection" colspan="5" month ="`
      if(nowMonth<9){table+=0;}
      table+= nowMonth+1;
      table+=`" year="`;
      table+= nowYear;
      table+=`">`;
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
			 lalalal();
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
			 lalalal();
	}
    createCalendar(calendar_table,nowYear, nowMonth);
	//backButton.addEventListener("click", backButtonClick);
	//console.log(monthSelection);
let CalendarNotes = [];
		function userNote(username, dateAdd, noteText, startTime, completionTime){
			this.username = username;
			this.dateAdd = dateAdd;
			this.noteText = noteText;
			this.startTime = startTime;
			this.completionTime = completionTime;
		}

	function lalalal(){
$(function(){
		/*let CalendarNotes = [];
		function userNote(username, dateAdd, noteText, startTime, completionTime){
			this.username = username;
			this.dateAdd = dateAdd;
			this.noteText = noteText;
			this.startTime = startTime;
			this.completionTime = completionTime;
		}*/
		if( $(CalendarNotes).length == 0){
		$('#state_of_notes').html( 'нет заметок');
		}

		$("#removeNotes").hide();
		$(".notes_window").hide();
		$('#calendar_notepad').hide();
		$('#notepadToDelete').hide();



	$('th, td').on('mouseenter',function (){
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



		$('td').on('click', function(){
			$(".notes_window").show();
			let today =$(this).children().html();
			if( today <10){today="0"+today;}

		//	console.log($(this).children().html());
			$("#selected_day").html(today+"."+$('#monthSelection').attr('month')+"."+$('#monthSelection').attr('year'));

			if($('#state_of_notes').html()!="нет заметок"){
				$('#state_of_notes').html("");
			}

			$.each(CalendarNotes,function(index,element){
				let dateAddThisNote;
				$.each(this,function(key,value){

					if(key=='dateAdd'){
						dateAddThisNote = value;
					}

						if(key=='startTime'){

						let noteTextValue =  element.noteText.value;
						console.log(noteTextValue);
						console.log(dateAddThisNote);

						let date1=element.startTime.value;
						if(this.value ==""){
								date1=(dateAddThisNote);
								date1=dateCorrection(date1);
						}

						let date2=element.completionTime.value;
						if(element.completionTime.value==""){
								date2=(dateAddThisNote);
								date2=dateCorrection(date2);
						}
						function dateCorrection(time){
							let arrDate =time.split(".");
							let result = arrDate[2]+"."+ ((arrDate[1]))+"."+ arrDate[0];
							return result;
						}

						let daysLong = Math.ceil((Date.parse(date2) - Date.parse(date1)) / (1000 * 3600 * 24));
						if(daysLong<0){
							let date3=date1;
							date1=date2;
							date2=date3;
							if (((new Date(date2)).getHours())!=((new Date(date1)).getHours())){
								date2=(new Date(date2)).getTime()+((new Date(date1)).getHours()*3600000);
							}
						}

						let dateStart = new Date(date1);
						console.log(dateStart);
						let dateEnd =new Date(date2);//гдет пребавляютс 3 часа...я хз где..но эт фикс обратного отсчета
						console.log(dateEnd);
						let arrayInterval = [];

						function pad(s){ return ('00' + s).slice(-2)}

						while( dateStart.getTime() <= dateEnd.getTime()) {
									  arrayInterval.push( '' + pad(dateStart.getDate()) +'.'+  pad(dateStart.getMonth()+1) +'.'+ dateStart.getFullYear() );
									  dateStart.setDate(dateStart.getDate()+1);
						}
						console.log(arrayInterval);
						$.each(arrayInterval,function(index,element){
							if(element == $('#selected_day').html()){
								if($('#state_of_notes').html()=="нет заметок"){
									$('#state_of_notes').html(noteTextValue+"<br>");
									//console.log(element.noteText.value);
									$('#state_of_notes').css( {'overflow':'auto','height':'60px','padding':'10px'});
								}
								else{
									$('#state_of_notes').append( noteTextValue+"<br>");
								}
							}
						});
					}
				});
			});


			if($('#state_of_notes').html()==""){
				$('#state_of_notes').html("нет заметок");
				$('#removeNotes').hide();
				$('#state_of_notes').css( {'height':'','padding':''});
			}

			if( ($(this).attr("class")) == "active_notes_window"){
				$(".notes_window").hide();
			}

			$(this).toggleClass('active_notes_window');

			if ($('#state_of_notes').html()!="нет заметок"){
				$('#removeNotes').show();
			}

		});



});

}
lalalal();


$(function(){

			$('#add_notes').on('click',function(){
			$('#calendar_table, .notes_window, .nav').hide();
			$('#calendar_notepad').show();
			$('td').removeClass('active_notes_window');
		});


		$('form').submit(function() {
			//console.log($(this).serializeArray());
			if($(this).serializeArray()[0].value===""){alert("Пожалуйста,заполните поле ввода заметки.");
				$('#add_notes').trigger('click');}
			else{console.log($('#selected_day').html())
			CalendarNotes.push(new userNote("John",$('#selected_day').html(),$(this).serializeArray()[0],$(this).serializeArray()[1],$(this).serializeArray()[2]));
			console.log(CalendarNotes[1]);
			console.log($(this).serializeArray()[1]);
			$('#calendar_note_text').val('');
			$("[name='startTime']").val('');
			$("[name='completionTime']").val('');
			console.log($(CalendarNotes[1]));}
			return false;
		});

		$("#saving_notes").on("click", function(){
			$('#calendar_table, .nav').show();//.notes_window,
			$('#calendar_notepad').hide();
		});

					//`${$(this).attr('id')}HeaderOne`  ?
				/*	imageValues[0] = {
			    name: "LEGITIM",
			    link: "http://fozzyshop.com.ua/72653-thickbox_default/voda-mineralnaya-borjomi-evro-steklo.jpg",
			    rate: "5",
			    price:  "5$"
			}*/

		$('#removeNotes').on('click',function(){
			$('#calendar_table, .notes_window, .nav').hide();
			$('#notepadToDelete').show();
			$.each(CalendarNotes,function (index,element){
				$.each(this,function(key,value){
					if(key =='dateAdd'){
						if(value == $('#selected_day').html()){
							$('#objectsToDelit').append( "<div class='js-notes-for-delite'>"+value+"<div class='js-notes-text'>"+ element.noteText.value+"</div>"+'<button class="removeThisNote" direction="'+index+'"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>'+"</div>");

						}
					}
				});

			});
			$('.removeThisNote').on('click',function(){
			//console.log($(this).attr('direction'));
			//console.log(CalendarNotes[$(this).attr('direction')]);
			CalendarNotes.splice([$(this).attr('direction')],1);
			$('#objectsToDelit').html("");
			$('#removeNotes').click();
			//console.log($(CalendarNotes));
			});
		});

		$('#buttonForCloseNotepadToDelite').on('click',function(){
			$('#objectsToDelit').html("");
			$('#calendar_table, .nav').show();//.notes_window,
			$('#notepadToDelete').hide();
			$('td').removeClass('active_notes_window');
		});
	/*	$('#monthSelection').on('click',function(){
			$('#submenuMonth').slideToggle(500);
		}); */
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
					$(this).parent().remove();
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


		});
		if($(".themeDark").length == 0) {
				  $('.headerOne').addClass('headerOneOrig');
				  $('.headerTwo').addClass('headerTwoOrig');
			}
	});