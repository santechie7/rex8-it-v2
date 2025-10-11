"use client"
import React from 'react'

const Footer = () => {
  return (
      <footer>
        <div className="footer-container">
            <div className="footer-brand">
                <h3>REX EIGHT IT</h3>
                <p>Empowering small to medium-sized businesses with enterprise-level Power Platform solutions. We specialize in data engineering, business intelligence, and intelligent automation.</p>
                <div className="footer-badge">
                    <strong>Rex Eight L.L.C.</strong>
                    Veteran & Woman Owned Business
                </div>
            </div>

            <div className="footer-links">
                <h4>Services</h4>
                <ul>
                    <li><a href="#services">Data Engineering</a></li>
                    <li><a href="#services">Business Intelligence</a></li>
                    <li><a href="#services">App Development</a></li>
                    <li><a href="#services">AI Automation</a></li>
                    <li><a href="#services">Cloud Migration</a></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Company</h4>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#showcase">Case Studies</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rex Eight L.L.C. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
  )
}

export default Footer