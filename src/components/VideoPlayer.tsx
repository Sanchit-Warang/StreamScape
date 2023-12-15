import { useEffect } from 'react'

type Props = {
  videoUrl: string
}

const VideoPlayer = ({ videoUrl }: Props) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Block pop-up windows
      event.preventDefault()
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
  return (
    <iframe
      src={videoUrl}
      title="Video Player"
      sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
      allowFullScreen
      className="w-full h-[80vh]"
    ></iframe>
  )
}

export default VideoPlayer
