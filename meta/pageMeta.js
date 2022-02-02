import Head from "next/head";

const PageMeta = ({
  metaTitle = "Aha Homework",
  metaDescription = "Aha Frontend Homework",
  metaImgSrc= "/images/aha-meta-img.jpg"
}) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content="" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImgSrc} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height " content="630" />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default PageMeta;