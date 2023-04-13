<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<!-- web matter tool -->
	<meta name="msvalidate.01" content="BE9965D83D350DC5ACECB27EF31C8911" />
	<meta name="yandex-verification" content="7b3407f3684427f1" />
    <meta name="facebook-domain-verification" content="2e4699f6c44iadpul1rz7okjxrshb7" />

    <!-- google search console -->
	<meta name="google-site-verification" content="CMqCEW951_E0mw4e4jGzzOEq_p-wDUJ9ZmXQlTMyXuQ" />

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-170622726-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-170622726-1');
	</script>

	<!-- Facebook Pixel Code -->
	<script>
	!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '297583904887245');
	fbq('track', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=297583904887245&ev=PageView&noscript=1" /></noscript>
	<!-- End Facebook Pixel Code -->

	<?php wp_head(); ?>
</head>
<!-- body -->
<body>
	<?php get_template_part('sections/header')  ?>
