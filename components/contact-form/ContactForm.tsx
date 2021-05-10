import React from 'react';
import Button from '../button/Button';

import styles from './ContactForm.module.scss';

export type OnFormSubmit = (
  name: string,
  company: string,
  email: string,
  message: string
) => void;

interface ContactFormProps {
  onFormSubmit: OnFormSubmit;
}

const ContactForm: React.FC<ContactFormProps> = ({ onFormSubmit }) => {
  const formSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      company,
      email,
      message,
    }: {
      [key: string]: HTMLInputElement;
    } = e.currentTarget;

    onFormSubmit(name.value, company.value, email.value, message.value);
  };

  return (
    <form className={styles.contactForm} onSubmit={formSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <span></span>
      <label htmlFor="company">Company</label>
      <input type="text" name="company" id="company" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols={30} rows={10}></textarea>
      <Button className={styles.formButton}>Send Message</Button>
    </form>
  );
};

export default ContactForm;
