var page = {
	fn: {},
	data: {},
	event: {}
};

$(function() {
	page.event.onPageLoad();
});

page.event.getAES = function(data) {
	var key = CryptoJS.enc.Utf8.parse("1234567812345678");
	var iv = CryptoJS.enc.Utf8.parse("102030405060708Z");
	var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted;
};

page.event.getDAES = function(encrypted) {
	var key = CryptoJS.enc.Utf8.parse("1234567812345678");
	var iv = CryptoJS.enc.Utf8.parse("102030405060708Z");
	var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
};

page.event.clickBtn = function() {
	$("#beginBtnId").click(function() {
		var encryptResult = page.event.getAES($("#str").val());
		var decryptStrResult = page.event.getDAES(encryptResult);
		$("#encryptStr").val(encryptResult);
		$("#decryptStr").val(decryptStrResult);
	});

	$("#decryBtnId").click(function() {
		var decryResult = page.event.getDAES($("#encryId").val());
		$("#decryId").val(decryResult);
	});
};

page.event.onPageLoad = function() {
	page.event.clickBtn();
};