'use client'

import { toast } from '@/components/ui/use-toast'
import ReactDropzone, { DropEvent, FileRejection } from 'react-dropzone'

export default function FileUpload() {
  function handleUpload<T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ): void {
    throw new Error('Function not implemented.')
  }

  function handleHover(): any {
    throw new Error('Function not implemented.')
  }

  function handleExitError() {
    throw new Error('Function not implemented.')
  }
  const acceptedFiles = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif', 'bmp', '.webp', 'ico'],
    'video/*': ['.mp4', '.mov', '.wmv', '.flv', '.avi', '.mkv'],
    'audio/*': ['.mp3', '.wav', '.ogg', '.flac', '.aac', '.wma'],
  }

  return (
    <ReactDropzone
      onDrop={handleUpload}
      onDragEnter={handleHover}
      onDragLeave={handleHover}
      onDropRejected={() => {
        handleExitError()
        toast({
          variant: 'destructive',
          title: 'Error uploading file(s)',
          description: 'Allowed Files: Audio, Video and Images',
          duration: 5000,
        })
      }}
      onError={() => {
        handleExitError()
        toast({
          variant: 'destructive',
          title: 'Error uploading file(s)',
          description: 'Allowed Files: Audio, Video and Images',
          duration: 5000,
        })
      }}
      accept={acceptedFiles}
    ></ReactDropzone>
  )
}
