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

<div class="l-main">
  <div class="slick-wrap">
    <div id="slick-slider">
      <div class="c-mainslider-item">
        <img src="<?php echo get_template_directory_uri(); ?>/images/img1.jpeg" />
      </div>
      <div class="c-mainslider-item">
        <img src="<?php echo get_template_directory_uri(); ?>/images/img2.jpeg" />
      </div>
      <div class="c-mainslider-item">
        <img src="<?php echo get_template_directory_uri(); ?>/images/img3.jpeg" />
      </div>
    </div>
  </div>
  
</div>

<?php
get_footer();