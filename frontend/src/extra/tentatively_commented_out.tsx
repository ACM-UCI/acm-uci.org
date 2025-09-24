
// HERE - I was attempting to query the public directory for images
// trying to do this for any folder where there's a bunch of images
// ran into a CORS issue ?
// Anyway, right now we are just hard-coding it but will fix the problem eventually

/*
let top_banner_image_directory = path.join(__dirname, "/home/top_banner/")
let top_banner_images: any = []

async function get_top_banner_images() {
  const response = await fetch('http://localhost:5000/api/top_banner_images'); // this is the CORS error
  if (!response.ok) {
    throw new Error(`ERROR: ${response.status}`);
  }
  const data = await response.json()
  console.log(data)
  top_banner_images = [...data]
}

useEffect(() => {
  get_top_banner_images()
})
*/