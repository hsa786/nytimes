import React from "react";
import "./index.scss";

const NewsResults = item => {
  const close = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"> <g id="X"> <line id="_x5C_" fill="none" stroke="black" stroke-width="10" transform="translate(5, 5)" stroke-miterlimit="10" x1="5" y1="5" x2="50" y2="50" stroke-linecap="round"></line> <line id="_x2F_" fill="none" stroke="black" stroke-width="10" transform="translate(5, 5)" stroke-miterlimit="10" x1="5" y1="50" x2="50" y2="5" stroke-linecap="round"></line> </g> <g id="circle"> <circle id="XMLID_16_" opacity="0" fill="none" stroke-width="3" stroke="black" stroke-miterlimit="10" cx="30" cy="30" r="40"></circle> </g> <desc>Created with Snap</desc><defs></defs></svg>`;
  const image =
    item.media && item.media[0] ? item.media[0]["media-metadata"][4].url : null;

  const renderItem = () => (
    <article className="news-detail">
      <button
        onClick={item.onClose}
        className="news-detail__close"
        dangerouslySetInnerHTML={{ __html: close }}
      />
      <p className="news-result__category">{item.type}</p>
      <h2 className="news-detail__title">{item.title}</h2>
      {image ? (
        <img className="news-detail__image" src={image} alt={item.newsTitle} />
      ) : null}
      <p className="news-detail__body">{item.abstract}</p>
    </article>
  );
  return <>{renderItem()}</>;
};

export default NewsResults;
