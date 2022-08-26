import { getStrapiURL } from "./api";

import defaultImage from "../public/images/background/lightning-water.png"

export function getStrapiMedia(media) {
  if (!media.data || !media.data.attributes || !media.data.attributes.url){
    return defaultImage;
  }
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}