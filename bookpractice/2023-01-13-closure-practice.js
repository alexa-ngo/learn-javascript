const module = (function(){
	function privateMethod () {
	}
	const privateValue = "something"
	return {
	  get: privateValue,
	  set: function(v) { privateValue = v }
	}
})()

var x = module()
x.get() // "something"
x.set("Another value")
x.get() // "Another Value"
x.privateValue //Error