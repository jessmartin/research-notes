# Jess's Research Notes

## How To Refresh My Notes

I currently use Bear.app to write and store my notes. Here are the steps to get them out of Bear and into this notebook:

1. Export notes from Bear via the [Bear-Markdown-Export](https://github.com/andymatuschak/Bear-Markdown-Export) project:

   ```bash
   python3 bear_export_sync.py --out ~/Notes/Bear
   ```

2. Copy the `notebook` folder, which is only notes tagged `#notebook`:

   ```bash
   cp -r ~/Notes/Bear/notebook/* content/garden/
   ```

3. Copy over images individually. Ugh.

4. Edit paths to images to refer to the correct location.

   ```bash
   sed -i '' -e 's/..\/Bear/\/Bear/g'
   ```

5. Fire up gatsby and make sure things are connected.

   ```bash
   gatsby develop
   ```

## Colophon

This site uses the [Gatsby Garden Theme](https://www.npmjs.com/package/gatsby-theme-garden), which is modeled after [Andy Matuschak's notes](https://notes.andymatuschak.org/).
