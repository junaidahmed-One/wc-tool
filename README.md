# WC-Tool

This project is a challenge to build your own version of the Unix command line tool `wc`! This challenge is from John Cricket coding challenges.

## Project Description

The `wc` (word count) tool reads a file and counts the number of lines, words, and bytes in the file. This project involves creating a custom version of the `wc` tool using Node.js.

## Prerequisites

-   Node.js (version 14 or later)
-   npm (Node Package Manager)

## Getting Started

Follow the steps below to set up and run the project:

1. **Clone the repository**

    ```bash
    git clone https://github.com/junaidahmed-One/wc-tool.git
    cd wc-tool
    ```

2. **Install the dependencies**

    ```bash
    npm install
    ```

3. **Build the project**
    ```bash
    npm run build
    ```
4. **Link the tool globally**

    ```bash
    npm link
    ```

5. **Navigate to the source directory**
    ```bash
    cd test/
    ```

## Usage

The tool can be run with the following command:

```bash
wc-tool -c <filename>
```

To see the list of supported flags, use the help option:

```bash
wc-tool --help
```

## Note

Currently, this project doesn't support standard input.
