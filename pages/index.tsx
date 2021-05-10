import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Modal from 'react-modal';

import { ToastContainer, toast } from 'react-toastify';

import Hero from '../components/hero/Hero';
import Layout from '../components/layout/Layout';

import modalStyles from '../styles/form-modal.module.scss';
import ContactForm, {
  OnFormSubmit,
} from '../components/contact-form/ContactForm';

import type { FormResponse } from '../utils/definitions';

import 'react-toastify/dist/ReactToastify.css';
import styles from './index.module.scss';
import axios from 'axios';

Modal.setAppElement('#__next');

const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API;

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const onFormSubmit: OnFormSubmit = async (name, company, email, message) => {
    try {
      const response = await fetch(`${contactApiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          message,
        }),
      });

      const data: FormResponse = await response.json();

      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        setModalOpen(false);
      }
    } catch (err) {
      toast.error(
        "Sorry, we're having problems with our servers, please try again later.",
      );
    }
  };

  return (
    <>
      <Head>
        <title>Sunny Digital Agency ™ - Home</title>
      </Head>
      <Modal
        isOpen={modalOpen}
        className={modalStyles.formModal}
        onRequestClose={() => setModalOpen(false)}
        contentLabel='Contact Form Modal'
      >
        <h1 className={styles.contactFormTitle}>
          Please share with us what kind of project you need, we're happy to
          help!
        </h1>
        <ContactForm onFormSubmit={onFormSubmit} />
      </Modal>
      <Layout>
        <Hero
          imagePosition='Right'
          imageUrl='/images/agency-hero.jpg'
          imageAltText='People working with client using face masks'
          title='More than 10 years helping businesses develop their digital strategy'
          paragraph="We're here to help you develop whatever project you have in mind, we can make it reality! Whether it's a website, e-commerce or social media project, you name it."
          primaryCta={{
            text: 'Contact Us',
            onClick: () => {
              setModalOpen(true);
            },
          }}
          secondaryCta={{
            text: 'Know More',
            onClick: () => {
              router.push('/about-us');
            },
          }}
        />
        <ToastContainer />
      </Layout>
    </>
  );
};

export default Home;
