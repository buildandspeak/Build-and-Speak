function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    let chatBox = document.getElementById("chatBox");
    let level = document.getElementById("level").value;

    // Don't send empty messages
    if (message === "") {
        return;
    }

    // Show user's message
    let userMessage = document.createElement("div");

    userMessage.className = "message user";
    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show typing indicator
    let typingMessage = document.createElement("div");

    typingMessage.className = "message ai";
    typingMessage.innerText = "Tutor is typing... ⌨️";

    chatBox.appendChild(typingMessage);

    chatBox.scrollTop = chatBox.scrollHeight;


    // Wait before tutor replies
    setTimeout(function() {

        // Remove typing message
        typingMessage.remove();

        // Create AI message
        let aiMessage = document.createElement("div");

        aiMessage.className = "message ai";

        let lowerMessage = message.toLowerCase();


        // English corrections
        if (lowerMessage === "i am go") {

            aiMessage.innerText =
                'Correction: "I am going." ✅';

        }

        else if (lowerMessage === "he go") {

            aiMessage.innerText =
                'Correction: "He goes." ✅';

        }

        else if (lowerMessage === "i has") {

            aiMessage.innerText =
                'Correction: "I have." ✅';

        }


        // Beginner
        else if (level === "Beginner") {

            aiMessage.innerText =
                "Good job! 😊 Try to write another simple English sentence.";

        }


        // Elementary
        else if (level === "Elementary") {

            aiMessage.innerText =
                "Nice! 👍 Try adding more details to your sentence.";

        }


        // Intermediate
        else if (level === "Intermediate") {

            aiMessage.innerText =
                "Good! Try expressing your idea with more detail.";

        }


        // Advanced
        else if (level === "Advanced") {

            aiMessage.innerText =
                "Good. Try using more advanced vocabulary or sentence structures.";

        }


        // Show tutor response
        chatBox.appendChild(aiMessage);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);
}


// Press Enter to send
function handleKeyPress(event) {

    if (event.key === "Enter") {

        sendMessage();

    }
}