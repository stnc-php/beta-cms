$('').bind('ajaxError', function(a, b, c){
    alert('Sanırım Beklenmeyen bir sorun oluştu ');
});

/*jquery.quicksearch*/
jQuery(function($){$.fn.quicksearch=function(target,opt){var timeout,cache,rowcache,jq_results,val='',e=this,options=$.extend({delay:100,selector:null,stripeRows:null,loader:null,noResults:'',bind:'keyup',onBefore:function(){return;},onAfter:function(){return;},show:function(){this.style.display="";},hide:function(){this.style.display="none";}},opt);this.go=function(){var i=0,noresults=true,vals=val.toLowerCase().split(' ');var rowcache_length=rowcache.length;for(var i=0;i<rowcache_length;i++){if(this.test(vals,cache[i])||val==""){options.show.apply(rowcache[i]);noresults=false;}else{options.hide.apply(rowcache[i]);}}if(noresults){this.results(false);}else{this.results(true);this.stripe();}this.loader(false);options.onAfter();return this;};this.stripe=function(){if(typeof options.stripeRows==="object"&&options.stripeRows!==null){var joined=options.stripeRows.join(' ');var stripeRows_length=options.stripeRows.length;jq_results.not(':hidden').each(function(i){$(this).removeClass(joined).addClass(options.stripeRows[i%stripeRows_length]);});}return this;};this.strip_html=function(input){var output=input.replace(new RegExp('<[^<]+\>','g'),"");output=$.trim(output.toLowerCase());return output;};this.results=function(bool){if(typeof options.noResults==="string"&&options.noResults!==""){if(bool){$(options.noResults).hide();}else{$(options.noResults).show();}}return this;};this.loader=function(bool){if(typeof options.loader==="string"&&options.loader!==""){(bool)?$(options.loader).show():$(options.loader).hide();}return this;};this.test=function(vals,t){for(var i=0;i<vals.length;i+=1){if(t.indexOf(vals[i])===-1){return false;}}return true;};this.cache=function(){jq_results=$(target);if(typeof options.noResults==="string"&&options.noResults!==""){jq_results=jq_results.not(options.noResults);}var t=(typeof options.selector==="string")?jq_results.find(options.selector):$(target).not(options.noResults);cache=t.map(function(){return e.strip_html(this.innerHTML);});rowcache=jq_results.map(function(){return this;});return this.go();};this.trigger=function(){this.loader(true);options.onBefore();window.clearTimeout(timeout);timeout=window.setTimeout(function(){e.go();},options.delay);return this;};this.cache();this.results(true);this.stripe();this.loader(false);return this.each(function(){$(this).bind(options.bind,function(){val=$(this).val();e.trigger();});});};});






