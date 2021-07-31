import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/themes";
import Head from "next/head";
import Header from "ui/components/Header/Header";
import Footer from "ui/components/Footer/Footer";
import { AppContainer } from "ui/styles/pages/_app.styles";
import { AuthProvider } from "contexts/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header title={'Blog'} />
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;