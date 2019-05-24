import React from "react";
import "./index.scss";

const NewsResults = ({ items, onClick }) => {
  const nextArrow = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <g><path d="M360.3,970.4l363-435.6c16.8-20.2,16.8-49.5,0-69.7l-363-435.6c-19.3-23.1-53.6-26.2-76.7-7c-23.1,19.2-26.2,53.6-7,76.7l363,435.6v-69.7l-363,435.6c-19.2,23.1-16.1,57.4,7,76.7C306.8,996.6,341.1,993.5,360.3,970.4L360.3,970.4z"/></g> </svg>`;

  const renderItems = () =>
    items.map((item, i) => {
      const image =
        item.media && item.media[0]
          ? item.media[0]["media-metadata"][0].url
          : null;

      return (
        <li className="news-result" key={`${item.id}${i}`}>
          {/* result.id is not unique in few cases, hence using index */}
          {image ? (
            <img
              className="news-result__image"
              src={image}
              alt={item.newsTitle}
            />
          ) : null}
          <div className="news-result__data">
            <p className="news-result__title">{item.title}</p>
            <p className="news-result__byline">{item.byline}</p>
            <p className="news-result__category">{item.type}</p>
            <time className="news-result__date">{item.published_date}</time>
          </div>
          <button
            onClick={() => onClick(item)}
            className="news-result__detail-cta"
            dangerouslySetInnerHTML={{ __html: nextArrow }}
          />
        </li>
      );
    });
  return <ul className="news-results">{renderItems()}</ul>;
};

export default NewsResults;
