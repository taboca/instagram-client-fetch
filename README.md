# Introduction

This client application is intended to deal with Instagram API and fetch content. This sample was produced amidst the TelaSocial project, aiming to validate new changes in the Instagram API.

## Instragram widget

* Requirement instagram-node

## Setup authorization flow

* Set your app at Instagram;
* Match the redirect URL, see index.js
* node index.js at your redirect server
* run yourserver.com:3333/authorize_user
* Get token and save it in the config.js

## Run the API search

* node search.js

# Observations regarding Instagram

* Instagram have changed policy for the public_content feed. Nowadays (2016) you will need to have special permissions for your keys.

# License

All the new code provided here is released under the following license. Other code, such as 3rd-party libraries loaded from package.json, or indirectly loaded, may have their own licenses. Latinoware, Tela Social, RemoteStage, Instagram, and other names, are trademarks of their associated owners. 

```
The MIT License (MIT)
Copyright (c) 2016 Marcio S Galli

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
