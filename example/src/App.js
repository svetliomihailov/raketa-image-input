import React from 'react'
import { RaketaUIProvider } from 'raketa-ui'

import {
  ImagePicker,
  MediaManagerContext
} from '@raketa-cms/raketa-image-picker'
import '@raketa-cms/raketa-image-picker/dist/index.css'
import IMAGES from './IMAGES'

class FakeMediaManager {
  findAll(callback, params = {}) {
    return callback(IMAGES)
  }
}

const mediaManager = new FakeMediaManager('/')

const App = () => {
  return (
    <RaketaUIProvider>
      <MediaManagerContext.Provider value={mediaManager}>
        <ImagePicker />
      </MediaManagerContext.Provider>
    </RaketaUIProvider>
  )
}

export default App
