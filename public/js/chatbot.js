let chatInput = document.querySelector('.chat-input');
let chatBtn = document.querySelector('.chat-btn');
let responseContainer = document.querySelector('.response-container')



chatBtn.addEventListener('click', async () => {
    let chatInputValue = chatInput.value;
    if (!chatInputValue) {
        responseContainer.innerHTML = `<div style="background-color: #e2bec8; border-radius: 8px ; color: black; padding: 10px;">Please enter a message  <i class="fa-regular fa-keyboard"></i>.</div>`
        return;
    }
    responseContainer.innerHTML = `<img src="./img/loader.gif" style="height: 300px; width: 100%"; border-radius: 8px >`;
    try {

        let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "HTTP-Referer": "<YOUR_SITE_URL>",
                "X-Title": "<YOUR_SITE_NAME>",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "deepseek/deepseek-r1:free",
                "messages": [
                    {
                        "role": "user",
                        "content": chatInputValue
                    }
                ]
            })
        }
        );
        let data = await response.json();
        let finalData = data.choices?.[0]?.message?.content || 'No response received.';
        responseContainer.innerHTML = `<div style="padding: 20px">${marked.parse(finalData)}</div>`;

    } catch (error) {
        responseContainer.innerHTML = `<div style="background-color: #e2bec8; border-radius: 8px ; color: black; padding: 10px;">Error: ${error.message}</div>`;
    }
    chatInput.value = '';
});
window.addEventListener('keydown', async (e) => {
    if (e.code === "Enter") {
        let chatInputValue = chatInput.value;
        if (!chatInputValue) {
            responseContainer.innerHTML = `<div style="background-color: #e2bec8; border-radius: 8px ; color: black; padding: 10px;">Please enter a message  <i class="fa-regular fa-keyboard"></i>.</div>`
            return;
        }
        responseContainer.innerHTML = `<img src="./img/loader.gif" style="height: 300px; width: 100%"; border-radius: 8px >`;
        try {

            let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "HTTP-Referer": "<YOUR_SITE_URL>",
                    "X-Title": "<YOUR_SITE_NAME>",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "deepseek/deepseek-r1:free",
                    "messages": [
                        {
                            "role": "user",
                            "content": chatInputValue
                        }
                    ]
                })
            }
            );
            let data = await response.json();
            let finalData = data.choices?.[0]?.message?.content || 'No response received.';
            responseContainer.innerHTML = `<div style="padding: 20px">${marked.parse(finalData)}</div>`;

        } catch (error) {
            responseContainer.innerHTML = `<div style="background-color: #e2bec8; border-radius: 8px ; color: black; padding: 10px;">Error: ${error.message}</div>`;
        }
        chatInput.value = '';

    }

});