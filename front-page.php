<?php
/**
 * Frontpage
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wp_photo_theme_moment
 */

get_header();
?>

<div class="main content">
  <div class="c-mainslider">
    <div class="frame slideshow">
      <img src="<?php echo get_template_directory_uri(); ?>/images/img1.jpeg" />

      <img src="<?php echo get_template_directory_uri(); ?>/images/img2.jpeg" />

      <img src="<?php echo get_template_directory_uri(); ?>/images/img3.jpeg" />

      <img src="<?php echo get_template_directory_uri(); ?>/images/img4.jpeg" />
    </div>
    <div class="slidetime">
      <span class="progressbar"></span>
      <span class="counter"></span>
    </div>
  </div>
</div>