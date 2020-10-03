
(function () {
	const url = window.location.search;
	const queryString = new URLSearchParams(url);

	chrome.storage.sync.get(['signature'], function(results) {

		if(queryString.get("reply") || queryString.get("forum")){
			
			let textbox;

			try{
				if(document.getElementById("id_message")){
					textbox = document.getElementById("id_message");

				}else if(document.getElementById("id_messageeditable")){
					textbox = document.getElementById("id_messageeditable");
				}
				else{
					console.error("Element not found")
				}
				
				//Set Output^:
				let htmlOutput = "<br/> <br/>";
				let outputArray = [htmlOutput];

				const resultObj = results.signature;

				if(resultObj.htmlBox){
					htmlOutput = resultObj.htmlBox;
					
				}
				else{

					outputArray.push(`<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-family: ${resultObj.fontFamily};"><tbody><tr><td style="padding: 0px; vertical-align: middle;">`);

					if(resultObj.message.value){
						const message = resultObj.message;

						outputArray.push(`<p style="margin: 0px; margin-bottom: 10px; color: ${message.color}; font-size: ${message.size}; line-height: 22px;">${message.value}</p>`)
					}

					if(resultObj.title.value){
						const title = resultObj.title;

						outputArray.push(`<h3 style="margin: 0px; color: ${title.color}; font-size: ${title.size}; ">${title.value}</h3>`)
					}

					if(resultObj.subtitle.value){
						const subtitle = resultObj.subtitle;

						outputArray.push(`<p style="margin: 0px; line-height: 22px; color: ${subtitle.color}; font-size: ${subtitle.size}; ">${subtitle.value}</p>`)
					}

					if(resultObj.paragraph.value){
						const paragraph = resultObj.paragraph;

						outputArray.push(`<p style="margin: 0px; font-weight: 500;  line-height: 22px; color: ${paragraph.color}; font-size: ${paragraph.size};">${paragraph.value}</p>`)
					}

					outputArray.push(`</td></tr></tbody></table>`);

					outputArray.forEach( (value) => {
						htmlOutput = htmlOutput + value;
					})

				}

				textbox.innerHTML = htmlOutput; //assinatura
	
			}
			catch(error){
				console.log(error);
	
			}
		}
	});
})();

