


		
function sektorler(){
		var selected = $("#sector_cat option:selected");		
		var id = "";
		if(selected.val() != 0){
			id =  selected.val();
		$.ajax({
type: 'GET',
 url:'ajax/alt_sektorler.php',
 data: 'id='+id+'&func=taking',
success: function(sonuc) {
$('#sectors').html(sonuc);
}});
}}


function iller(){
		var selected = $("#iller option:selected");		
		var id = "";
		if(selected.val() != 0){
			id =  selected.val();
		$.ajax({
type: 'GET',
 url:'ajax/ilceler_getir.php',
 data: 'id='+id+'&func=taking',
success: function(sonuc) {
$('#ilceler').html(sonuc);
}});
}}
function pass(){

    $.ajax({
        type: "POST",
        url: "ajax/pass.php",
       
		cache: false,
        success: function(msg){  
$("#password").val(msg);
}});}


$(document).ready(function(){


 
 //değişiklik olayları 
		$("#sector_cat").change(sektorler);
	    $("#iller").change(iller);
 
// table sorhter için 

         // $("#sayfalar").tablesorter(); $("#galeriler").tablesorter();
		  
		  




$("#gel_mail").change(function() {
var mail_deger= $('#gel_mail').attr("alt");
var id= $('#gel_mail').attr("title");
if (mail_deger==0){

$.ajax({
type: 'GET',
 url:'ajax/mesaj_gelsin.php',
 data: 'id='+id,
success: function(sonuc) {
$('#mesaj_gelsin').show("fast");
$('#mesaj_gelsin').html(sonuc);
//$.msgbox(sonuc, { buttons : [ {type: 'submit', value: 'Tamam'} ]});

}
});


$('#gel_mail').attr( 'alt', "1");
} else {
$.ajax({
type: 'GET',
 url:'ajax/mesaj_gelsin.php',
 data: 'id='+id,
success: function(sonuc) {
$('#mesaj_gelsin').show("fast");
$('#mesaj_gelsin').html(sonuc);
//$.msgbox(sonuc, { buttons : [ {type: 'submit', value: 'Tamam'} ]});

}
});
$('#gel_mail').attr( 'alt', "0");
$('#mesaj_gelsin').hide("fast");;
} 
}
);



	
	
	
	
		//devamını gör olayı içindir 
		$("span.devam").hide();//http://www.gelengeliyo.com/jquery_ornekler/jquery_yazinin_tamamini_goruntule/
	  	 $('&nbsp;<a style="color:blue" class="reveal">Devamini Goster &gt;&gt;</a> ').insertBefore('.devam');
		$("a.reveal").click(function(){
			$(this).parents("p").children("span.devam").fadeIn(1500);
			$(this).parents("p").children("a.reveal").fadeOut(600);
		});//devamını gör olayı içindir son
	
	
	}); 
  

 



