var treeModule=(function(argument) {
	var tree={
		init:function(json) {
			var ele=document.querySelector(".tree");
			ele.appendChild("<span></span>");
			for (var i = 0; i < json.length; i++) {
				console.log(json[i]);
				if(i==json.length-5){
					return ;
				}
			}
		}
	};

	return tree;
})();