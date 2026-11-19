(function () {
    "use strict";
    const form = document.getElementById("contact-form");
    if (!form) return;

    const fields = [
        { id: "full-name", label: "Full name", validate: v => v.trim().length >= 2 || "Enter your name (at least 2 characters)." },
        { id: "email", label: "Email address", validate: v => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v.trim()) || "Enter a valid email address." },
        { id: "subject", label: "Subject", validate: v => v.trim().length > 0 || "Enter a subject." },
        { id: "message", label: "Message", validate: v => v.trim().length >= 10 || "Enter a message of at least 10 characters." }
    ];
    const summary = document.getElementById("form-errors");
    const errorList = document.getElementById("error-list");
    const status = document.getElementById("form-status");

    function clearError(field) {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.id + "-error");
        input.removeAttribute("aria-invalid");
        const ids = (input.getAttribute("aria-describedby") || "").split(/\\s+/).filter(id => id && id !== field.id + "-error");
        if (ids.length) input.setAttribute("aria-describedby", ids.join(" "));
        else input.removeAttribute("aria-describedby");
        error.textContent = "";
    }
    function setError(field, message) {
        const input = document.getElementById(field.id);
        input.setAttribute("aria-invalid", "true");
        const ids = (input.getAttribute("aria-describedby") || "").split(/\\s+/).filter(Boolean);
        if (!ids.includes(field.id + "-error")) ids.push(field.id + "-error");
        input.setAttribute("aria-describedby", ids.join(" "));
        document.getElementById(field.id + "-error").textContent = message;
    }
    fields.forEach(field => {
        document.getElementById(field.id).addEventListener("input", () => {
            if (field.validate(document.getElementById(field.id).value) === true) clearError(field);
        });
    });
    form.addEventListener("submit", event => {
        event.preventDefault();
        errorList.replaceChildren();
        status.textContent = "";
        let invalidCount = 0;
        fields.forEach(field => {
            const result = field.validate(document.getElementById(field.id).value);
            if (result === true) {
                clearError(field);
                return;
            }
            invalidCount++;
            setError(field, result);
            const item = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#" + field.id;
            link.textContent = field.label + ": " + result;
            item.appendChild(link);
            errorList.appendChild(item);
        });
        if (invalidCount) {
            summary.hidden = false;
            summary.focus();
            return;
        }
        summary.hidden = true;
        status.textContent = "Your entries passed the form checks. This demonstration does not send or store your message.";
        form.reset();
    });
})();