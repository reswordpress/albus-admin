/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */

module.exports = {

	// Project options.
	projectURL: 'journal.local', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:3000 depending upon your local WordPress setup.
	productURL: './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: false,
	injectChanges: true,
	projectName: 'clean-admin', // Set the project name to be used in zipping up the production project
	projectZipDeployDestination: './dist/', // Path to place the zipped project files for deployment builds. Default set to dist folder.

	// PHP options.
	phpDeployDestination: './dist/build/', // Path to place PHP files for deployment builds. Default set to dist/build folder.

	// Style options.
	styleSRC: './sass/albus-style.scss', // Path to main .scss file.
	styleDestination: './', // Path to place the compiled CSS file. Default set to root folder.
	styleDeployDestination: './dist/build/', // Path to place the compiled CSS files for deployment builds. Default set to dist/build folder.
	outputStyle: 'compact', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Vendor options.
	jsVendorSRC: './vendor/js/*.js', // Path to JS vendor folder.
	jsVendorDestination: './vendor/js/', // Path to place the compiled JS vendors file.
	jsVendorDeployDestination: './dist/build/js/', // Path to place the compiled JS vendors file for deployment builds.
	jsVendorFile: 'vendor', // Compiled JS vendors file name. Default set to vendors i.e. vendors.js.

	// JS Custom options.
	jsCustomSRC: './js/custom/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './js/', // Path to place the compiled JS custom scripts file.
	jsCustomDeployDestination: './dist/build/js/', // Path to place the compiled JS custom scripts file for deployment builds.
	jsCustomFile: 'albus-script', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	imgSRC: './assets/img/raw/**/*', // Source folder of images which should be optimized and watched. You can also specify types e.g. raw/**.{png,jpg,gif} in the glob.
	imgDST: './assets/img/', // Destination folder of optimized images. Must be different from the imagesSRC folder.
	imgDeploy: './dist/build/assets/img/', // Destination folder for optimized images for the deployment build.

	// Watch files paths.
	watchStyles: './sass/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	watchJsVendor: './assets/js/vendor/*.js', // Path to all vendor JS files.
	watchJsCustom: './js/custom/*.js', // Path to all custom JS files.
	watchPhp: './**/*.php', // Path to all PHP files.

	// Translation options.
	textDomain: 'cleanadmin', // Your textdomain here.
	translationFile: 'cleanadmin.pot', // Name of the translation file.
	translationDestination: './languages', // Where to save the translation files.
	translationDeployDestination: './dist/build/languages', // Where to save the translation files for deployment builds.
	packageName: 'WPGULP', // Package name.
	bugReport: 'https://AhmadAwais.com/contact/', // Where can users report bugs.
	lastTranslator: 'Ahmad Awais <your_email@email.com>', // Last translator Email ID.
	team: 'AhmadAwais <your_email@email.com>', // Team's Email ID.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	// The following list is set as per WordPress requirements. Though, Feel free to change.
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	]
};