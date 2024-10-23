const buttons = document.querySelectorAll("input[type='button']");
const displayInput = document.getElementById("displayInput");
const operation = document.querySelector(".previous-input");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.value == "=") {
            try {
                displayInput.value = eval(displayInput.value);
                operation.innerHTML = displayInput.value; 
            } catch (e) {
                displayInput.value = "Error"; 
            }
        } else if (btn.value == "C") {
            operation.innerHTML = ""; 
            displayInput.value = "";  
        } else if (btn.value == "Del") {
            displayInput.value = displayInput.value.slice(0, -1); 
        } else {
            displayInput.value += btn.value; 
        }
    });
});
