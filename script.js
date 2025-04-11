// Handle form submissions
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
              e.preventDefault();

                    const inputs = form.querySelectorAll("input, select");
                          let valid = true;

                                inputs.forEach(input => {
                                        if (input.hasAttribute("required") && !input.value.trim()) {
                                                  input.style.border = "2px solid red";
                                                            valid = false;
                                                                    } else {
                                                                              input.style.border = "1px solid #ccc";
                                                                                      }
                                                                                            });

                                                                                                  if (valid) {
                                                                                                          alert("Form submitted successfully! (Functionality coming soon)");
                                                                                                                  form.reset(); // Optional: clear the form after submission
                                                                                                                        } else {
                                                                                                                                alert("Please fill out all required fields.");
                                                                                                                                      }
                                                                                                                                          });
                                                                                                                                            });
                                                                                                                                            });