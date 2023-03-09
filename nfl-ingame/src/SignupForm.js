import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
    zipcode: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // do something with the form data, such as send it to a server
  };

  return (
    React.createElement('div', { className: 'signup-form' },
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'email' }, 'Email:'),
          React.createElement('input', { type: 'email', id: 'email', name: 'email', value: formData.email, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'password' }, 'Password:'),
          React.createElement('input', { type: 'password', id: 'password', name: 'password', value: formData.password, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'firstName' }, 'First Name:'),
          React.createElement('input', { type: 'text', id: 'firstName', name: 'firstName', value: formData.firstName, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'lastName' }, 'Last Name:'),
          React.createElement('input', { type: 'text', id: 'lastName', name: 'lastName', value: formData.lastName, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'dob' }, 'Date of Birth:'),
          React.createElement('input', { type: 'date', id: 'dob', name: 'dob', value: formData.dob, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'country' }, 'Country:'),
          React.createElement('input', { type: 'text', id: 'country', name: 'country', value: formData.country, onChange: handleInputChange, required: true })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'zipcode' }, 'Zip Code:'),
          React.createElement('input', { type: 'text', id: 'zipcode', name: 'zipcode', value: formData.zipcode, onChange: handleInputChange, required: true })
        ),
        React.createElement('button', { type: 'submit' }, 'Sign Up')
      )
    )
  );
}

export default SignupForm;
