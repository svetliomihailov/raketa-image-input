import React from 'react'
import styled from 'styled-components'
import { H, Button } from '@raketa-cms/raketa-mir'

import Dropzone from 'react-dropzone'

const StyledDropzone = styled.div`
  position: relative;
  margin-bottom: 16px;
  height: 350px;
  color: #666;
  background-color: #efefef;
  border: 2px dashed #ddd;
`

const DropzoneLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 16px;
`

const Dropbox = ({ buttonLabel, onDrop }) => {
  const dropzoneRef = React.createRef()

  const handleOpen = () => dropzoneRef.current.open()

  return (
    <React.Fragment>
      <StyledDropzone>
        <Dropzone ref={dropzoneRef} onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <DropzoneLabel {...getRootProps()}>
              <H size='large'>Select files from your computer</H>
              <small>or drag and drop here</small>
              <input {...getInputProps()} />
            </DropzoneLabel>
          )}
        </Dropzone>
      </StyledDropzone>

      <Button
        type='button'
        variant='success'
        onClick={handleOpen}
        style={{ marginBottom: '1em' }}
      >
        {buttonLabel}
      </Button>
    </React.Fragment>
  )
}

Dropbox.defaultProps = { buttonLabel: 'Select files...' }

export default Dropbox
