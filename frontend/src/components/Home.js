import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'
import HelpSections from './HelpSections'

function Home() {
  return (
    <div>
        <SearchBar/>
        <div className="sectionsContainer">
        <HelpSections title='Branches' description='Abstract Branches lets you manage, version, and document your designs in one place.' />
        <HelpSections title='Manage your account' description='Configure your account settings, such as your email, profile details, and password.' />
        <HelpSections title='Manage organizations, teams, and projects' description='Use Abstract organizations, teams, and projects to organize your people and your work.' />
        <HelpSections title='Manage billing' description='Change subscriptions and payment details. ' />
        <HelpSections title='Authenticate to Abstract' description='Set up and configure SSO, SCIM, and Just-in-Time provisioning.' />
        <HelpSections title='Abstract support' description='Get in touch with a human.' />
      </div>
    </div>
  )
}

export default Home