function sil(no, sayfa,mesaj){


$.msgbox("Bu bilgiyi silmek istiyormusunuz ?", {
  type: "confirm",
  buttons : [
    {type: "submit", value: "Evet"},
    {type: "submit", value: "Hayır"},
    {type: "cancel", value: "İptal"}
  ]
},

 function(result) {
  //$("#result2").text(result);
  if (result=='Evet'){
  $.ajax({
            type: "POST",
            url: 'ajax/'+sayfa,
            data: "id=" + encodeURIComponent(no),
            success: function(cevap){
                if (cevap === 'ok') {
                   // $('tr#tr_id' + no).hide('fast');  
                   // $('tr#tr_id' + no).slideUp('slow');
					  $('#tr_id' + no).remove();

			    $("#msg_box_warning").hide("fast");
			    $("#msg_box_ok").hide("fast");
				$("#msg_box_ok").show("fast");
                $("#msg_box_owrite").html(mesaj+' başarı ile silindi!'); 
			
				
				$.msgbox(mesaj+' başarı ile silindi!', 
                      { buttons : [ {type: 'submit', value: 'Tamam'} ]});
  
 

				setTimeout(function(){
				  $("#msg_box_ok").fadeOut("slow", function () {
				  $("#msg_box_ok").hide("fast");
					  });   
				}, 3000); 
			
			
			
			
                }
                else {
                $("#msg_box_warning").hide("fast");
				$("#msg_box_warning").show("fast");
				$("#msg_box_ok").hide("fast"); 
				$("#msg_box_wwrite").html('Bir sorun oluştu!');
				 $.msgbox('Bir sorun oluştu!', {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
				
				 setTimeout(function(){
				  $("#msg_box_warning").fadeOut("slow", function () {
				  $("#msg_box_warning").hide("fast");
					  });   
				}, 3000); 
				
                }  }
        });     
  }
}
 
);
}




        
		
		
		 




function gos_durumu(no,sayfa,mesaj){
var durum = $('#yedek_' + no).attr("alt");

//alert (durum );
        $.ajax({
            type: "POST",
            url: 'ajax/'+sayfa,
            data: "id=" + encodeURIComponent(no)+"&durum="+durum,
            success: function(cevap){
                if (cevap === 'ok') {
				if (durum == 0) {
		
				$('#durum'+ no).removeClass();
				$('#durum'+ no).addClass("action6");
			    $('#yedek_' + no).attr( 'alt', "1");
				$('#durum' + no).attr('title'  ,mesaj+' sitede yayınla');
				$("#msg_box_warning").hide("fast");
			    $("#msg_box_ok").hide("fast");
				$("#msg_box_ok").show("fast");
                $("#msg_box_owrite").html( mesaj+' yayından kaldırıldı!'); 
				$.msgbox(mesaj+' yayından kaldırıldı!', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	
				   setTimeout(function(){
				  $("#msg_box_ok").fadeOut("slow", function () {
				  $("#msg_box_ok").hide("fast");
					  });   
				}, 5000);

				$('#s_durum'+ no).removeClass();
				$('#s_durum'+ no).addClass("pending");
				$('#s_durum'+ no).html('Onay Bekliyor');
				
                }
				else if  (durum == 1){
				$('#durum'+ no).removeClass();
				$('#durum'+ no).addClass("action5");
				$('#yedek_' + no).attr( 'alt', "0");
				$('#durum' + no).attr('title',mesaj+' siteden kaldır');
				//$('#durum_' + no).attr('src',images_yol+'/icon_accept.gif');
             //   $('#sonuc').slideToggle(500);
				$("#msg_box_warning").hide("fast");
				$("#msg_box_ok").hide("fast");
				$("#msg_box_ok").show("fast");
				$("#msg_box_owrite").html(mesaj+' yayınlandı!');
				$.msgbox(mesaj+' yayınlandı!', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	
							   setTimeout(function(){
				  $("#msg_box_ok").fadeOut("slow", function () {
				  $("#msg_box_ok").hide("slow");
					  });   
				}, 5000);
				
					$('#s_durum'+ no).removeClass();
				$('#s_durum'+ no).addClass("approved");
				$('#s_durum'+ no).html('Yayinda');
			  
				}}
                else {
				$("#msg_box_ok").hide("fast");
				$("#msg_box_warning").hide("fast");
				$("#msg_box_warning").show("fast");
				 
				$("#msg_box_wwrite").html('Bir sorun oluştu!');
				$.msgbox('Bir sorun oluştu!', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	
                }  }
        });     } 

function mail_durumu(no,sayfa){
var durum = $('#yedek_' + no).attr("alt");

//alert (durum );
        $.ajax({
            type: "POST",
            url: 'ajax/'+sayfa,
            data: "id=" + encodeURIComponent(no)+"&durum="+durum,
            success: function(cevap){
                if (cevap === 'ok') {
				if (durum == 0) {
		
			$('#tr_id'+ no).addClass("third");
					$('#durum'+ no).removeClass();
				$('#durum'+ no).addClass("action6");
				
								var toplami = $("#toplam_mail_span").text();
				
				toplam = parseInt(toplami) + parseInt(1);
				$("#toplam_mail_span").empty();
				
                $("#toplam_mail_span").html(toplam );

			    $('#yedek_' + no).attr( 'alt', "1");
				$('#durum' + no).attr('title'  ,' Okundu İşaretle');
				$("#msg_box_warning").hide("fast");
			    $("#msg_box_ok").hide("fast");
				$("#msg_box_ok").show("fast");
                $("#msg_box_owrite").html( 'Bu Mail Okunmadı Olarak Kaydedildi'); 
				$.msgbox('Bu Mail Okunmadı Olarak Kaydedildi', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	
				
				   setTimeout(function(){
				  $("#msg_box_ok").fadeOut("slow", function () {
				  $("#msg_box_ok").hide("fast");
					  });   
				}, 5000);

				$('#s_durum'+ no).removeClass();
				$('#s_durum'+ no).addClass("pending");
				$('#s_durum'+ no).html('Onay Bekliyor');
				
                }
				else if  (durum == 1){
				var toplami = $("#toplam_mail_span").text();
				
				$("#toplam_mail_span").empty();
					toplam = parseInt(toplami) - parseInt(1);
                $("#toplam_mail_span").html(toplam);
				
					$('#tr_id'+ no).removeClass();
				$('#durum'+ no).removeClass();
				$('#durum'+ no).addClass("action5");
				$('#yedek_' + no).attr( 'alt', "0");
				$('#durum' + no).attr('title',' Okunmadı İşaretle');
				//$('#durum_' + no).attr('src',images_yol+'/icon_accept.gif');
             //   $('#sonuc').slideToggle(500);
				$("#msg_box_warning").hide("fast");
				$("#msg_box_ok").hide("fast");
				$("#msg_box_ok").show("fast");
				$("#msg_box_owrite").html('Bu Mail Okundu Olarak Kaydedildi');
				$.msgbox('Bu Mail Okundu Olarak Kaydedildi', { buttons : [ {type: 'submit', value: 'Tamam'} ]});
							   setTimeout(function(){
				  $("#msg_box_ok").fadeOut("slow", function () {
				  $("#msg_box_ok").hide("slow");
					  });   
				}, 5000);
				
					$('#s_durum'+ no).removeClass();
				$('#s_durum'+ no).addClass("approved");
				$('#s_durum'+ no).html('Yayinda');
			  
				}}
                else {
				$("#msg_box_ok").hide("fast");
				$("#msg_box_warning").hide("fast");
				$("#msg_box_warning").show("fast");
				 
				$("#msg_box_wwrite").html('Bir sorun oluştu!');
				 $.msgbox('Bir sorun oluştu!', {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
                }  }
        });     } 


function ekle(sayfa,form_eleman,messaga){
    var form = jQuery(form_eleman);
    sc = form.formSerialize();
	   // $('#ekleniyor').html('<center><img src="../../images/loadingAnimation.gif"></center>');
    $.ajax({
        type: "POST",
        url: "ajax/" + sayfa,
        data: sc,
		cache: false,
        success: function(msg){  
    if (msg=='ok')   {
	
jQuery(form_eleman).resetForm();   
$("#msg_box_warning").hide("fast");
$("#msg_box_ok").show("fast");
$("#msg_box_owrite").html(messaga);
	$.msgbox(messaga, { buttons : [ {type: 'submit', value: 'Tamam'} ]});
}
else {
$("#msg_box_ok").hide("fast");
$("#msg_box_warning").show("fast");
$("#msg_box_wwrite").html(msg);
 $.msgbox(msg, {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
}}})


;}

function ekle_upload(sayfa,form_eleman,messaga){
    var form = jQuery(form_eleman);
    sc = form.formSerialize();
	   // $('#ekleniyor').html('<center><img src="../../images/loadingAnimation.gif"></center>');
    $.ajax({
        type: "POST",
        url: "ajax/" + sayfa,
        data: sc,
		cache: false,
        success: function(msg){  
    if (msg=='ok')   {
	$('#custom_file_upload').uploadifyUpload();
jQuery(form_eleman).resetForm();   
$("#msg_box_warning").hide("fast");
$("#msg_box_ok").show("fast");
$("#msg_box_owrite").html(messaga);
	$.msgbox(messaga, { buttons : [ {type: 'submit', value: 'Tamam'} ]});
}
else {
$("#msg_box_ok").hide("fast");
$("#msg_box_warning").show("fast");
$("#msg_box_wwrite").html(msg);
 $.msgbox(msg, {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
}}})


;}



function sure_bul(form_eleman){
    var form = jQuery(form_eleman);
	var sayfa='sure_bul.php';
    sc = form.formSerialize();
	 var country_name = "";
          $("#country_id option:selected").each(function () { country_name += $(this).text() ;  });
		  
  	 var airports_name = "";
          $("#airports_id option:selected").each(function () { airports_name += $(this).text() ;  });

    $.ajax({
        type: "POST",
        url: "ajax/" + sayfa,
        data: sc+'&country_name='+country_name+'&airports_name='+airports_name,
		cache: false,
        success: function(msg){  
$("#time_").val(msg);
}});}

function km_bul(form_eleman){
    var form = jQuery(form_eleman);
	var sayfa='km_bul.php';
    sc = form.formSerialize();
	 var country_name = "";
          $("#country_id option:selected").each(function () { country_name += $(this).text() ;  });
		  
  	 var airports_name = "";
          $("#airports_id option:selected").each(function () { airports_name += $(this).text() ;  });

    $.ajax({
        type: "POST",
        url: "ajax/" + sayfa,
        data: sc+'&country_name='+country_name+'&airports_name='+airports_name,
		cache: false,
        success: function(msg){  
$("#km").val(msg);
}});}


function duzenle(sayfa,form_eleman,messaga){
    var form = jQuery(form_eleman);
    sc = form.formSerialize();
	   // $('#ekleniyor').html('<center><img src="../../images/loadingAnimation.gif"></center>');
    $.ajax({
        type: "POST",
        url: "ajax/" + sayfa,
        data: sc,
		cache: false,
        success: function(msg){  
    if (msg=='ok')   {

$("#msg_box_warning").hide("fast");
$("#msg_box_ok").show("fast");
$("#msg_box_owrite").html(messaga);
$.msgbox(messaga, { buttons : [ {type: 'submit', value: 'Tamam'} ]});
}
else {
$("#msg_box_ok").hide("fast");
$("#msg_box_warning").show("fast");
$("#msg_box_wwrite").html(msg);
$.msgbox(msg, {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );

}}});}





