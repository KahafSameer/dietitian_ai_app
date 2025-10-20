/*
Purpose: Frontend interactions for Dietitian AI App
- Handles form submission and client-side validation
- Displays loading state and handles API responses
*/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#diet-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const loadingText = document.querySelector('#loading-text');

  form.addEventListener('submit', () => {
    if (loadingText) loadingText.hidden = false;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.originalText = submitBtn.textContent;
      submitBtn.textContent = 'Generating...';
    }
  });

  // Utility: simple client-side number validation
  function isPositiveNumber(value) {
    return !Number.isNaN(Number(value)) && Number(value) > 0;
  }

  window.validateInputs = function validateInputs() {
    const weight = document.querySelector('#weight')?.value;
    const height = document.querySelector('#height')?.value;
    const age = document.querySelector('#age')?.value;

    const ok = isPositiveNumber(weight) && isPositiveNumber(height) && isPositiveNumber(age);
    const errorEl = document.querySelector('#form-error');
    if (errorEl) {
      errorEl.textContent = ok ? '' : 'Please enter positive numeric values for weight, height, and age.';
    }
    return ok;
  };
});
