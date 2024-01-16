import FileUpload from '@/components/fileUpload'

export default function Home() {
  return (
    <main className="space-y-16 pb-8">
      <div className="space-y-16">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free and Open Source File Converter
        </h1>
        <p className="text-gray-400 text-md md-text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unleash your creativity with the help of our free and open source file
          converter. Convert your files to any format you want. No registration
          required. No ads. No tracking. No BS.
        </p>
      </div>
      <FileUpload />
    </main>
  )
}
