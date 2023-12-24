import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
    	site {
      	siteMetadata {
        	title
            lang
        	description
        	social {
          	twitter
        	}
        	author {
          	name
        	}
        	image
        	siteUrl
      	}
    	}
  	}
    `)

    return data.site.siteMetadata
}