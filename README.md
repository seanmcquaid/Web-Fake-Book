# Web Fake Book

This repo will be a copy of the native app iRealB but for the web!

## Front End

1. React
2. Styled Components
3. RxJs + Axios Observable
4. React-Router-Dom
5. Context API (Specifically for the chart pages)

## Back End

1. Mongoose + MongoDB
2. Express/Node

### Home

1. Has links to charts searcher and the option to add a chart

### Add Chart

1. User must write the chart in functional harmony terms
2. User must select a default key
3. User must select how many bars
4. User must select time signature
5. User can technically enter a chord per beat
6. User can add in Section markers (AABA)
7. User can add in repeats

### Chart Info

1. Chart is displayed in default key
2. User can transpose the chart to a different key

### Charts Searcher

1. All charts for the site are displayed in a list (with pagination)
2. Can search for specific chart (use fuzzy search)
3. Can select a chart and be taken to the chart info page
