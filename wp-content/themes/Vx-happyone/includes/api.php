<?php 
add_action ('rest_api_init','API_product');
function API_product(){
	register_rest_route('products/v1','search',array(
	   'method' => WP_REST_SERVER::READABLE,
	   'callback' => 'product_API_search',
	));
}
function product_API_search($data){
	// array chứa các loại post type
	if($data == ""){
		return "";
	}else{
	$mainQuery = new WP_Query(array(
	  'post_type'        => array('products'),	  
	  'post_status'      => array('publish'),
	   's'               => sanitize_text_field($data['title'])
	));
	$Result = array($data);
	while($mainQuery->have_posts()){
		 $mainQuery->the_post();
		 array_push($Result,array(
		    'title' => get_the_title(),
		    'link'  => get_the_permalink(),	 
		    'picture' => get_the_post_thumbnail()
		  ));
	} 
	return $Result;}
}
?>