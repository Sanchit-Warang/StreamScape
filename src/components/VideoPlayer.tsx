type Props = {
  videoUrl: string
}

const VideoPlayer = ({videoUrl}: Props) => {
  return (
      <iframe
        src={videoUrl}
        title="Video Player"
        // sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        allowFullScreen
        className="w-full h-[80vh]"
      ></iframe>
  )
}

export default VideoPlayer
