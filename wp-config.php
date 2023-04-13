<?php


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sql_cchappyonevanxuan' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('DISABLE_WP_CRON', true);

// action_scheduler_run_queue,

// define('ALTERNATE_WP_CRON', true);
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OVmHLe(Nx7R1F[+e2}/xUz;F nr=<-Wb:N<xg^s63#l0G/V~ClUorf?AGXZ;wxTZ' );
define( 'SECURE_AUTH_KEY',  'g}0[#O13o$f]T#V.kL!^h`>*:CwQ{!]+JJSTZl#Jvq~gV3A;tDc4g7Mm#gL)868D' );
define( 'LOGGED_IN_KEY',    'P-]#Jbe>b4]?G5IC;~RFaNTI)J9qfUHK+P_C<A5B:+&q@#l,?cY>/je<_*~wo}1-' );
define( 'NONCE_KEY',        ')BKXs(&XGY_mFco$$hcvdmz P` 0te(p%>@7M$I?>&xQOMJ1$}{XY*JkL/$N@4:5' );
define( 'AUTH_SALT',        'Bgs2VS^R-o!%o1hnDq;%ZeVvLsV@U:F09)KCtd)LoFUZD_W#j$])Dz%6~-9ZW}XY' );
define( 'SECURE_AUTH_SALT', 'NB|vuVsAPViI%9Jj:UgnP}2bO8ny|#Uhwd$!F[Ldl1PYO8]xao2+uCxx}S9&WrKp' );
define( 'LOGGED_IN_SALT',   'k{[sU}Dd{%G`7g8`nC,2<n)J8U-d)ild9g7zEb*dLgeT!td6?/PkfG.h9kB9$d&R' );
define( 'NONCE_SALT',       'VHZD:0lc*3Z+AuW |N@eFg.MiCfJW*ja=[t/3B*g~lk;{}jHR~pqa9;i/6j3Dt%?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

// Disallow file editor
define( 'DISALLOW_FILE_EDIT', true );
