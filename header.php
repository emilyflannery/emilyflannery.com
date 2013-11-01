<?php
	$path = $_SERVER['DOCUMENT_ROOT'];
	$path .= "/header.php";
	include_once($path);
?>

   <!DOCTYPE html>
<html lang="en" class="no-js">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="initial-scale=1"> 
	<title>Emily Flannery | Design &amp; Development</title>
	<link rel="shortcut icon" href="/images/emily-flannery-favicon.png" >
	<link href="/css/screen.css" rel="stylesheet" type="text/css" />
	<script src="/js/modernizr-latest.js"></script>
	<script type="text/javascript" src="iemenu.js">
		if ($.browser.msie) {
    		$.getScript('/js/ie.js', function() {});
    	}
    </script>
	<!--[if lt IE 9]>
	<link href="/css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
	<![endif]-->
	<!--[if lt IE 9]>
	<script src="dist/html5shiv.js"></script>
	<![endif]-->
</head>
<body>
	<div id="social">
		<a href="http://itsthegoodthings.tumblr.com" target="_blank"><img src="/images/icon-tumblr.png" /></a>
		<a href="https://www.facebook.com/EmilyFlanneryDesignDevelopment" target="_blank"><img src="/images/icon-facebook.png" /></a>
		<a href="http://pinterest.com/emilyflannery/" target="_blank"><img src="/images/icon-pinterest.png" /></a>
		<a href="https://twitter.com/emilygflannery" target="_blank"><img src="/images/icon-twitter.png" /></a>
	</div>	

	<header class="expand">
	
		<h1>
			<a href="http://www.emilyflannery.com" title="Home">
			<img id="logo" src="/images/logo.png" alt="Emily Flannery" />
			<span id="tag">Design &amp; Development</a>
			</a>
		</h1>
		
		<nav role="navigation">
			<ul class="primary">
				<li id="about"><a href="/about.php">About</a></li>
				<li id="work"><a href="">Work</a>
					
					<ul class="secondary">
						<li id="digital"><a href="">Digital</a>
							<ul id="digital-list" class="tertiary">
								<li><a class="nav-button navSelected" href="/work/thescoutguide.php">The Scout Guide</a></li>
								<li><a class="nav-button" href="/work/tumblr.php">Tumblr</a></li>
								<li><a class="nav-button" href="/work/tuckschoolofbusiness.php">Tuck School of Business</a></li>
								<li><a class="nav-button" href="/work/jhealeyinteriors.php">J. Healey Interiors</a></li>
								<li><a class="nav-button" href="/work/klhdesigns.php">KLH Designs</a></li>
								<li><a class="nav-button" href="/work/emilyiswriting.php">Emily Martin Childrens' Books</a></li>
								<li><a class="nav-button" href="/work/concretepandp.php">Concrete P&amp;P</a></li>
								<li><a class="nav-button" href="/work/bornintrenchtown.php">Born In Trench Town Documentary</a></li>
								<li><a class="nav-button" href="/work/dunwoodyholdings.php">Dunwoody Holdings</a></li>
								<li><a class="nav-button" href="/work/workinprogress.php">Work in Progress</a></li>
							</ul>
						</li>
						
						<li id="print"><a href="">Print</a>
							<ul id="print-list" class="tertiary">
								<li><a class="nav-button" href="/work/glassflannery.php">Glass+Flannery Wedding</a></li>
								<li><a class="nav-button" href="/work/thelovelygourmet.php">Baby Burden</a></li>
								<li><a class="nav-button" href="/work/mariaandricardos.php">Maria &amp; Ricardo's</a></li>
								<li><a class="nav-button" href="/work/eyeful.php">eyeful Magazine</a></li>
							</ul>
						</li>
						<li id="branding"><a href="">Branding &amp; Identity</a>
							<ul id="branding-list" class="tertiary">
								<li><a class="nav-button" href="/work/jhealeyinteriors.php">J. Healey Interiors</a></li>
								<li><a class="nav-button" href="/work/kingspringspecans.php">King Springs Pecans</a></li>
								<li><a class="nav-button" href="/work/thelovelygourmet.php">The Lovely Gourmet</a></li>
								<li><a class="nav-button" href="/work/glassrobson.php">Glass &amp; Robsonn</a></li>
								<li><a class="nav-button" href="/work/markettable.php">Market Table</a></li>
								<li><a class="nav-button" href="/work/emilyiswriting.php">Emily Martin Children's Books</a></li>
								<li><a class="nav-button" href="/work/fransisbetter.php">Fran's Is Better</a></li>
								<li><a class="nav-button" href="/work/projectgiveback.php">Project Give Back</a></li>
							</ul>
						</li>
					</ul>
				
				</li>
				<li id="contact"><a href="/contact.php">Contact</a></li>
			</ul>
		</nav>
	</header>