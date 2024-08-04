export function isDate(val) {
    // Cross realm compatible
    return Object.prototype.toString.call(val) === '[object Date]';
  }
  
  export function isObj(val) {
    return typeof val === 'object';
  }
  
  export function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }
  
  function buildForm({ action, params }) {
    if (!params || typeof params !== 'object') {
      console.error('Invalid params passed to buildForm');
      return null;
    }
    console.log("Form Params:", params); // Log params
  
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', action);
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      input.setAttribute('value', stringifyValue(params[key]));
      form.appendChild(input);
    });
  
    return form;
  }
  
  export function post(details) {
    const form = buildForm(details);
    if (form) {
      document.body.appendChild(form);
      form.submit();
      form.remove();
    } else {
      console.error('Failed to build form');
    }
  }
  