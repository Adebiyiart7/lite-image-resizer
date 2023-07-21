# Lite Image Resizer

 <img src="./header.png?raw=true">
   <br>
🥤 A utility for resizing images.
  <br>
  
## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Invoke](#invoke)

## 💽Installation

```
 npm install lite-image-resizer
```

<br>

## 📄Usage

### Import in your ts or js file

```jsx
import { imageResizer } from 'lite-image-resizer'
```

<br>

## 🛠Invoke

```jsx
const resizedImage = await imageResizer(file, 400, 'rabbit')
```

<br>

## 📦 Props

The imageResizer function takes in 3 arguments.

| Params      | Description                                                                                      | Type       | Default |
| ----------- | ------------------------------------------------------------------------------------------------ | ---------- | ------- |
| file        | Raw file from HTML input                                                                         | _`File`_   | none    |
| resizeWidth  | The width you want to resize the image to. The imageResizer function will maintain aspect ratio. | _`Number`_ | none    |
| newFileName | The function receives the newFileName and prefixes it with the current timestamp.                | _`String`_ | none    |

## Issues

If you experience any anomaly or bug while using the component, feel free to create an issue on this repo
[issues](https://github.com/Adebiyiart7/lite-image-resizer/issues/new/choose)
<br>

## 👷🏽 Contribution Guide

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star. Thanks!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
