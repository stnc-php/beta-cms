<?php include('header.php'); ?>
<script type="text/javascript" src="<?php echo base_url();?>js/jtabber.js"></script>
<script type="text/javascript">
	
	

	$(document).ready(function(){

	//tab için 
		$.jtabber({
			mainLinkTag: "#pages-control-tab a", // much like a css selector, you must have a 'title' attribute that links to the div id name
			activeLinkClass: "selected", // class that is applied to the tab once it's clicked
			hiddenContentClass: "hiddencontent", // the class of the content you are hiding until the tab is clicked
			showDefaultTab: 1, // 1 will open the first tab, 2 will open the second etc.  null will open nothing by default
			showErrors: false, // true/false - if you want errors to be alerted to you
			effect: 'slide', // null, 'slide' or 'fade' - do you want your content to fade in or slide in?
			effectSpeed: 'fast' // 'slow', 'medium' or 'fast' - the speed of the effect
		})
    
});


		

    </script>
<div class="block-1">
    <div class="page-title block-1 gradient-box-light">
      
      <h4><span class="page-name">Sayfa Düzenle
        
        <div class="combine-menu">            
            <ul>
<li><a class="first a-link-orange" href="<?php echo base_url();?>admin/"><span class="update-ico"></span>sayfalar</a></li>
 <li><a class="middle a-link-blue" href="<?php echo base_url();?>admin/add_page">
 <span class="add-ico"></span>Yeni Sayfa Ekle</a></li>
               
                <li><a class="last a-link-blue" href="#">Web Sitenize Gidin<span class="prev-ico"></span></a></li>
            </ul>
        </div>    
        
        
</div><!--block-1-->

    
<div class="block-1">

<div class="tab-general-box">
                

	     

            
            <ul  id="msg_box_ok" class="system_messages">
<li class="green">
<span class="ico"></span>
<strong id="msg_box_typeok" class="system_title"><?php echo $msg; ?>     </strong>
</li>
</ul>

<ul id="msg_box_warning" class="system_messages">
<li class="yellow">
<span class="ico"></span>
<strong id="msg_box_typewarning" class="system_title">	<?php echo validation_errors();  ?></strong>
</li>
</ul>
      <?php foreach( $page as $show ): ?>
                <div class="tab-general-box">
                
                
                <div id="pages-control-tab">
                    <a href="#" title="tab-box-1" class="gradient-link-6">Bilgiler</a>
                    <a href="#" title="tab-box-2" class="gradient-link-6">Seo ve etiket</a>
            
                    <div class="clear" style="clear:both"></div>
                </div>

                <div id="tab-box-1" class="hiddencontent">

               <div class="status-general-long-box status-general-long-box-2">
                 <p>&nbsp;</p>
                 <?php echo form_open(); ?>
                   
                   
                        
                   <div class="forms">

                   <div class="form-small-left-box"><!--row-->
                        
                      <div class="row">                    
                            <label> Sayfa Adı: </label>
                            <div class="inputs">
                           <input class="text" id="name" name="name"  value="<?php echo $show->name; ?>" type="text" />
                            </div>   
                     </div><!--row-->
                        
                   <div class="row">                    
                            <label> Sayfa başlık </label>
                            <div class="inputs">
                        <textarea id="title" name="title" ><?php echo $show->title; ?></textarea>
                            </div>   
                     </div> 
						<!--row-->
                        
                        <div class="row">                    
                            <label> slug</label>
                            <div class="inputs">
                           	<input class="text" value="<?php echo $show->slug; ?>" name="slug" id="slug" type="text" />
                            </div>   
                        </div><!--row-->
                    
                    </div><!--form-small-left-box-->
      
                    <div class="form-small-right-box">

                        
                    </div><!--form-small-right-box-->

                    
                    <div class="row">                    
                        <label> Sayfa İçeriği: </label>
                        <div class="inputs">
                          <textarea name="content" id="content" ><?php echo $show->content; ?></textarea>
                        </div>   
                    </div><!--row-->   
                    
<div class="row">                    
                   
                        <div class="inputs">

<input type="submit" value="Kaydet" class="kaydet_btn" >
                        </div>   
                    </div><!--row-->   
                   
                   </div><!--forms-->
                   
                            
 
                   
                 

                        
                    </div><!--status-general-long-box-->
               
               
               
                    
                </div><!--tab-box-1 bitti-->
            
                
                <div id="tab-box-2" class="hiddencontent">
    <div class="forms">

      <div class="form-small-left-box"><!--row-->
<div class="status-general-long-box status-general-long-box-2">
                    	<h4> 
                        <span class="in-block"><img src="images/icon-set-1/pictures.png" alt="sayfalar" /></span>
                  
                      <!--   <span class="in-block in-block-link"><a class="add-link gradient-link-2" href="pages.php">
                        <img src="images/icon-set-1/home.png"  alt="home" /> </a></span> -->
                        
                        </h4>

                   <div class="row">                    
                            <label> meta description</label>
                            <div class="inputs">
                        <textarea id="description" name="description" ><?php echo $show->description; ?></textarea>
                            </div>   
                        </div> 
						<!--row-->
                        
                        
                         <div class="row">                    
                            <label> meta keywords </label>
                            <div class="inputs">
                        <textarea id="keywords" name="keywords" ><?php echo $show->keywords; ?></textarea>
                            </div>   
                        </div> 
						<!--row-->
                     <div class="row">      <label> Site görünsün mü</label> 
                        <div class="inputs">
                        <select name="show">
	<option value=""> --- </option>
	<option value="Yes">Evet</option>
	<option value="No">Hayır</option>
	</select>
                          </div>   
                        </div> 
						<!--row-->
                     
                    </div><!--status-general-long-box-->
     
                </div><!--tab-box-2 bitti-->

                </div><!--tab-general-box-->
				
				</div>
 
<div class="block-1">    
        <div class="combine-menu">            
            <ul>
            
				
				<li><a class="first a-link-black" href="<?php echo base_url();?>admin/"><span class="update-ico"></span>sayfalar</a></li>
 <li><a class="middle a-link-gray" href="<?php echo base_url();?>admin/add_page">
 <span class="add-ico"></span>Yeni Sayfa Ekle</a></li>
 
 
 
				
                <li><a class="last a-link-gray" href="#">Web Sitenize Gidin<span class="prev-ico-2"></span></a></li>
            </ul>
        </div>  
</div><!--block-1-->         
<?php endforeach; ?>
<?php echo form_close(); ?>

<?php include('footer.php');?>   