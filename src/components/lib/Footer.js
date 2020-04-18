import React from 'react'
import { Link } from 'gatsby'

import TBTCLogo from '../svgs/TBTCLogo'


const Footer = () => (
  <footer>
    <div className="footer-logo">
      <TBTCLogo width="165" />
    </div>
    <nav className="footer-menu">
      <div className="top-menu">
        <ul>
          <li>
            <Link to="/about">
              О нас
            </Link>
          </li>
          <li>
            <Link to="/news">
              Новости
            </Link>
          </li>
          <li>
            <Link to="/developers">
              Разработчикам
            </Link>
          </li>
          <li>
            <Link to="/faq">
              Ответы на вопросы
            </Link>
          </li>
          <li>
            <a href="https://dapp.test.tbtc.network/" target="_blank" rel="noopener noreferrer">
              dAPP
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-menu">
        <p className="copyright">&copy; 2020 tBTC</p>
      </div>
    </nav>
  </footer>
)

export default Footer
