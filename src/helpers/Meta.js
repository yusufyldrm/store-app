import Helmet from 'react-helmet';
import propTypes from 'prop-types';

const Meta = ({
  title,
  description,
  keywords,
  image
}) => {
  return (
    <Helmet
      defaultTitle='Store App'
      titleTemplate='%s · Store App'
      defer={false}
    >
      <title>{title}</title>
      <meta name='keyword' content={keywords} />
      <meta name="description" content={description} data-react-helmet="true" />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta property="og:description" content={description} data-react-helmet="true" />
      <meta property="og:type" content="website" data-react-helmet="true" />

      {image && <meta property="og:image" content={image} data-react-helmet="true" />}
      {image && <meta property="og:image:type" content="image/png" />}

      <link rel="shortcut icon" type="image/x-icon" href={`/icons/favicon.ico`} />
      <link rel="mask-icon" href={`/icons/favicon.ico`} color="#000" />
      <link rel="icon" type="image/png" sizes="192x192" href={`/icons/logo192.png`} />
      <link rel="icon" type="image/png" sizes="512x512" href={`/icons/logo512.png`} />
      <link rel="apple-touch-icon" sizes="192x192" href={`/icons/logo192.png`} />
      <link rel="apple-touch-icon" sizes="512x512" href={`/icons/logo512.png`} />
    </Helmet>
  )
};

Meta.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  keywords: propTypes.string,
  image: propTypes.string
};

Meta.defaultProps = {
  title: '',
  description: 'Store App',
  keywords: 'store,app',
  image: null
};

export default Meta;
