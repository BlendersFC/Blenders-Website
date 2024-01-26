import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const scrollToTeamMembers = e => {
    e.preventDefault()
    const teamMembersSection = document.getElementById("meet-team")

    if (teamMembersSection) {
      teamMembersSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
          color: `var(--color-primary)`,
          fontWeight: `bold`,
          position: "relative",
        }}
      >
        {siteTitle}
      </Link>
      <a
        href="#meet-team"
        onClick={scrollToTeamMembers}
        style={{
          color: "var(--color-primary)",
          fontWeight: "bold",
          cursor: "pointer",
          position: "relative",
          textDecoration: "underline",
          transition: "color 0.3s ease-in-out",
        }}
        onMouseEnter={e => (e.target.style.color = "var(--color-secondary)")}
        onMouseLeave={e => (e.target.style.color = "var(--color-primary)")}
      >
        Team
      </a>
    </header>
  )
}

export default Header
