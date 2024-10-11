# UAb Auto Signature

## Overview

**UAb Auto Signature** is a browser extension designed to help Universidade Aberta (UAb) students automatically insert their personalized signatures into forum messages. This tool simplifies the process of maintaining a consistent and professional signature across different platforms.

You can find the Chrome extension [here](https://chromewebstore.google.com/detail/uab-auto-signature/lgokkkbgggejnenlgcokgadhcfgiddpd?authuser=0&hl=en-US).

At the time of writting this we're averaging **~100 active users** and **~600 installs**.

## Features

- **Customizable Signatures**: Easily create and customize your signature with different parts like message, title, subtitle, and paragraph.
- **Live Preview**: See how your signature looks in real-time before saving.
- **HTML Support**: Add custom HTML to your signature for more advanced styling.
- **Persistent Storage**: Your signature settings are saved and synced across devices using Chrome's storage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/uab-auto-signature.git
   cd uab-auto-signature
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The extension will be available at `http://localhost:5173/`.

### Building for Production

To build the extension for production, run:

```bash
npm run build
```

The production-ready files will be located in the `dist/` directory.

## Usage

1. Load the extension in your browser:

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the `dist/` directory.

2. Configure your signature:
   - Click on the extension icon in the browser toolbar.
   - Use the configuration popup to customize your signature.
   - Save your settings and start using your signature in UAb forums.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Developed by [Miguel Gadelha](https://www.linkedin.com/in/miguelgadelha/)
- Built with [Preact](https://preactjs.com/) and [Vite](https://vitejs.dev/)

## Contact

For any inquiries, please contact [Miguel Gadelha](https://www.linkedin.com/in/miguelgadelha/).
