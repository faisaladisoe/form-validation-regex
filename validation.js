const patterns = {
  username: /^[\w]{5,12}$/,
  email: /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,})(\.[a-z]{2,})?$/,
  password: /^[\w0-9@-]{8,20}$/,
  telephone: /^[0-9]{10,12}$/,
  slug: /^[a-z0-9-]{8,20}$/
};

const validateRegex = (field, regex) => {
  let isValid = regex.test(field.value);
  field.className = isValid ? 'valid' : 'invalid';
};

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validateRegex(e.target, patterns[e.target.attributes.name.value]);
  });
});
