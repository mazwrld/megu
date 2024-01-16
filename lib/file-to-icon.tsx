import { Icons } from '@/components/icons'

type FileType = 'video' | 'audio' | 'text' | 'image'

export default function fileToIcon(file_type: string): JSX.Element {
  if (file_type.includes('video')) return <Icons.video />
  if (file_type.includes('audio')) return <Icons.speaker />
  if (file_type.includes('text')) return <Icons.fileText />
  if (file_type.includes('image')) return <Icons.image />
  else return <Icons.file />
}
