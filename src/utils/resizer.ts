/**
 *
 * @param file
 * @param resizeWidth
 * @param newFileName
 * @returns
 */
const resizer = (file: File, resizeWidth: number, newFileName: string): Promise<File> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided.'))
      return
    }

    // Create a FileReader
    const reader = new FileReader()

    // Image turned to base64-encoded Data URI
    reader.readAsDataURL(file)
    reader.onload = function (event: ProgressEvent<FileReader>) {
      const img = new Image() // Create an image
      img.src = event.target!.result as string // Result is base64-encoded Data URI
      img.onload = function () {
        // scale the image to resizeWidth and keep aspect ratio
        const scaleFactor = resizeWidth / img.width
        const elem = document.createElement('canvas')
        elem.width = resizeWidth
        elem.height = img.height * scaleFactor

        // draw in canvas
        const ctx = elem.getContext('2d')
        ctx!.drawImage(img, 0, 0, elem.width, elem.height)

        // get the base64-encoded Data URI from the resized image
        const srcEncoded = ctx!.canvas.toDataURL('image/png', 1)

        // CONVERT RESIZED IMAGE BACK TO IMAGE FILE
        const arr = srcEncoded.split(',')
        const mime = arr[0].match(/:(.*?);/)![1]
        const bstr = Buffer.from(arr[1], 'base64').toString('binary')
        let n = bstr.length
        const u8arr = new Uint8Array(n)

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }

        const resizedFile = new File([u8arr], `${Date.now()}__${newFileName}.png`, {
          type: mime,
        })

        resolve(resizedFile)
      }
    }
    reader.onerror = function () {
      reject(new Error('Failed to read the file.'))
    }
  })
}

export default resizer
