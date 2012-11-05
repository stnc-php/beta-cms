<?php include('header.php'); ?>
<?php $this->load->helper('datetime'); ?>

<script src="<?php echo base_url();?>js/jquery.tablesorter.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url();?>js/jquery.msgbox.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>css/jquery.msgbox.css" />


<link href="<?php echo base_url();?>css/extension.css" rel="stylesheet"  type="text/css" media="screen" />


	
<script>

function show_confirm()
{
var r=confirm("Silmek istediğinize emin misiniz?");

if (r==false)
  {
   return false;
  }


}


$(function(){





	
	
	// add multiple select / deselect functionality
	$("#selectall_input").click(function () {
		  $('.input_check').attr('checked', this.checked);
	});

	// if all checkbox are selected, check the selectall checkbox
	// and viceversa
	$(".input_check").click(function(){

		if($(".input_check").length == $(".input_check:checked").length) {
			$("#selectall_input").attr("checked", "checked");
		} else {
			$("#selectall_input").removeAttr("checked");
		}

	});
});


		
		
		
		
	

</script>

<div class="block-1">
    <div class="page-title block-1 gradient-box-light">
        <span><img src="images/dashboard/web_page.png" alt="sayfalar" /></span>
      <h4><span class="page-name">Sayfalar</span></h4>
        
        
        <div class="combine-menu">
            <ul>
                <li><a class="first a-link-blue" href="<?php echo base_url();?>admin/dashboard"><span class="next-ico"></span>Anasayfa</a></li>
                <li><a class="middle a-link-blue" href="<?php echo base_url();?>admin/add_page"><span class="add-ico"></span>Yeni sayfa ekle</a></li>
      
                <li><a class="last a-link-blue" href="#">Web Sitenize Gidin<span class="prev-ico"></span></a></li>
            </ul>
        </div>    
</div><!--block-1-->


      
<div class="settings block-1 gradient-box-light">
    <div class="combine-menu">
        <ul>
            <li><a class="first a-link-gray" href="#">Tüm sayfalar <span class="count">(3)</span></a></li>
            <li><a class="middle a-link-gray" href="#">Yayında <span class="count">(2)</span></a></li>
            <li><a class="last a-link-gray" href="#">taslak <span class="count">(1)</span></a></li>
        </ul>
    </div>
    <form method="post" action="#">
    <p class="search">    	
        <label for="post-search-input">Ara:</label>
        <input class="box-radius input-1 search-input" type="text" value="" name="s" id="post-search-input">
        <input type="submit" class="button box-radius a-link-size-3 a-link-gray" value="Ara">
        
    </p>
    </form>
</div><!--settings-->



      
<div class="settings block-1 gradient-box-light">





<form method="post" action="#">
<div class="box-select">
<span>
<select name="do_actiontop" class="box-radius select-1">
<option value="-1" selected="selected">Toplu İşlemler</option>
<option value="edit">Düzenle</option>
<option value="trash">Çöpe Taşı</option>
<option value="stat0">Yayından Kaldır</option>
<option value="stat1">Yayınla</option>
</select>
</select>
</span>

<input type="submit" class="button box-radius a-link-size-3 a-link-gray" name="action_valuetop" value="yap">
</div><!--box-select-->  
              
<div class="box-select">
<span>    
<select class="box-radius select-1" name="filter_action">
<option value="0" selected="selected">filtrele</option>
<option value="200901">Ocak 2009</option>
<option value="200710">Ekim 2007</option>
</select>
</span>                            
<input type="submit" class="button box-radius a-link-size-3 a-link-gray" value="Filtrele" id="post-query-submit">
</div><!--box-select-->
               



</div><!--settings-->
  
  
  <div class="settings block-1">
<ul style="display: none;" id="msg_box_ok" class="system_messages">
                                <li class="green">
                                    <span class="ico"></span>
                                    <strong id="msg_box_typeok" class="system_title"></strong>
                                </li>
                            </ul>
							
							<ul style="display:none;" id="msg_box_warning" class="system_messages">
                                <li class="yellow">
                                    <span class="ico"></span>
                                    <strong id="msg_box_typewarning" class="system_title"></strong>
                                </li>
                            </ul>
							
							
</div><!--settings-->
      
<table class="block-3-table" border="0">

<colgroup>

<col width="40">
<col width="40">
<col width="375">
<col width="117">
<col width="65">
<col width="114">

<col width="125">
</colgroup>

