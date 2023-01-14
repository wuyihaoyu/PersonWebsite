var html = document.getElementById('page');
html.innerHTML =
	`<div
	style='z-index: 99;width: 5%; max-width:35px;min-width: 23px; text-align: center;position: fixed;right: 3%;bottom: 30%;background-color: #ffffffb3;border: 2px solid #3a3c3d;padding: 5px 2px;border-radius: 6px;'>
	<div><button onclick='toTop()'
			style='background-color: #ffffff00;font-size: 24px;cursor: pointer;width: 100%;  display: flex;border-radius: 6px;
			justify-content: center;'>↑</button></div>
	<div id='pagenum' style='margin: 30px 0px;'>/</div>
	<div><button onclick='toBottom()'
			style='background-color: #ffffff00;font-size: 24px;cursor: pointer;width: 100%; display: flex;border-radius: 6px;
			justify-content: center;'>↓</button></div>
</div>`
function toTop() {
	var Height = document.body.clientHeight;
	var goHtight = parseInt(Height / 1.1)
	var currentHeight = document.documentElement.scrollTop;
	document.documentElement.scrollTo({
		top: currentHeight - goHtight,
		behavior: 'smooth' //  smooth(平滑滚动),instant(瞬间滚动),默认auto
	});
	getinitPagenum()

}

function toBottom() {
	var Height = document.body.clientHeight;
	var goHtight = parseInt(Height / 0.88)
	var currentHeight = document.documentElement.scrollTop;
	var availH = window.screen.availHeight
	document.documentElement.scrollTo({
		top: currentHeight + goHtight,
		behavior: 'smooth' //  smooth(平滑滚动),instant(瞬间滚动),默认auto
	});
	getinitPagenum()
}

function getinitPagenum() {
	setTimeout(function() {
		var Height = document.body.clientHeight;
		var goHtight = parseInt(Height / 1.1) //段高
		var currentHeight = document.documentElement.scrollTop;

		var allH = document.body.scrollHeight / currentHeight //总高
		var t = parseInt(document.body.scrollHeight / goHtight); //段数
		console.info(t)
		var curp = 1
		for (var i = 1; i < t; i++) {
			if (currentHeight == 0 || (currentHeight > 0 && goHtight > currentHeight)) {
				curp = 1
				break
			} else {
				if (goHtight * (i + 1) > currentHeight && goHtight * i <= currentHeight) {
					curp = i+ 1
					break
				}
			}

		}
		document.getElementById('pagenum').innerText = curp + '/' + t
	}, 500);
}
getinitPagenum()
