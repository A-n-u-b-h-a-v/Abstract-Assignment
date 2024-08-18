// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HelpSections from './components/HelpSections';
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="sectionsContainer">
        <HelpSections title='Branches' description='Abstract Branches lets you manage, version, and document your designs in one place.' />
        <HelpSections title='Manage your account' description='Configure your account settings, such as your email, profile details, and password.' />
        <HelpSections title='Manage organizations, teams, and projects' description='Use Abstract organizations, teams, and projects to organize your people and your work.' />
        <HelpSections title='Manage billing' description='Change subscriptions and payment details. ' />
        <HelpSections title='Authenticate to Abstract' description='Set up and configure SSO, SCIM, and Just-in-Time provisioning.' />
        <HelpSections title='Abstract support' description='Get in touch with a human.' />
      </div>

      <Footer />
    </div>
  );
}

export default App;
