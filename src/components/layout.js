import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
          {children}
        </div>

        <footer className="bg-teal">
          <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Web design and development{" "}
              Enrique Sanz & Anne M. Irizar & Diego Casado
          </p>

          <p>
              All content copyright © IoT 2019
          </p>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
