import React from "react";
import PropTypes from "prop-types";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, lang, description, children }) => {
    const {title: defaultTitle, lang: defaultLang, description: defaultDescription, social, author, image, siteUrl } = useSiteMetadata()
  
    const seo = {
        title: title || defaultTitle,
        lang: lang || defaultLang,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: siteUrl,
        twitterUsername : social.twitter,
    }



  
  return (
    <>
    <title>{seo.title}</title>
    <html lang={seo.lang} />
    <meta name="title" content={seo.title} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:locale" content={seo.lang} />
    <meta property="og:site_name" content="Gatsby Starter Blog" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={seo.image} />
    <meta name="description" content={seo.description} />
    <meta name="image" content={seo.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:url" content={seo.url} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:image" content={seo.image} />
    <meta name="twitter:creator" content={seo.twitterUsername} />
    {children}
    </>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};