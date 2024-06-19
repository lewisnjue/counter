const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            value.textContent = parseInt(value.textContent) - 1;
        } else if (styles.contains("increase")) {
            value.textContent = parseInt(value.textContent) + 1;
        } else {
            value.textContent = 0;
        }
        if (parseInt(value.textContent) > 0) {
            value.style.color = "green";
        } else if (parseInt(value.textContent) < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
    
            // reset value to zero
            value.textContent = 0;
        }});
    });