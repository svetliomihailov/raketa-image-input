import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@raketa-cms/raketa-mir'

import ImagePicker from './ImagePicker'

class ImageInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedImage: props.image || false
    }
  }

  handleChange(selectedImage) {
    this.setState({ selectedImage }, () => {
      if (this.props.onChange) this.props.onChange(selectedImage)
    })
  }

  render() {
    const { name, mediaManager } = this.props
    const { selectedImage } = this.state

    return (
      <ThemeProvider theme={theme}>
        <div>
          <ImagePicker
            mediaManager={mediaManager}
            value={selectedImage}
            onChange={(selectedImage) => this.handleChange(selectedImage)}
          />

          <input
            type='hidden'
            name={name}
            value={selectedImage ? selectedImage.id : ''}
          />
        </div>
      </ThemeProvider>
    )
  }
}

export default ImageInput
