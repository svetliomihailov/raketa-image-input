import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@raketa-cms/raketa-mir'

import {
  ImagePicker,
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
    <ThemeProvider theme={theme}>
      <MediaManagerContext.Provider value={mediaManager}>
        <ImagePicker />
      </MediaManagerContext.Provider>
    </ThemeProvider>
  )
}

export default App
