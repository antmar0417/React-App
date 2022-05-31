import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <iframe
    src={`https://www.youtube-nocookie.com/embed/${embedId}`}
    frameBorder="0"
    allowFullScreen
    title="Youtube player"
  />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
