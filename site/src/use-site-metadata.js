import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          imageUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
