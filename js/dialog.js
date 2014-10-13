function DiaLog (opts) {
	 this.conf = opts;
	 this._clickBtn = function(){
	 	var self = this;
	 	var $el = this.conf.clickBtn;
	 	$el.bind('click',function(){
	 		var flag = self.conf._showdialog;
	 		if(!flag){
	 			$('body').append('<div class="shadow j_shadow"></div>');
	 			flag = true;
	 			self.showDialog();
	 			return ;
	 		}
	 	});
	};
	 this.init = function(){
	 	var self = this;
	 	self._clickBtn();
	 };
	 this.showDialog = function(){
	 	var self = this;
	 	var arrHtml = new Array();
	 	arrHtml.push("<div class='j_dialog_dot dialog_dot'>");
	 	arrHtml.push("<div class='j_dialog_wrap dialog_wrap'>");
	 	arrHtml.push("<div class='j_dialog_title dialog_title'><span class='j_close close'>XX<span></div></div></div>");
	 	var html = arrHtml.join("");
	 	$('body').append(html);
	 	self.showConent();
	 	self.closeDialog();
	 };
	 this.closeDialog = function() {
	 	var self = this;
	 	$('body').on('click','.j_close',function() {
	 		$('body').find('.j_dialog_dot').remove();
	 		 self.conf._showdialog = false;
	 		 $('.j_shadow').remove();
	 	});
	 };
	 this.showConent = function() {
	 	var self = this;
	 	var showConent = self.conf.content;
	 	var copyDomJq = showConent.clone(true).removeClass("hide")
	 	$('.j_dialog_wrap').append(copyDomJq);
	 }
	 
}
