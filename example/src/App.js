import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@raketa-cms/raketa-mir'

import {
  ImagePicker,
  ImageInput,
  MediaManagerContext
} from '@raketa-cms/raketa-image-picker'
import IMAGES from './IMAGES'

class FakeMediaManager {
  findAll(callback, params = {}) {
    return callback(IMAGES)
  }
}

const mediaManager = new FakeMediaManager('/')

const App = () => {
  return (
    <MediaManagerContext.Provider value={mediaManager}>
      <ThemeProvider theme={theme}>
        <ImagePicker />
      </ThemeProvider>

      <ImageInput mediaManager={mediaManager} />
    </MediaManagerContext.Provider>
  )
}

export default App
