import React from "react";
import MainImage from "./../components/Content/mainImage";
import MainContent from "./../components/Content/mainContent";
import PopularContent from './../components/Content/popularContent'

import { useParams, useNavigate } from 'react-router-dom';
import "./../css/content.css";
import { img, content, tags, popularContents } from './../assets/mockData_content'



export default function Content() {
  const { id } = useParams();
  console.log("🚀 ~ file: Content.jsx:7 ~ Content ~ id:", id)
  return <>
    <MainImage imgSrc={img.src} imgAltText={img.altText} />
    <MainContent id={+id} content={content} hotTags={tags} />
    <PopularContent popularContents={popularContents} />
  </>;
}