<tbody>
<tr>
<th class="text-center">

<input type="checkbox" name="selectall_input" id="selectall_input" />

</th>

<th class="bold">ID</th>
<th class="bold">Sayfa</th>
<th class="bold">Slug</th>
<th class="bold">Tarih</th>

<th class="bold">Durum</th>
<th class="bold">Olaylar</th>
</tr>

	<?php $c = 0; ?>
	<?php foreach ( $allpages as $page ): ?>
	<tr id="tr_id{$pages.id}" class="<?php echo ($c++%2==1) ? "first":"second" ?>">
<td class="text-center">

<input type="checkbox" class="input_check" value="" id="action_status_idgelcek" name="action_status[]" />

</td>
<td><?php echo $page->id; ?></td>
<td><?php echo $page->name; ?></td>
<td> <?php echo $page->slug; ?></td>

<td><?php echo tr_date($page->article_date); ?> </td>
<td><span ><?php echo $page->visible; ?></span></td>
<td>

<ul class="actions">
        <li><a class="edit" href="<?php echo base_url();?>admin/edit_page/<?php echo $page->id; ?>">Düzenle</a></li>
		<li><a class="preview" href="#" title="Önizleme">Önizleme</a></li>
<!--		
{if $pages.status=='1' }
	<li><a id="alink_status_{$pages.id}" alt="0" class="publish" href="javascript:void(0);" onclick="content_status('{$pages.id}','sayfa_durum.php','Sayfa')"></a></li>
{elseif $pages.status=='0'}
	<li><a id="alink_status_{$pages.id}" alt="1" class="notpublish" href="javascript:void(0);" onclick="content_status('{$pages.id}','sayfa_durum.php','Sayfa')"></a></li>
	{/if}	
	-->
        <li><a class="delete" href="delete_page/<?php echo $page->id;?>" onclick="show_confirm()" >Sil</a></li>			
                                </ul>

</td>
</tr>

<!--{foreachelse}<td colspan="8">Kayıt Bulunamadi</td>-->

<?php endforeach; ?>

</tbody>
</table>
      
      

<div class="settings block-1 gradient-box-light">


<div class="box-select">
<span>
<select name="do_actiontop" class="box-radius select-1">
<option value="-1" selected="selected">Toplu İşlemler</option>
<option value="edit">Düzenle</option>
<option value="trash">Çöpe Taşı</option>
<option value="stat0">Yayından Kaldır</option>
<option value="stat1">Yayınla</option>
</select>
</span>

<input type="submit" class="button box-radius a-link-size-3 a-link-gray" name="doactionnamebottom" value="Uygula">
</div><!--box-select-->  
              
<div class="box-select">
<span>    
<select class="box-radius select-1" name="filter_action">
<option value="0" selected="selected">Tüm tarihleri göster</option>
<option value="200901">Ocak 2009</option>
<option value="200710">Ekim 2007</option>
</select>
</span>                            
<input type="submit" class="button box-radius a-link-size-3 a-link-gray" name="filteractionname" value="Filtre" id="post-query-submit">
</div><!--box-select-->
               

       
                                <span class="page_no">Toplam Sayfa Adeti : ??</span>
                         
                      
    <ul class="pagination clearfix">
Sayfalama var

    </ul>
    
</div><!--settings-->

</form>

      
<div class="settings block-1 gradient-box-light">

	<div class="combine-menu">
        <ul>
     <li><a class="first a-link-gray" href="#">Tüm sayfalar <span class="count">(3)</span></a></li>
            <li><a class="middle a-link-gray" href="#">yaında <span class="count">(2)</span></a></li>
            <li><a class="last a-link-gray" href="#">taslak <span class="count">(1)</span></a></li>
        </ul>
    </div>

</div><!--settings-->
    




<div class="block-1 gradient-box-light">
        <div class="combine-menu">
            <ul>
                       <li><a class="first a-link-blue" href="#"><span class="next-ico"></span>Anasayfa</a></li>
                <li><a class="middle a-link-blue" href="{$system_action_link}?action=pages_add"><span class="add-ico"></span>Yeni Sayfa Ekle</a></li>
                <li><a class="middle a-link-blue" href="#"><span class="add-ico"></span>Yeni Üye Ekle</a></li>
                <li><a class="last a-link-blue" href="#">Web Sitenize Gidin<span class="prev-ico"></span></a></li>
            </ul>
        </div>    
</div><!--block-1-->




