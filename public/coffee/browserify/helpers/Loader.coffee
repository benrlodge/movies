delay = (ms, func) -> setTimeout func, ms


module.exports = class Loader
	constructor: (options) ->
		@msg = options.msg if options

	show: ->
		$('.container').hide(800)
		$("#cover").fadeIn(800)
		$('.preloader').fadeIn(800)
		$('#loader-msg').html(@msg)
	
	hide: ->
		## Add faux delay in case the page loads very quickly
		$("#cover").fadeOut(400)
		$('.preloader').fadeOut(400)
		$('.container').fadeIn(1000)

			