function showResultPage(value){

  var obj = JSON.parse(value);
  result=  obj.post[0].result;
  return__=obj.post[0].report;

  //alert ( return__);
  if (result=="ok"){
  
  $.post('ajax/page_picture_insert.php', {name: return__  } ,
           function(insert_data) { 
		//  alert ( insert_data); 
	     var insert_obj = JSON.parse(insert_data);
  result_insert=  insert_obj.post[0].result;
  return_insert=insert_obj.post[0].report;
  
 // ajax/page_picture_rotate.php
		 if (result_insert=="ok"){
					var insert_id=return_insert;
				//alert (insert_id);
				$("#msg_box_warning").hide();
				 $('<li id="lipic'+insert_id+'"></li>').appendTo('#add_picture').html(
  '</div>    <a href="javascript:void(0);" onclick="tb_show(\'Resim Önizleme\',\'inc/page_picture_previews.php?id='+insert_id+'&TB_iframe=true&height=400&width=500\')">   <img id="imgid'+insert_id+'" height="90" class="upoad-pictures" src="../resimler/'+return__+'"  />  </a> <div class="degis"><a href="javascript:void(0);" onclick="picture_rotate ('+insert_id+',\''+return__+'\',\'ajax/page_picture_rotate.php\');"><img  src="images/picture-icon-set/left.png" /></a> <a href="javascript:void(0);" onclick="picture_rotate('+insert_id+',\''+return__+'\',\'ajax/page_picture_rotate.php\');"><img  src="images/picture-icon-set/right.png" /></a> <a href="javascript:void(0);" onclick="picture_delete('+insert_id+',\'ajax/page_picture_delete.php\')">  <img src="images/picture-icon-set/delete.png" /></a>     <a href="javascript:void(0);" onclick="tb_show(\'Resim Düzenle\',\'inc/page_picture_update.php?id='+insert_id+'&TB_iframe=true&height=400&width=500\')"> <img  src="images/picture-icon-set/edit.png" /></a>').addClass('success');
			} 
			if (result_insert=="error"){ 	
				$("#msg_box_ok").hide(); 
			$("#msg_box_warning").show(); 
			$("#msg_box_typewarning").html("Hata: " +return_insert); 
 $.msgbox("Hata: " +return_insert , {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
			}
});
  }
  if (result=="error")
  //$("#error_t").html("Hata: " +return__);
  
  	$("#msg_box_ok").hide(); 
			$("#msg_box_warning").show(); 
			$("#msg_box_typewarning").html("Hata: " +return__); 
  }
  




function picture_rotate(id,picture,page){
	   // $('#ekleniyor').html('<center><img src="../../images/loadingAnimation.gif"></center>');
    $.ajax({
        type: "POST",
        url: page,
		  data: "id=" + encodeURIComponent(id),
		cache: false,
        success: function(msg){  	
	  var obj = JSON.parse(msg);
  result1=  obj.post[0].result;
  return1=obj.post[0].report;	
   $('#add_picture li#lipic'+id ).addClass('loading');
    if (result1=='ok')   {
//$('#add_picture li#'+id+' #imgid'+id ).remove();
	 $('#add_picture li#lipic'+id ).removeClass('loading');
$('#add_picture #imgid'+id ).attr('src','../resimler/bg_pictures/'+return1 );
// alert (return__);

 /* $('#add_picture li#'+id).remove();
 $('<li id="'+id+'"></li>').appendTo('#add_picture').html(
  '  </div><img id="imgid'+id+'" width="150" height="150" src="uploads/'+return1+'"  /><div class="degis"><a href="javascript:void(0);" onclick="degistir ('+id+',\''+return1+'\');"><img  src="sag.jpg" /></a>').addClass('success'); */
}
else {
	$("#msg_box_warning").hide();
$("#msg_box_warning").show();
  $("#msg_box_typewarning").html("Hata oluştu " );
}}})
;}






function picture_delete(id,page){
    $.ajax({
        type: "POST",
        url: page,
		  data: "id=" + encodeURIComponent(id),
		cache: false,
        success: function(msg){  	
//silinde fadeout gelsin uyarı sonra classı sil 
   $('#add_picture li#'+id ).addClass('loading');
    if (msg=='ok')   {
	 $('#add_picture li#lipic'+id ).removeClass('loading');
$('#add_picture li#lipic'+id  ).remove();
}
else {
	$("#msg_box_warning").hide();
$("#msg_box_warning").show();
  $("#msg_box_typewarning").html("Hata oluştu " );
}}})
;}


function bos_data_cek(page){
    $.ajax({
        type: "POST",
        url: page,
		cache: false,
             success: function(msg){  	
	  var obj = JSON.parse(msg);
  total_host=  obj.post[0].total_host;
   pluspercent=  obj.post[0].pluspercent;
  return1=obj.post[0].result;	

  
   //$('#add_picture li#'+id ).addClass('loading');
   if (return1=='ok')   {
   
 $("#progress1 span b").html(pluspercent );
		 $("#progress1 span").css({"width": pluspercent});
		  $("#total_host").html(total_host );
		 
}
else {
alert ('Hesaplama Hatası');  
}}})
;}





function edit(sayfa,form_eleman,messaga){
    var form = jQuery(form_eleman);
    sc = form.formSerialize();
    $.ajax({
        type: "POST",
        url: "ajax/" + sayfa,
        data: sc,
		cache: false,
        success: function(msg){  
    if (msg=='ok')   {

$("#msg_box_warning").hide("fast");
$("#msg_box_ok").show("fast");
$("#msg_box_typeok").html(messaga);
$.msgbox(messaga, { buttons : [ {type: 'submit', value: 'Tamam'} ]});
}
else {
$("#msg_box_ok").hide("fast");
$("#msg_box_warning").show("fast");
$("#msg_box_typewarning").html(msg);
$.msgbox(msg, {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );

}}});}




function save(sayfa,form_eleman,messaga){
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
$("#msg_box_typeok").html(messaga);
	$.msgbox(messaga, { buttons : [ {type: 'submit', value: 'Tamam'} ]});
}
else {
$("#msg_box_ok").hide("fast");
$("#msg_box_warning").show("fast");
$("#msg_box_typewarning").html(msg);
 $.msgbox(msg, {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
}}})


;}





	
function Delete(no, sayfa,mesaj){


$.msgbox("Bu bilgiyi silmek istiyormusunuz ?", {
  type: "confirm",
  buttons : [
    {type: "submit", value: "Evet"},
    {type: "submit", value: "Hayır"},
    {type: "cancel", value: "İptal"}
  ]
},

 function(result) {
  if (result=='Evet'){
  $.ajax({
            type: "POST",
            url: 'ajax/'+sayfa,
            data: "id=" + encodeURIComponent(no),
            success: function(cevap){
                if (cevap === 'ok') {
                   // $('tr#tr_id' + no).hide('fast');  
                   // $('tr#tr_id' + no).slideUp('slow');
					  $('tr#tr_id' + no).remove();

			    $("#msg_box_warning").hide("fast");
			    $("#msg_box_ok").hide("fast");
				$("#msg_box_ok").show("fast");
                $("#msg_box_typeok").html(mesaj+' başarı ile silindi!'); 
			
				
				$.msgbox(mesaj+' başarı ile silindi!', 
                      { buttons : [ {type: 'submit', value: 'Tamam'} ]});
  
 

			setTimeout(function(){
				  $("#msg_box_ok").fadeOut("slow", function () {
				  $("#msg_box_ok").hide("fast");
					  });   
				}, 5000); 

			
                }
                else {
                $("#msg_box_warning").hide("fast");
				$("#msg_box_warning").show("fast");
				$("#msg_box_ok").hide("fast"); 
				$("#msg_box_typewarning").html('Bir sorun oluştu!');
				 $.msgbox('Bir sorun oluştu!', {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
				
				 setTimeout(function(){
				  $("#msg_box_warning").fadeOut("slow", function () {
				  $("#msg_box_warning").hide("fast");
					  });   
				}, 5000); 
				
                }  }
        });     
  }
}
 
);
}



		
		function ext_status(no,sayfa,mesaj){
var status = $('#alink_statusL_' + no).attr("alt");

//alert (status );
        $.ajax({
            type: "POST",
            url: 'ajax/'+sayfa,
            data: "id=" + encodeURIComponent(no)+"&status="+status,
            success: function(cevap){
                if (cevap === 'ok') {
				if (status == 0) {
		
				$('#alink_statusL_'+ no).removeClass();
				$('#alink_statusL_'+ no).addClass("notpublish");
			    $('#alink_statusL_' + no).attr( 'alt', "1");
				$('#alink_statusL_' + no).attr('title'  ,mesaj+' sitede yayınla');
				
				$.msgbox(mesaj+' yayından kaldırıldı!', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	

				
                }
				else if  (status == 1){
				$('#alink_statusL_'+ no).removeClass();
				$('#alink_statusL_'+ no).addClass("publish");
				$('#alink_statusL_' + no).attr( 'alt', "0");
				$('#alink_statusL_' + no).attr('title',mesaj+' siteden kaldır');
			
					$.msgbox(mesaj+' yayınlandı', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	
			  
				}}
                else {
				
				$.msgbox('Bir sorun oluştu!', { buttons : [ {type: 'submit', value: 'Tamam'} ]});	
                }  }
        });    } 



	
function Ext_Delete(no, sayfa,mesaj){


$.msgbox("Bu Eklentiyi Silmek İstiyormusunuz ?", {
  type: "confirm",
  buttons : [
    {type: "submit", value: "Evet"},
    {type: "submit", value: "Hayır"},
    {type: "cancel", value: "İptal"}
  ]
},

 function(result) {
  if (result=='Evet'){
  $.ajax({
            type: "POST",
            url: 'ajax/'+sayfa,
            data: "id=" + encodeURIComponent(no),
            success: function(cevap){
                if (cevap === 'ok') {
                   	$('li#listleftli_' + no).hide('fast');  
                    $('li#listleftli_' + no).slideUp('slow');
		$('#alink_statusL_'+ no).removeClass();
				$('#alink_statusL_'+ no).addClass("notpublish");
			    $('#alink_statusL_' + no).attr( 'alt', "1");
				  $('li#listleftli_' + no).attr( 'alt', "0");
				$.msgbox(mesaj+' başarı ile silindi!', 
                      { buttons : [ {type: 'submit', value: 'Tamam'} ]});
 
			
                }
                else {

				 $.msgbox('Bir sorun oluştu!', {type: "error"}, { buttons : [ {type: 'submit', value: 'Tamam'} ]} );
				
			
				
                }  }
        });     
  }
}
 
);
}