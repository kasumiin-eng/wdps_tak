<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 * @version 14.0.0
 */

namespace Framework\Helper\Page_Header;

use Framework\Helper;
use Framework\Contract\Helper\Page_Header\Page_Header as Base;

class WooCommerce_Term_Page_Header extends Base {

	/**
	 * Return page header image url.
	 *
	 * @param WP_Term $wp_term WP_Term object.
	 * @return string|false
	 */
	protected static function _get_image_url( $wp_term ) {
		if ( ! is_a( $wp_term, '\WP_Term' ) ) {
			return false;
		}

		if ( ! in_array( $wp_term->taxonomy, [ 'product_cat', 'product_tag' ], true ) ) {
			return false;
		}

		if ( Helper::has_term_thumbnail( $wp_term ) ) {
			return Helper::get_the_term_thumbnail_url( $wp_term );
		} elseif ( Helper::has_woocommerce_archive_thumbnail() ) {
			return Helper::get_the_woocommerce_archive_thumbnail_url();
		}

		return static::_get_default_image_url();
	}

	/**
	 * Return page header title.
	 *
	 * @param WP_Term $wp_term WP_Term object.
	 * @return string|false
	 */
	protected static function _get_title( $wp_term ) {
		if ( ! is_a( $wp_term, '\WP_Term' ) ) {
			return false;
		}

		return in_array( $wp_term->taxonomy, [ 'product_cat', 'product_tag' ], true )
			? Helper::get_page_title_from_breadcrumbs()
			: false;
	}

	/**
	 * Return page header alignment.
	 *
	 * @param WP_Term $wp_term WP_Term object.
	 * @return string|false
	 */
	protected static function _get_align( $wp_term ) {
		if ( ! is_a( $wp_term, '\WP_Term' ) ) {
			return false;
		}

		return in_array( $wp_term->taxonomy, [ 'product_cat', 'product_tag' ], true )
			? get_theme_mod( 'woocommerce-archive-page-header-align' )
			: false;
	}
}
