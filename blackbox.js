Template.afBlackbox.helpers({
	blackbox: function() {
		return (typeof this.value=='string' && !this.value.length)?'<pre>&nbsp;</pre>':eyes(this.value,undefined,{maxLength:-1,functions:false,html:true,style:'',sortKeys:true});
	}
});


AutoForm.addInputType("blackbox", {
	template: "afBlackbox",
});
