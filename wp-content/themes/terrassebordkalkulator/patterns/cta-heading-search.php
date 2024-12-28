<?php
/**
 * Title: Heading and search form
 * Slug: terrassebordkalkulator/cta-heading-search
 * Categories: call-to-action
 * Description: Large heading with a search form for quick navigation.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Terrassebordkalkulator 1.0
 */

?>
<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"var:preset|spacing|50","padding":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--80);padding-bottom:var(--wp--preset--spacing--80)"><!-- wp:group {"align":"wide","layout":{"type":"default"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"fontSize":"xx-large"} -->
		<h2 class="wp-block-heading has-xx-large-font-size"><?php esc_html_e( 'What are you looking for?', 'terrassebordkalkulator' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'Search form label.', 'terrassebordkalkulator' ); ?>","showLabel":false,"placeholder":"<?php echo esc_attr_x( 'Type here...', 'Search input field placeholder text.', 'terrassebordkalkulator' ); ?>","buttonText":"<?php echo esc_attr_x( 'Search', 'Button text. Verb.', 'terrassebordkalkulator' ); ?>"} /-->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
