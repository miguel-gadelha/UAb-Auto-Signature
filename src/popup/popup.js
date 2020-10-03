(function(){
  
    //const valueField = document.getElementById("signature");
    //const button = document.getElementById("save-btn");
    let formData = {};

    (function(){

        const font = document.getElementById("font");

        const message =  document.getElementById("message");
        const messageColor = document.getElementById("message__color");
        const messageSize = document.getElementById("message__size");

        const title = document.getElementById("title");
        const titleColor = document.getElementById("title__color");
        const titleSize = document.getElementById("title__size");

        const subtitle = document.getElementById("subtitle");
        const subtitleColor = document.getElementById("subtitle__color");
        const subtitleSize = document.getElementById("subtitle__size");

        const paragraph = document.getElementById("paragraph");
        const paragraphColor = document.getElementById("paragraph__color");
        const paragraphSize = document.getElementById("paragraph__size");
        
        const htmlBox = document.getElementById("htmlBox__content");
        

        try{
            chrome.storage.sync.get(['signature'], function(results) {
                let resultObj = results.signature;

                if(resultObj.fontFamily){
                    font.value = resultObj.fontFamily;
                }

                if(resultObj.message.value){
                    message.value = resultObj.message.value;
                    messageColor.value = resultObj.message.color;
                    messageSize.value = resultObj.message.size;
                }

                if(resultObj.title.value){
                    title.value = resultObj.title.value;
                    titleColor.value = resultObj.title.color;
                    titleSize.value = resultObj.title.size;
                }

                if(resultObj.subtitle.value){
                    subtitle.value = resultObj.subtitle.value;
                    subtitleColor.value = resultObj.subtitle.color;
                    subtitleSize.value = resultObj.subtitle.size;
                }

                if(resultObj.paragraph.value){
                    paragraph.value = resultObj.paragraph.value;
                    paragraphColor.value = resultObj.paragraph.color;
                    paragraphSize.value = resultObj.paragraph.size;
                }

                if(resultObj.htmlBox){
                    htmlBox.value = resultObj.htmlBox;
                }

            });
        }
        catch{
            console.log("No saved Data");
        }
    })();

    function saveInputs(){
        let formResult = {

            fontFamily : document.getElementById("font") ? document.getElementById("font").value : "",
            
            message : document.getElementById("message").value ? {
                value : document.getElementById("message").value,
                color : document.getElementById("message__color").value,
                size : document.getElementById("message__size").value
            } : "",
    
            title : document.getElementById("title").value ? {
                value : document.getElementById("title").value,
                color : document.getElementById("title__color").value,
                size : document.getElementById("title__size").value
            } : "",
    
            subtitle : document.getElementById("subtitle").value ? {
                value : document.getElementById("subtitle").value,
                color : document.getElementById("subtitle__color").value,
                size : document.getElementById("subtitle__size").value
            } : "",
    
            paragraph : document.getElementById("paragraph").value ? {
                value : document.getElementById("paragraph").value,
                color : document.getElementById("paragraph__color").value,
                size  : document.getElementById("paragraph__size").value
            } : "",
    
            htmlBox : document.getElementById("htmlBox__content").value ? document.getElementById("htmlBox__content").value : ""
    
        }

        formData = formResult;
        console.log("input")
        return 
    }

    function showPreview(){

            saveInputs();
            document.getElementById("preview__container").style.display = "block";
            let textbox = document.getElementById("preview");

            try{
                
                //Set Output^:
                let htmlOutput = "";
                let outputArray = [htmlOutput];

                const resultObj = formData;

                if(resultObj.htmlBox){
                    htmlOutput = resultObj.htmlBox;

                    document.getElementById("builder").style.display = "none";
                    
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

                    document.getElementById("htmlBox").style.display = "none";
                }

                textbox.innerHTML = htmlOutput; //assinatura
    
            }
            catch(error){
                console.log(error);
    
            }
        
    }

    const saveButton    = document.getElementById("button--save");
    const previewButton = document.getElementById("button--preview");

    saveButton.addEventListener('click', function () {

        saveInputs()

        chrome.storage.sync.remove('signature');

        chrome.storage.sync.set({ 'signature': formData }, function () {
            // Notify that we saved.
            console.log(formData);
            alert('Saved!');
            window.close();
        });
    });
    previewButton.addEventListener('click', showPreview);

})();

