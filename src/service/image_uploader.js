class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eb8iewly");
    const result = await fetch(
      'http://api.cloudinary.com/v1_1/dn7xk68gh/upload',
      {
        method: "POST",
        body: formData,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;