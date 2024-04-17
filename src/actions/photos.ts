"use server";

import {
  savePhoto as savePhotosFromDB,
  getPhotos as getPhotosFromDB,
} from "../db/photos";

export async function savePhoto(photoBase64) {
  console.log("before saving", getPhotosFromDB());
  savePhotosFromDB(photoBase64);
  console.log("after saving", getPhotosFromDB());
}

export async function getPhotos() {
  return getPhotosFromDB();
}
