import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta name='title' content='Sunny Digital Agency ™' />
          <meta
            name='description'
            content='We are a US-based digital agency with more than 10 years of experience developing websites and marketing solutions for local and international clients.'
          />
          <meta
            name='keywords'
            content='software development, digital, digital agency, marketing, websites, custom development, design'
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://sunnydigitalagency.com/' />
          <meta property='og:title' content='Sunny Digital Agency ™' />
          <meta
            property='og:description'
            content='We are a US-based digital agency with more than 10 years of experience developing websites and marketing solutions for local and international clients.'
          />
          <meta
            property='og:image'
            content='https://cdn.pixabay.com/photo/2021/04/16/05/13/perth-web-design-6182568_1280.jpg'
          />
          {/* <!-- Twitter --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://sunnydigitalagency.com/'
          />
          <meta property='twitter:title' content='Sunny Digital Agency ™' />
          <meta
            property='twitter:description'
            content='We are a US-based digital agency with more than 10 years of experience developing websites and marketing solutions for local and international clients.'
          />
          <meta
            property='twitter:image'
            content='https://cdn.pixabay.com/photo/2021/04/16/05/13/perth-web-design-6182568_1280.jpg'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
