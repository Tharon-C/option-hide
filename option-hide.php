<?php
/**
 * Plugin Name: Option Hide.
 * Plugin URI: http://tharoncarlson.com/option-hide
 * Description: Hide and show elements on a page by a user selected dropdown
 * Version: 0.0.1
 * Author: Tharon Carlson
 * Author URI: http://tharoncarlson.com
 * Text Domain:
 * Domain Path: 
 * Network:
 * License:GPL2
 */

/*  Copyright YEAR  Tharon Carlson  (email : design@tharoncarlson.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

// Load Scripts
add_action('wp_enqueue_scripts','option_hide_js');
add_action('wp_enqueue_scripts', 'option_hide_styles'); // Add Theme Stylesheet

function option_hide_js() {
    wp_enqueue_script( 'option-hide-js', plugins_url( '/js/main.js', __FILE__ ));
}

function option_hide_styles() {
    wp_register_style('option-hide-css', plugins_url('/css/main.css', __FILE__ ), array(), '1.0', 'all');
    wp_enqueue_style('option-hide-css'); // Enqueue it!
}
?>