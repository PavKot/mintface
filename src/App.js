import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppPreviewSection from './components/AppPreviewSection';
import CollectionsSection from './components/CollectionsSection';
import DownloadSection from './components/DownloadSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { Colors, Typography } from './constants/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${Typography.fontFamily};
    background-color: ${Colors.background};
    color: ${Colors.text};
    line-height: ${Typography.lineHeight.normal};
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.accent};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.primary};
  }

  button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${Colors.background};
`;

const MainContent = styled.main`
  overflow-x: hidden;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onNavigate={navigateToPage} />;
      case 'terms':
        return <TermsOfService onNavigate={navigateToPage} />;
      default:
        return (
          <MainContent>
            <HeroSection />
            <FeaturesSection />
            <CollectionsSection />
            <AppPreviewSection />
            <DownloadSection />
            <Footer onNavigate={navigateToPage} />
          </MainContent>
        );
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {renderCurrentPage()}
      </AppContainer>
    </>
  );
}

export default App;
